import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromResponse } from "./spotify";
import { DataLayerPlannerValue } from "./DataLayer";
import SpotifyWebApi from "spotify-web-api-js";
const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  //Data Layer
  const [{ user }, dispatch] = DataLayerPlannerValue();

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {

        dispatch({
          type: "SET_USER",
          user: user,
        });
        
      });
    }

    console.log("its is temprary", token);
  }, []);

  return (
    <div className="app">{token ? <h1>I am Loggeed In</h1> : <Login />}</div>
  );
}

export default App;
