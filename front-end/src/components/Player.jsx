import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faBackwardStep,
  faForwardStep,
  faShuffle,
  faCirclePause,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useRef } from "react";

const formatTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor(timeInSeconds - minutes * 60)
    .toString()
    .padStart(2, "0");

  return `${minutes} : ${seconds}`;
};

const Player = ({
  duration,
  prevSongId,
  nextSongId,
  randomIdFromArtist,
  audio,
}) => {
  const audioPlayer = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(formatTime(0));

  const playPause = () => {
    isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play();

    setIsPlaying(!isPlaying);
  };

  return (
    <div className="player">
      <div className="player__controllers">
        {/* Botão Anterior */}
        {prevSongId && (
          <Link to={`/song/${prevSongId}`}>
            <FontAwesomeIcon className="player__icon" icon={faBackwardStep} />
          </Link>
        )}

        <FontAwesomeIcon
          className="player__icon player__icon--play"
          icon={isPlaying ? faCirclePause : faCirclePlay}
          onClick={() => playPause()}
        />

        {/* Botão Próxima */}
        {nextSongId && (
          <Link to={`/song/${nextSongId}`}>
            <FontAwesomeIcon className="player__icon" icon={faForwardStep} />
          </Link>
        )}
      </div>

      <div className="player__progress">
        <p className="player__time">{currentTime}</p>

        <div className="player__bar">
          <div className="player__bar-progress"></div>
        </div>

        <p className="player__time">{duration}</p>
        {/* Botão Aleatório */}
        <Link to={`/song/${randomIdFromArtist}`}>
          <FontAwesomeIcon
            className="player__icon player__icon--shuffle"
            icon={faShuffle}
          />
        </Link>
      </div>
      <audio ref={audioPlayer} src={audio}></audio>
    </div>
  );
};

export default Player;
