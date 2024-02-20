import React, { useEffect, useState } from "react";
import "./scroll-bar.css";

const ScrollBar = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();
      console.log(data);
      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setErrorMsg(error.message);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, []);

  function handleScrollPercentage() {
    const howMuchScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScroll / height) * 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  if (errorMsg) {
    return <div>Error message {errorMsg}</div>
  }

  if (loading) {
    return <div>Loading Data please wait for a while...</div>
  }

  return (
    <div>
      <div className="top-container">
        <h1>Custom Scroll indicator</h1>
        <div className="scroll-tracking-container">
          <div
            className="current-progres-bar"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
      <div className="data-container">
        {data && data.length > 0
          ? data.map((item) => <p>{item.title}</p>)
          : null}
      </div>
    </div>
  );
};

export default ScrollBar;
