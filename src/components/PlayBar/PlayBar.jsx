import { useContext, useEffect, useState } from "react";
import { AudioContext } from "../../context/AudioContext";

import style from "./PlayBar.module.scss";
import { IconButton, Slider } from "@mui/material";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import secondsToMMSS from "../utils/secondsToMMSS";

export const PlayBar = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const { currentTrack, isPlaying, handleAudioChange, audio } =
    useContext(AudioContext);
  const { preview, title, artists, duration } = currentTrack;
  const formattedDuration = secondsToMMSS(duration);
  const formattedCurrentTime = secondsToMMSS(currentTime);
  const sliderCurrentTime = Math.round((currentTime / duration) * 100);
  const handleSlider = (_, value) => {
    const time = Math.round((value / 100) * duration);
    setCurrentTime(time);
    audio.currentTime = time;
  };
  useEffect(() => {
    const time = setInterval(() => {
      setCurrentTime(audio.currentTime);
    }, 1000);
  });
  return (
    <div className={style.playbar}>
      <img src={preview} alt="f" className={style.preview} />
      <IconButton onClick={() => handleAudioChange(currentTrack)}>
        {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
      </IconButton>

      <div className={style.credits}>
        <h4>{title}</h4>
        <p>{artists}</p>
      </div>
      <div className={style.slider}>
        <p>{formattedCurrentTime}</p>
        <Slider
          step={1}
          min={0}
          max={100}
          value={sliderCurrentTime}
          onChange={handleSlider}
        />
        <p>{formattedDuration}</p>
      </div>
    </div>
  );
};
