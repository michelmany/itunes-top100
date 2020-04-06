import { useState, useEffect } from "react";
import { TOP_ALBUMS_API_URL, TOP_SONGS_API_URL } from "../config";

export const useTopAlbumsFetch = () => {
  const [state, setState] = useState({ albums: [] });
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchAlbums = async endpoint => {
    setError(false);
    setLoading(true);

    try {
      const result = await (await fetch(endpoint)).json();

      setState(prev => ({
        ...prev,
        albums: [...result.feed.entry]
      }));
    } catch (error) {
      setError(true);
      console.log(error);
    }

    setLoading(false);
  };

  const fetchTopSongs = async endpoint => {
    try {
      const result = await (await fetch(endpoint)).json();
      setSongs(result.feed.entry);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAlbums(TOP_ALBUMS_API_URL);
    fetchTopSongs(TOP_SONGS_API_URL);
  }, []);

  return [{ state, songs, loading, error }, fetchAlbums];
};
