import {
  Typography,
  IconButton,
  Avatar,
  CircularProgress,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import { DetailDescription } from "../DetailDescription/DetailDescription";
import avatar from "../../assets/avatar.png";
import { ModalImage } from "../ModalImage/ModalImage";
import "./modalDetail.css";
import { getFilmsHttp } from "../../htttp/getHttp";

export const ModalDetail = ({ character, onClose }) => {
  const [titles, setTitles] = useState([]);

  /**
   * is responsible for calling the films endpoint provided by the API. Called whenever the state of character.films changes
   */
  useEffect(() => {
    /**
     * This function getFilms http extracts each title requested by the endpoint, the url is sent as a parameter
     * @param {filmUrl} string
     */
    const getFilms = async () => {
      const filmsPromises = character?.films.map((filmUrl) =>
        getFilmsHttp(filmUrl)
      );
      const filmsInformation = await Promise.all(filmsPromises);
      setTitles(filmsInformation);
    };
    getFilms();
  }, [character?.films]);

  return (
    <div className="container-modal">
      <div className="container-modal-detail">
        {!character ? (
          <div className="loading-modal-detail">
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

            <ModalImage />

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="container-modal-description">
                <div className="container-description">
                  <Typography color={"white"}>Description</Typography>
                </div>

                <div className="container-name-description">
                  <Avatar src={avatar} />
                  <div className="container-title-description">
                    <Typography color={"white"}>{character?.name}</Typography>
                    <Typography>
                      Gener {character?.gender} - {character?.height} Height
                    </Typography>
                  </div>
                </div>

                <div className="modaldetail-detail-description">
                  <DetailDescription
                    title="Eye Color: "
                    data={character?.eye_color}
                    borderColor="red"
                  />
                  <DetailDescription
                    title="Hair Color: "
                    data={character?.hair_color}
                    borderColor="#3a0ca3"
                  />
                </div>

                <div className="modal-detail-movies">
                  <Typography>Movies</Typography>
                  <div className="modal-detail-movies-list ">
                    {titles.length === 0 ? (
                      <div className="loading-modal-movies">
                        <CircularProgress />
                      </div>
                    ) : (
                      <>
                        {/* the title array is mapped and rendered, which
                        contains each movie name received by the api */}
                        {titles?.map((title, i) => (
                          <Typography key={i} color={"white"}>
                            {" "}
                            <span style={{ color: "#adb5bd" }}>- </span>{" "}
                            {title.title}
                          </Typography>
                        ))}
                      </>
                    )}
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
