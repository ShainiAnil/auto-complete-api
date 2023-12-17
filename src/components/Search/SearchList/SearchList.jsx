import React from "react";
import "./SearchList.css";
export const SearchList = ({ searchList }) => {
  return (
    <div className="search-list-container">
      {searchList.map((data,index) => (
        <div className="search-items" key={index}>
         
          <p className="title">{data}</p>
        </div>
      ))}
    </div>
  );
};