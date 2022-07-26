import React from "react";
import { BrowserView, MobileView } from "react-device-detect";

export default function Poster(props) {
  return (
    <div>
      <BrowserView>
        {" "}
        <div
          className="poster--trailer--container"
          onMouseEnter={props.showTrailer}
          onMouseLeave={props.hideTrailer}
        >
          {props.trailer ? (
            <iframe
              className="movie--trailer"
              frameBorder={0}
              src={props.movieTrailer}
              title="trailer"
              allowFullScreen
            ></iframe>
          ) : (
            <img
              src={
                props.showCoverImage ? props.movieCoverImage : props.movieImage
              }
              className="movie--image"
              alt="movie-poster"
            />
          )}
        </div>
      </BrowserView>
      <MobileView>
        <iframe
          className="movie--trailer"
          frameBorder={0}
          src={props.movieTrailer}
          title="trailer"
          allowFullScreen
        ></iframe>
      </MobileView>
    </div>
  );
}
