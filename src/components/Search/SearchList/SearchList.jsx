import React from "react";
import "./SearchList.css";
export const SearchList = ({ searchList }) => {
  return (
    <div className="search-list-container">
      {searchList.map((data) => (
        <div className="search-items" key={data.id}>
         
          <p className="title">{data.name}</p>
        </div>
      ))}
    </div>
  );
};