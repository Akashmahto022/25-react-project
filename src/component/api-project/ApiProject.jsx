import React, { useEffect, useState } from "react";

const ApiProject = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState();

  async function callData() {
    try {
      const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
      const data = await response.json();
      // console.log(data)
      // console.log(data[0].show.image.medium)

      if (data) {
        console.log(data);
        setUser(data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    callData();
  }, []);

  if (loading) {
    return <div>Please wait we are fetching data from Api</div>;
  }

  const handleClick = () => {};

  return (
    <div className="load-container">
      <div className="product-container">
        {user ? (
          user.map((item) => (
            <div className="product" key={item.show.id}>
              <img src={item.show.image} alt={item.show.name} />
              Url: {item.show.url}
              <p>Name:- {item.show.name}</p>
              <p>
                Genres:- {item.show.genres[0]} {item.show.genres[1]}
              </p>
              <button onClick={handleClick}>get Summary</button>
            </div>
          ))
        ) : (
          <div>There is some error in fetching Api .</div>
        )}
      </div>
    </div>
  );
};

export default ApiProject;
