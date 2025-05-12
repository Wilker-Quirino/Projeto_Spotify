import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faBackwardStep,
  faForwardStep,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Player = ({ duration, prevSongId, nextSongId, randomIdFromArtist }) => {
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
          icon={faCirclePlay}
        />

        {/* Botão Próxima */}
        {nextSongId && (
          <Link to={`/song/${nextSongId}`}>
            <FontAwesomeIcon className="player__icon" icon={faForwardStep} />
          </Link>
        )}
      </div>

      <div className="player__progress">
        {/* Botão Aleatório */}
        <Link to={`/song/${randomIdFromArtist}`}>
          <FontAwesomeIcon
            className="player__icon player__icon--shuffle"
            icon={faShuffle}
          />
        </Link>
        <p>00:00</p>

        <div className="player__bar">
          <div className="player__bar-progress"></div>
        </div>

        <p>{duration}</p>
      </div>
    </div>
  );
};

export default Player;
