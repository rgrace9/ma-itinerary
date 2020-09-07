import React from "react";
import { Button } from "@material-ui/core";
import Nav from "shared/components/Nav";
import Autocomplete from "shared/components/Autocomplete";
// import Categories from "features/Categories";
import cities from "../api/cities";
import SearchFilters from "features/SearchFilters";
const Home = () => {
  return (
    <div>
      <Autocomplete />
      <SearchFilters />
      {/* <Categories /> */}
      Home Page
    </div>
  );
};

export default Home;
