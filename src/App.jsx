import React from "react";
import { useState } from "react";
import style from "./global.module.scss";
import { MainPage } from "./pages/MainPage/MainPage";
import { PlayBar } from "./components/PlayBar/PlayBar";

function App() {
  return (
    <div className={style.wrapper}>
      <MainPage />
      <PlayBar />
    </div>
  );
}

export default App;
