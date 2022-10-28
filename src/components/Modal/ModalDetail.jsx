import {
  Typography,
  IconButton,
  Avatar,
  CircularProgress,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { avatar } from "../../App";

export const ModalDetail = ({ character, onClose }) => {
  const [titles, setTitles] = useState([]);
  const get = (url) => fetch(url).then((response) => response.json());

  useEffect(() => {
    const getFilms = async () => {
      const filmsPromises = character?.films.map((filmUrl) => get(filmUrl));
      const filmsInformation = await Promise.all(filmsPromises);
      setTitles(filmsInformation);
    };
    getFilms();
  }, [character?.films]);

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
                  height: "90%",
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
                    <Typography
                      style={{
                        borderLeft: "2px solid red",
                        paddingLeft: "4px",
                      }}
                    >
                      Eye Color:{" "}
                    </Typography>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100px",
                      }}
                    >
                      <Typography>{character?.eye_color} </Typography>
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
                    <Typography
                      style={{
                        borderLeft: "3px solid #3a0ca3",
                        paddingLeft: "4px",
                      }}
                    >
                      Hair Color:
                    </Typography>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100px",
                      }}
                    >
                      <Typography>{character?.hair_color}</Typography>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    width: "100%",
                    height: "160px",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    paddingTop: "5px",
                  }}
                >
                  <Typography>Movies</Typography>
                  <div
                    style={{
                      width: "100%",
                      height: "160px",
                      display: "flex",
                      flexDirection: "column",
                      padding: "0px 10px",
                      gap: "2px",
                    }}
                  >
                    {titles?.map((title) => (
                      <Typography color={"white"}>
                        {" "}
                        <span style={{ color: "#adb5bd" }}>- </span>{" "}
                        {title.title}
                      </Typography>
                    ))}
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
