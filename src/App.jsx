import React from "react";
import { useState } from "react";
import style from "./global.module.scss";
import { MainPage } from "./pages/MainPage/MainPage";

function App() {
  return (
    <div className={style.wrapper}>
      <MainPage />
    </div>
  );
}

export default App;
