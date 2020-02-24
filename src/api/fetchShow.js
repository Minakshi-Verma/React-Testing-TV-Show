// Move axios call from APP.js to here since it would be hard to mock if it is in APP.js

import axios from 'axios';

export const fetchShow = () => {
    return axios
      .get("https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes")
      .then(res => {
        // setShow(res.data);
        // setSeasons(formatSeasons(res.data._embedded.episodes));
        console.log(res);
        return res;
      });
  };