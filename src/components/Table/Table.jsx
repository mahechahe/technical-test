import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {
  Box,
  CircularProgress,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import { getDetailCharacter, getCharacters } from "../../htttp/getHttp";
import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import "./table.css";
import { ModalDetail } from "../Modal/ModalDetail";

export const Table = () => {
  const [open, setOpen] = useState(false);
  const [character, setCharacter] = useState(null);

  /**
   * This is the initial state of the table component that is responsible for managing the loading, paging and data of the table
   * @param isLoading boolean
   * @param {data} array
   * @param {total} number
   * @param {page} number
   * @param {pageSize} number
   */
  const [pageState, setPageState] = useState({
    isLoading: false,
    data: [],
    total: 0,
    page: 1,
    pageSize: 10,
  });

  useEffect(() => {
    /**
     * This react useEffect hook is responsible for making the call to the star wars api for each time the page number is changed, it is also responsible for managing the loading and total data
     */
    const fetchData = async () => {
      setPageState((old) => ({ ...old, isLoading: true }));
      /**
       * This getCharacters function is responsible for making the call to the API by sending the page number requested by the client as a parameter.
       * @param {page} number
       */
      const response = await getCharacters(pageState.page);
      setPageState((old) => ({
        ...old,
        isLoading: false,
        data: response.results,
        total: response.count,
      }));
    };
    fetchData();
  }, [pageState.page, pageState.pageSize]);

  /**
   * This arrow function is responsible for making a request to the API requesting the data of a specific character. It receives a URL as a parameter. It is also responsible for opening and managing its status.
   * @param {url} string
   *
   */
  const handleOpen = async (url) => {
    try {
      setOpen(true);
      const characterResponse = await getDetailCharacter(url);
      setCharacter(characterResponse);
    } catch (error) {
      console.log(error.message);
    }
  };

  /**
   * This is the configuration of each column of the table. It is responsible for managing and layout each section of the column.
   *
   */
  const columns = [
    {
      field: "name",
      headerName: "Name",
      headerClassName: "super-app-theme--header",
      flex: 1,
      minWidth: 150,
      renderCell: (params) => {
        return (
          <div
            style={{
              borderLeft: "3px solid red",
              paddingLeft: "12px",
              height: "20px",
              alignItems: "center",
              display: "flex",
            }}
          >
            {params.value}
          </div>
        );
      },
    },
    {
      field: "height",
      headerName: "Height",
      headerClassName: "super-app-theme--header",
      flex: 1,
      minWidth: 100,
      renderCell: (params) => <>{params.value}</>,
    },
    {
      field: "birth_year",
      headerName: "Birth Year",
      headerClassName: "super-app-theme--header",
      flex: 1,
      minWidth: 100,
      renderCell: (params) => (
        <div
          style={{
            borderLeft: "3px solid #3a0ca3",
            paddingLeft: "12px",
            height: "20px",
            alignItems: "center",
            display: "flex",
          }}
        >
          {params.value}
        </div>
      ),
    },
    {
      field: "gender",
      headerName: "Gender",
      headerClassName: "super-app-theme--header",
      minWidth: 10,
      flex: 1,
      /**
       * This is the gender column, it has a conditional which manages the color and type of icon used in the column.
       *
       */
      renderCell: (params) => (
        <div style={{ width: "90px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography>{params.value}</Typography>
            {params.value === "female" ? (
              <FemaleIcon
                style={{ background: "#e5383b", borderRadius: "50%" }}
              />
            ) : (
              params.value === "male" && (
                <MaleIcon
                  style={{ background: "#3a0ca3", borderRadius: "50%" }}
                />
              )
            )}
          </div>
        </div>
      ),
    },
    {
      field: "actions",
      headerName: "",
      headerClassName: "super-app-theme--header",
      renderCell: (params) => {
        return (
          <>
            <IconButton onClick={() => handleOpen(params.row.url)}>
              <MoreHorizIcon style={{ color: "#adb5bd" }} />
            </IconButton>
          </>
        );
      },
    },
  ];

  /**
   * This loading, like all the others, validates if the data has already been received from the api. Because it is an asynchronous process, it is good practice to be able to manage it
   *
   */
  if (pageState.data.length === 0) {
    return (
      <div className="table-loading-container">
        <CircularProgress />
      </div>
    );
  }

  return (
    <Box
      sx={{
        "& .white": {
          color: "#adb5bd",
        },
        "& .super-app-theme--header": {
          color: "#adb5bd",
          fontWeight: 700,
          background: "#202020",
        },
        background: "#0a0908",
        overflow: "hidden",
        border: "none",
      }}
    >
      {/* This is the datagrid component rendering each row and each column */}
      <DataGrid
        disableColumnSelector
        disableSelectionOnClick
        autoHeight
        rows={pageState.data}
        getRowId={(pageState) => pageState.name}
        rowCount={pageState.total}
        loading={pageState.isLoading}
        rowsPerPageOptions={[10]}
        pagination
        page={pageState.page - 1}
        pageSize={pageState.pageSize}
        paginationMode="server"
        /** * This onPageChange attribute is responsible for controlling page changes by the user* */
        onPageChange={(newPage) =>
          setPageState((old) => ({ ...old, page: newPage + 1 }))
        }
        onPageSizeChange={(newPageSize) =>
          setPageState((old) => ({ ...old, pageSize: newPageSize }))
        }
        columns={columns}
      />
      {/* This modal is opened whenever the user wants. Change the react hook
      useState setOpen to true so that the modal opens */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <div>
          <ModalDetail
            character={character}
            onClose={() => {
              setOpen(false);
              setCharacter(null);
            }}
          />
        </div>
      </Modal>
    </Box>
  );
};
