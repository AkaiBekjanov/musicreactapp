import { createContext, useState } from "react";
import tracksList from "../assets/trackList";

export const AudioContext = createContext({});
export const audio = new Audio();
console.log(audio);
const AudioProvider = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState(tracksList[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleAudioChange = (track) => {
    if (currentTrack.id != track.id) {
      setCurrentTrack(track);
      setIsPlaying(true);
      audio.src = track.src;
      audio.currentTime = 0;
      audio.play();
    }
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };
  const value = { audio, currentTrack, isPlaying, handleAudioChange };

  return (
    <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
  );
};
export default AudioProvider;
