import React, { useState, useRef } from "react";
import searchIcon from "../assets/images/search-solid.svg";

const AlbumsGrid = ({ header, callback, children }) => {
  const [state, setState] = useState("");
  const timeOut = useRef(null);

  const doSearchAlbum = event => {
    const { value } = event.target;

    clearTimeout(timeOut.current);
    setState(value);

    timeOut.current = setTimeout(() => {
      callback(value);
    }, 500);
  };

  return (
    <section className="albums-grid container">
      <div className="albums-grid__headline section-headline">
        <h2>{header}</h2>
        <div className="albums-grid__headline-search">
          <input
            type="text"
            className="search-input"
            placeholder="Search"
            onChange={doSearchAlbum}
            value={state}
          />
          <img src={searchIcon} alt="Search" />
        </div>
      </div>
      <ul className="albums-grid__list">{children}</ul>
    </section>
  );
};

export default AlbumsGrid;
