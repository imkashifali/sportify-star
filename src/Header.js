import React from "react";
import "./Header.css";
import { DataLayerValue } from "./DataLayer"
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
function Header() {
  const [{ user }, dispatch] = DataLayerValue();
 
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
        />
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt={user?.images[0].url} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
