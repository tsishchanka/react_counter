import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes";
import MainLayout from "./CommonComponents/Layout/MainLayout";

ReactDOM.render(
  <BrowserRouter>
    <MainLayout>
      <Routes />
    </MainLayout>
    ,
  </BrowserRouter>,
  document.getElementById("root")
);
