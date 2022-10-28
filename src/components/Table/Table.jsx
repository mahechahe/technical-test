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
import { ModalDetail } from "../Modal/ModalDetail";
import { getDetailCharacter } from "../../htttp/getDetailCharacter";
import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";

export const Table = () => {
  const [open, setOpen] = useState(false);
  const [character, setCharacter] = useState(null);
  const [pageState, setPageState] = useState({
    isLoading: false,
    data: [],
    total: 0,
    page: 1,
    pageSize: 10,
  });

  useEffect(() => {
    const fetchData = async () => {
      setPageState(old => ({...old, isLoading: true }))
      const response = await fetch(`https://swapi.dev/api/people/?page=${pageState.page}`)
      const json = await response.json()
      setPageState(old => ({...old, isLoading: false, data: json.results, total: json.count}))
    }
    fetchData()
  }, [pageState.page, pageState.pageSize])

  const handleOpen = async (url) => {
    try {
      setOpen(true);
      const characterResponse = await getDetailCharacter(url);
      setCharacter(characterResponse);
    } catch (error) {
      console.log(error);
    }
  };

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

  if (pageState.data.length === 0) {
    return (
      <div
        style={{
          width: "100%",
          height: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
      <DataGrid
        disableColumnSelector
        disableSelectionOnClick
        autoHeight
        rows={pageState.data}
        getRowId={(pageState) => pageState.name}
        rowCount={pageState.total}
        loading={pageState.isLoading}
        rowsPerPageOptions={[10, 30, 50, 70, 100]}
        pagination
        page={pageState.page - 1}
        pageSize={pageState.pageSize}
        paginationMode="server"
        onPageChange={(newPage) =>
          setPageState((old) => ({ ...old, page: newPage + 1}))
        }
        onPageSizeChange={(newPageSize) =>
          setPageState((old) => ({ ...old, pageSize: newPageSize }))
        }
        columns={columns}
      />

      <Modal open={open} onClose={() => setOpen(false)}>
        <div>
          <ModalDetail character={character} onClose={() => {
            setOpen(false)
            setCharacter(null)
          }} />
        </div>
      </Modal>

    </Box>
  );
};
