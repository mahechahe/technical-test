import { Typography } from "@mui/material";
import React from "react";
import "./detailDescription.css";

/**
 * This reusable component is responsible for painting the most detailed description of each character in the modal
 * @param {title} string
 * @param {data} string
 * @param {borderColor} string
 *
 */
export const DetailDescription = ({ title, data, borderColor }) => {
  return (
    <div className="container-detail-description">
      <Typography
        style={{
          borderLeft: `2px solid ${borderColor}`,
          paddingLeft: "4px",
        }}
      >
        {title}{" "}
      </Typography>
      <div className="data-detail-description">
        <Typography>{data}</Typography>
      </div>
    </div>
  );
};
