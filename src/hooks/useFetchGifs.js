import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { getGif } from "../helpers/getGifs";

export const useFetchGifs = (categoria) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGif(categoria).then((imgs) => {
      setState({
        data: imgs,
        loading: false,
      });
    });
  }, [categoria]);

  return state;
};
