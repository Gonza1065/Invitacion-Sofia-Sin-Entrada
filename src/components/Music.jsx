import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "../componentsCss/Music.css";
import audioFile from "../song/Y2meta.app - Dua Lipa - New Rules (Official Lyric Video) (128 kbps).mp3";
export function Music() {
  const [isPlaying, setPlaying] = useState(false);
  const audioRef = React.createRef();
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!isPlaying);
  };

  return (
    <div className="music-player">
      <audio ref={audioRef} src={audioFile}></audio>
      <div className="btn-play-pause">
        <button onClick={togglePlay}>
          {isPlaying ? (
            <>
              <div className="icon-play-pause">
                <FontAwesomeIcon icon={faPause} />
              </div>
            </>
          ) : (
            <>
              <div className="icon-play-pause">
                <FontAwesomeIcon icon={faPlay} />
              </div>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
