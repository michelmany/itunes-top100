import React, { useState } from "react";

// Custom Hook
import { useTopAlbumsFetch } from "../hooks/useTopAlbumsFetch";

// Components
import AlbumsGrid from "../components/AlbumsGrid";
import AlbumCard from "../components/AlbumCard";
import LoadMoreBtn from "../components/elements/LoadMoreBtn";
import Spinner from "../components/elements/Spinner/Spinner";

const TopSongs = () => {
  const filterQty = 20;
  const [{ state, songs, loading, error }, fetchAlbums] = useTopAlbumsFetch();
  const [searchTerm, setSearch] = useState("");
  const [visible, setVisible] = useState(filterQty);

  const loadMoreAlbums = () => {
    setVisible(prev => prev + filterQty);
  };

  if (error) return <div>Something went wrong...</div>;

  return (
    <>
      <AlbumsGrid header="Top Songs">
        {songs.slice(0, visible).map((song, i) => (
          <AlbumCard key={song.id.attributes["im:id"]} album={song} index={i} />
        ))}
      </AlbumsGrid>
      {loading && <Spinner />}

      {visible < songs.length && !loading && (
        <LoadMoreBtn text={`Load more songs`} callback={loadMoreAlbums} />
      )}
    </>
  );
};

export default TopSongs;
