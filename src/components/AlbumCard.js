import React from "react";
import { Link } from "react-router-dom";

import { toTitleCase, truncateWithEllipses } from "../helpers";
import heartIconSolid from "../assets/images/heart-solid.svg";
import heartIconRegular from "../assets/images/heart-regular.svg";

const AlbumCard = ({ album, callback, index }) => {
  const albumId = album.id.attributes["im:id"];
  const albumName = truncateWithEllipses(toTitleCase(album["im:name"].label), 45);
  const albumArtist = album["im:artist"].label;
  const albumImage = album["im:image"][2].label;
  const topNumber = index + 1;

  return (
    <li className="album-card">
      <Link
        to={{
          pathname: `/album/${albumId}`,
          state: {
            album,
            topNumber
          }
        }}
      >
        <div className="album-card__mobile-link"></div>
      </Link>
      <div className="album-card__thumbnail" style={{ backgroundImage: `url(${albumImage})` }}>
        <img
          src={heartIconRegular}
          alt="Heart Icon"
          className="favourite-icon"
          onClick={() => callback(albumId)}
        />
      </div>
      <h3 className="album-card__title">{albumName}</h3>
      <p className="album-card__artist">{albumArtist}</p>

      <div className="album-card__overlay"></div>
      <p className="album-card__overlay-number">{topNumber}</p>
      <Link
        to={{
          pathname: `/album/${albumId}`,
          state: {
            album,
            topNumber
          }
        }}
      >
        <span className="album-card__overlay-rect">
          <p>See album</p>
        </span>
      </Link>
      <span className="album-card__overlay-shadow"></span>
    </li>
  );
};

export default AlbumCard;
