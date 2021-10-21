import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import Routes from "./components/routes/Routes";
import MainLayout from "./components/Layout/MainLayout";


ReactDOM.render(
 <BrowserRouter>
   <MainLayout>
     <Routes />
   </MainLayout>,
 </BrowserRouter>,
  document.getElementById('root')
);


