import { Typography } from "@mui/material";
import React from "react";
import "./modalImage.css";
import darthVader from "../../assets/dark-vader.png";

/**
 * This component is responsible for painting the image of dart vader in the dom, more specifically in the modal
 *
 */
export const ModalImage = () => {
  return (
    <>
      <div className="modal-image-container">
        <section className="triangle">
          <Typography color={"white"}>May the force be with you 💀</Typography>
        </section>
      </div>
      <figure style={{ position: "relative" }}>
        <img src={darthVader} alt="Darth Vader" className="modal-image-img " />
      </figure>
    </>
  );
};
