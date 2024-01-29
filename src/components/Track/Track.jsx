import { useContext } from "react";
import { AudioContext } from "../../context/AudioContext";
import secondsToMMSS from "../utils/secondsToMMSS";
import style from "./Track.module.scss";
import cn from "classnames";
import { IconButton } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

export const Track = (track) => {
  const { id, src, preview, title, artists, duration } = track;
  const formattedDuration = secondsToMMSS(duration);
  const { handleAudioChange, currentTrack, isPlaying } =
    useContext(AudioContext);
  const isCurrentTrackPlaying = currentTrack.id === track.id;
  return (
    <div className={cn(style.track, isCurrentTrackPlaying && style.playing)}>
      <IconButton onClick={() => handleAudioChange(track)}>
        {isCurrentTrackPlaying && isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
      </IconButton>
      <img className={style.preview} src={preview} alt={preview} />
      <div className={style.credits}>
        <b>{title}</b>
        <p>{artists}</p>
      </div>
      <p>{formattedDuration}</p>
    </div>
  );
};
