import React, { useState } from "react";

// Custom Hook
import { useTopAlbumsFetch } from "../hooks/useTopAlbumsFetch";

// Components
import AlbumsGrid from "../components/AlbumsGrid";
import AlbumCard from "../components/AlbumCard";
import LoadMoreBtn from "../components/elements/LoadMoreBtn";
import Spinner from "../components/elements/Spinner/Spinner";
import TopSongsSection from "../components/TopSongsSection";

const TopAlbums = () => {
  const filterQty = 20;
  const [{ state, songs, loading, error }, fetchAlbums] = useTopAlbumsFetch();
  const [visible, setVisible] = useState(filterQty);
  const [search, setSearch] = useState("");
  const [favourites, setFavourites] = useState([]);

  const filteredAlbums = state.albums.filter(album => {
    return (
      album["im:name"].label.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
      album["im:artist"].label.toLowerCase().indexOf(search.toLowerCase()) !== -1
    );
  });

  const loadMoreAlbums = () => {
    setVisible(prev => prev + filterQty);
  };

  const addFavourite = favourite => {
    if (!favourites.some(alreadyFav => alreadyFav == favourite)) {
      setFavourites([...favourites, favourite]);
      alert(`Album id: ${favourite} added to favourite list.`);
    }
  };

  if (error) return <div>Something went wrong...</div>;

  return (
    <>
      <AlbumsGrid header="Top Albums" callback={s => setSearch(s)}>
        {filteredAlbums.slice(0, visible).map(album => (
          <AlbumCard
            key={album.id.attributes["im:id"]}
            album={album}
            index={state.albums.indexOf(album)}
            callback={addFavourite}
          />
        ))}
      </AlbumsGrid>

      {loading && <Spinner />}

      {visible < filteredAlbums.length && !loading && (
        <LoadMoreBtn text={`Load more albums`} callback={loadMoreAlbums} />
      )}

      {songs.length !== 0 && !loading && <TopSongsSection songs={songs} />}
    </>
  );
};

export default TopAlbums;
