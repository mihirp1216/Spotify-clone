import React, { useEffect, useState } from 'react';
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";
import Player from "./Player";
import { getTokenFromUrl } from './spotify';
import './App.css';
import Login from './Login';

const spotify = new  SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    let _token = hash.access_token;

    if (_token) {

      spotify.setAccessToken(_token);

      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });

      spotify.getMyTopArtists().then((response) =>
        dispatch ({
        type: "SET_TOP_ARTISTS",
        top_artists: response,
      })
      );

      dispatch({
        type: 'SET_SPOTIFY',
        spotify: spotify, 
      });

      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch ({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
      // 37i9dQZEVXcJou90IlQ0E4
      // 09oLVDWxAIK3UIbOe63RcG
      spotify.getPlaylist("09oLVDWxAIK3UIbOe63RcG").then((response) => 
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );
    }

  }, [token, dispatch]);

  return (
    <div className="app">
      {!token && <Login />}
      {token && <Player spotify={spotify} />}
    </div>
  );
}

export default App;
// 