import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import { IconButton, Typography } from "@mui/material";


export const columns = [
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