import secondsToMMSS from "../utils/secondsToMMSS";
import style from "./Track.module.scss";

import { IconButton } from "@mui/material";

export const Track = (track) => {
  const { id, src, preview, title, artists, duration } = track;
  const formattedDuration = secondsToMMSS(duration);
  return (
    <div className={`${style.track}`}>
      <IconButton>5</IconButton>
      <img className={style.preview} src={preview} alt={preview} />
      <div className={style.credits}>
        <b>{title}</b>
        <p>{artists}</p>
      </div>
      <p>{formattedDuration}</p>
    </div>
  );
};
