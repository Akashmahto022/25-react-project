import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Suggestion from "./Suggestion";

const SearchAutoComplete = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  const handleClick = (e)=>{
    setShowDropdown(false)
    setSearchParam(e.target.innerText)
    setFilteredUsers([])
  }

  const fetchListOfUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
      }
      console.log(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  console.log(users, filteredUsers);

  return (
    <div>

    <div className="flex justify-center items-center p-2">
      {loading ? (
        <h1>Loading Data Please Wait</h1>
      ) : (
        <input
        className="p-4 bg-slate-600 w-[400px] text-white rounded-md"
          value={searchParam}
          onChange={handleChange}
          type="text"
          name="search-users"
          placeholder="Search User"
        />
      )}

    </div>
    <div className="flex justify-center items-center bg-slate-800 text-white w-[] cursor-pointer">
      {showDropdown && <Suggestion handleClick={handleClick} data={filteredUsers} />}
    </div>
    </div>
  );
};

export default SearchAutoComplete;
