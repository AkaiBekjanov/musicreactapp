import { Input } from "@mui/material";
import tracksList from "../../assets/trackList";
import { Track } from "../../components/Track/Track";
import style from "./MainPage.module.scss";
import { useContext, useState } from "react";
import { AudioContext } from "../../context/AudioContext";
export const MainPage = () => {
  const { handleAudioChange, currentTrack } = useContext(AudioContext);
  const [trackName, setTrackName] = useState("");
  const loweredTrackName = trackName.toString().toLowerCase();
  function handleChange(value) {
    setTrackName(value);
  }
  return (
    <div className={style.search}>
      <Input
        className={style.input}
        placeholder="Пойск треков"
        onChange={(e) => handleChange(e.target.value)}
      />
      <div className={style.list}>
        {tracksList
          .filter((item) => {
            return (
              item.title.toString().toLowerCase().includes(loweredTrackName) ||
              item.artists.toString().toLowerCase().includes(loweredTrackName)
            );
          })
          .map((track) => {
            return (
              <div key={track.id}>
                <Track key={track.id} {...track} />
              </div>
            );
          })}
      </div>
    </div>
  );
};
