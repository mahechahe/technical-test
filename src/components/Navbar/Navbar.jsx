import React from "react";
import logoStarWars from '../../assets/logo-starwars.png'

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
          src={logoStarWars}
          alt="star-wars-logo"
        />
      </figure>
    </div>
  );
};
