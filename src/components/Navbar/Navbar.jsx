import React from "react";

export const Navbar = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <figure
        style={{
          width: "600px",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_horiz-04368052e188.png"
          alt=""
        />
      </figure>
    </div>
  );
};
