import React, { useEffect, useState } from "react";
import { SearchInput } from "./SearchInput/SearchInput";
import { SearchList } from "./SearchList/SearchList";
import axios from "axios";
import "./Search.css";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export const Search = () => {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const handleChange = (event) => {
    setSearchInputValue(event.target.value);

    const newFilteredItems = searchList.filter((data) => {
      return data
        .toLowerCase()
        .startsWith(`${event.target.value.toLowerCase()}`);
    });

    setFilteredList(newFilteredItems);
  };

  const clearSearch = () => {
    setSearchInputValue("");
    setFilteredList([]);
  };

  const fetchSearchList = async () => {
    try {
      const response = await axios(API_URL);
      const result = response.data;
      setSearchList(result.map((user) => user.name));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchSearchList();
  }, []);

  return (
    <div className="search-container">
      <div className="heading-section">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3917/3917132.png"
          alt=""
        />
        <h1>Search the Site</h1>
      </div>
      <SearchInput
        searchList={searchList}
        searchInputValue={searchInputValue}
        handleChange={handleChange}
        clearSearch={clearSearch}
      />

      <SearchList searchList={filteredList} />
    </div>
  );
};
