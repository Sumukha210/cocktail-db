import { TextField } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { DataContext } from "../Context/DataContext";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");

  const [state, dispatch, setSearchTermFun] = useContext(DataContext);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.input.value);
    setSearchTermFun(e.target.input.value);
  };

  return (
    <div className="searchBarContainer">
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          onChange={e => setInputValue(e.target.value)}
          value={inputValue}
          id="outlined-basic"
          label="Search Your Favorite Cocktail"
          variant="outlined"
          name="input"
          color="primary"
        />
      </form>
    </div>
  );
};

export default SearchBar;
