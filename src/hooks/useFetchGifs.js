import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
export const useFetchGifs = ( category ) => {
  const [state, setstate] = useState({
    data: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    getGifs(category).then((imgs) => {
      setTimeout(() => {
        setstate({
          data: imgs,
          loading: false,
          error: null,
        });
      }, 3000);
    });
  }, [category]);

  return state;
};
