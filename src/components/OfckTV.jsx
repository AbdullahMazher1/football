import React, { useRef } from "react";
import "../components/OfckTV.css";

function OfckTV() {
  const videoRef = useRef(null);

  return (
    <div className="tv-container">
      <div className="channel-links">
        <button>Channel 1</button>
        <button>Channel 2</button>
        <button>Channel 3</button>
        <button>Channel 4</button>
      </div>

      <div className="tv-grid">
        {/* Main Video Player */}
        <div className="main-video">
          <video ref={videoRef} src="/football.mp4" controls></video>
          <div className="controls">
            <h2>
              OCK TV - Live Stream
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae fugit nulla ad ducimus sed incidunt id, voluptatem sequi autem? Maxime, voluptates esse? Sint veniam veritatis doloribus sed hic neque animi!
            </p>
          </div>
        </div>

        {/* Other Videos List */}
        <div className="video-list">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="video-item">
              <img src={`/f (${item}).jpg`} alt={`Thumbnail ${item}`} />
              <div>
                <h3>Video Title {item}</h3>
                <p>Short description of the video.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OfckTV;