import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async term => {
    try {
      const response = await youtube.get('/search', {
        params: { q: term }
      });

      setVideos(response.data && response.data.items ? response.data.items : []);
      

    } catch (err) {
      console.error('Error fetching yuotube videos ...')
      setVideos([]);
    }
  };

  return [videos, search];
}

export default useVideos;