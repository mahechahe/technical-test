import { Box } from "@mui/material";
import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Table } from "./components/Table/Table";
import "./App.css";

export const App = () => {
  return (
    <Box className="box-app">
      <div className="container-navbar">
        <Navbar />
      </div>

      <div className="container-table" >
        <Table />
      </div>
    </Box>
  )
}


