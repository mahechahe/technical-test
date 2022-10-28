import {
  Typography,
  IconButton,
  Avatar,
  CircularProgress,
} from "@mui/material";
import React from "react";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { avatar } from "../../App";

export const ModalDetail = ({ character, onClose }) => {
  console.log(character);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "45%",
          height: "450px",
          background: "#202020",
          borderRadius: "10px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          position: "relative",
        }}
      >
        {!character ? (
          <div
            style={{
              width: "45vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress />
          </div>
        ) : (
          <>
            <IconButton
              onClick={onClose}
              style={{
                position: "absolute",
                left: "10px",
                top: "10px",
                zIndex: 1,
              }}
            >
              <ClearOutlinedIcon style={{ color: "white" }} />
            </IconButton>
            <div
              style={{
                position: "absolute",
                width: "40%",
                height: "125px",
                top: "43px",
                left: "50px",
              }}
            >
              <section className="triangle">
                <Typography color={"white"}>
                  May the force be with you 💀
                </Typography>
              </section>
            </div>
            <figure style={{ position: "relative" }}>
              <img
                src="https://cdn.pixabay.com/photo/2017/07/02/09/51/star-wars-2463926_960_720.png"
                alt=""
                style={{
                  width: "93%",
                  height: "65%",
                  position: "absolute",
                  bottom: 0,
                  left: "16px",
                }}
              />
            </figure>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "80%",
                  height: "80%",
                  background: "#0a0908",
                  borderRadius: "10px",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "60px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottom: "1px solid #adb5bd",
                  }}
                >
                  <Typography color={"white"}>Description</Typography>
                </div>

                <div
                  style={{
                    width: "100%",
                    height: "80px",
                    borderBottom: "1px solid #adb5bd",
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: "10px",
                  }}
                >
                  <Avatar src={avatar} />
                  <div
                    style={{
                      width: "220px",
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      paddingLeft: "10px",
                      flexDirection: "column",
                    }}
                  >
                    <Typography color={"white"}>{character?.name}</Typography>
                    <Typography>
                      Gener {character?.gender} - {character?.height} Height
                    </Typography>
                  </div>
                </div>

                <div
                  style={{
                    width: "100%",
                    height: "80px",
                    borderBottom: "1px solid #adb5bd",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    paddingLeft: "10px",
                  }}
                >
                  <div
                    style={{
                      width: "80%",
                      height: "50%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography>Eye Color: </Typography>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: '80px'
                      }}
                    >
                      <Typography>{character?.eye_color}</Typography>
                      <RemoveRedEyeOutlinedIcon
                        style={{
                          background: `${character?.eye_color || "#e5383b"}`,
                          borderRadius: "50%",
                        }}
                      />
                    </div>
                  </div>

                  <div
                    style={{
                      width: "80%",
                      height: "50%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography>Hair Color</Typography>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: '80px'
                      }}
                    >
                      <Typography>{character?.hair_color}</Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
