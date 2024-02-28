import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const GithubProfile = () => {
  const [userName, setUserName] = useState("Akashmahto022");
  const [userData, setUserData] = useState(null);


  async function fetchGithubUserData() {
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();
    console.log(data);
    if (data) {
      setUserData(data);
    }
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  const handleSubmit = () => {
    fetchGithubUserData()
  };

  return (
    <div className="flex justify-center items-center">
      <div>
        <h1>Search Github profile with the username of github</h1>
        <div className="flex justify-center items-center m-2">
          <input
            name="search-by-username"
            type="text"
            placeholder="search github username"
            className="bg-blue-200 p-2"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-700 text-white"
          >
            Search
          </button>
        </div>
        <div className="flex items-center justify-center border-2 p-4 w-[400px] shadow-lg">
          {userData !== null ? (
            <div>
              <div key={userData.node_id} className="">
                <img src={userData.avatar_url} alt="" className=" rounded-full"/>
                <a href={userData.html_url} target="blank"><h1 className="flex items-center justify-center text-blue-800 hover:underline font-bold">{userData.name}</h1></a>
                <p className="flex items-center justify-center text-center">{userData.bio}</p>
                <div>

                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default GithubProfile;
