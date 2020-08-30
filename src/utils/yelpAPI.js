import axios from "axios";

export default axios.create({
  baseURL: `${process.env.REACT_APP_YELP_BASE_URL}`,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,
  },
});
