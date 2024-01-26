import React, { useEffect, useState } from "react";
import "./imageSlider.css";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const ImageSlider = ({ url, limit = 5, page = 1 }) => {
  const [image, setImage] = useState([]);
  const [currentSlide, setCurrentslide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImage(data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      setErrorMsg(error.message);
    }
  }

  function handlePrevious() {
    setCurrentslide(currentSlide === 0 ? image.length - 1 : currentSlide - 1);
  }
  function handleNext() {
    setCurrentslide(currentSlide === image.length - 1 ? 0 : currentSlide + 1);
  }

  useEffect(() => {
    if (url !== "") {
      fetchImages(url);
    }
  }, [url]);


  if (loading) {
    return <div>Loading data ! Please wait</div>;
  }

  if (errorMsg !== null) {
    return <div>Error occured! {errorMsg}</div>;
  }

  return (
    <div className="container">
      <ArrowCircleLeftIcon
        onClick={handlePrevious}
        className="arrow arrow-left"
      />
      {image && image.length
        ? image.map((imageItem, index) => (
            <img
              key={imageItem.id}
              src={imageItem.download_url}
              alt={imageItem.download_url}
              className={
                currentSlide === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))
        : null}
      <ArrowCircleRightIcon
        onClick={handleNext}
        className="arrow arrow-right"
      />
      <span className="circle-indicators">
        {image && image.length
          ? image.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicstor"
                }
                onClick={()=> setCurrentslide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
};

export default ImageSlider;
