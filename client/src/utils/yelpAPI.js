import axios from "axios";
// ${"https://cors-anywhere.herokuapp.com/"}
const instance = axios.create({
  baseURL: `${"https://cors-anywhere.herokuapp.com/"}${
    process.env.REACT_APP_YELP_BASE_URL
  }`,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,
    "Content-type": "applications/json",
  },
});

// instance.defaults.headers.common["Authorization"] =
//   process.env.REACT_APP_YELP_API_KEY;

export default instance;
