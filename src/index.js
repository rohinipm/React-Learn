import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from "./App";
import reportWebVitals from "./reportWebVitals";
import FavoriteColor from "./components1/FavoriteColor";
import Car1 from "./components1/Car1";
import Scooter from "./components1/Scooter";
import List from "./components1/List";
//import Garage from "./components/Garage";
//import Header from "./components/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Garage /> */}
    {/* <Header /> */}
    <FavoriteColor />
    <Car1 />
    <Scooter />
    <List></List>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
