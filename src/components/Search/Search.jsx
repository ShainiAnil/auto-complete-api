import React, { useEffect, useState } from "react";
import { SearchInput } from "./SearchInput/SearchInput";
import { SearchList } from "./SearchList/SearchList";
import axios from "axios";
import "./Search.css";

const API_URL =
  "https://api.themoviedb.org/3/search/person?api_key=d3449ff6ec0c027623bf6b6f5fff78b3&include_adult=false&language=en-US&page=1%27";

export const Search = () => {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [searchList, setSearchList] = useState([]);

  const handleChange = (event) => {
    setSearchInputValue(event.target.value);
  };

  const clearSearch = () => {
    setSearchInputValue("");
    setSearchList([]);
  };

  const fetchSearchList = async () => {
    try {
      const response = await axios(API_URL, {
        params: {
          query: searchInputValue,
        },
      });

      console.log("RES", response.data);
      setSearchList(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchInputValue) {
        fetchSearchList();
      }
    }, 300);

    return () => {
      clearTimeout(timeout);
    };
  }, [searchInputValue]);

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

      <SearchList searchList={searchList} />
    </div>
  );
};
