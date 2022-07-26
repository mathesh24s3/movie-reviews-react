import React, { useState } from "react";
import Poster from "./Poster";

export default function ReviewsSlider({ reviews }) {
  const [readMore, setReadMore] = useState(false);
  const [index, setIndex] = useState(0);
  const [trailer, setTrailer] = useState(false);
  const [showCoverImage, setShowCoverImage] = useState(false);

  function nextSlide() {
    setIndex((prevIndex) =>
      prevIndex >= reviews.length - 1 ? 0 : prevIndex + 1
    );
  }

  function prevSlide() {
    setIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  }

  function showTrailer() {
    setTimeout(() => {
      setShowCoverImage(true);
    }, 500);

    setTimeout(() => {
      setTrailer(true);
    }, 2000);
  }

  function hideTrailer() {
    setTimeout(() => {
      setShowCoverImage(false);
    }, 500);

    setTimeout(() => {
      setTrailer(false);
    }, 2000);
  }

  return (
    <section className="reviews--container">
      <article className="reviews">
        <Poster
          trailer={trailer}
          showCoverImage={showCoverImage}
          movieTrailer={reviews[index].trailer}
          movieImage={reviews[index].image}
          movieCoverImage={reviews[index].coverImage}
          showTrailer={showTrailer}
          hideTrailer={hideTrailer}
        />
        <h4 className="movie--name"> {reviews[index].name}</h4>
        <h4 className="movie--info">{reviews[index].info}</h4>
        <p className="movie--desc">
          {readMore
            ? reviews[index].desc
            : reviews[index].desc.substring(0, 100) + " . . ."}
          <button
            className="read--more btn"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "See less" : "Read more"}
          </button>
        </p>
        <p className="imdb--rating">IMDb: {reviews[index].IMDb}</p>

        <p className="streaming--platform">
          Watch on
          <a href={reviews[index].streaming.link}>
            <img src={reviews[index].streaming.platform} alt="ott" />
          </a>
        </p>

        <div className="btn--container">
          <button className="btn" onClick={prevSlide}>
            {"<"}
          </button>
          <button className="btn" onClick={nextSlide}>
            {">"}
          </button>
        </div>
      </article>
    </section>
  );
}
