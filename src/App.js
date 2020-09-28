import React, { useState,useEffect } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  //Run code based on a given condition
  // const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useDataLayerValue();


  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash="";
    const _token = hash.access_token;
    if(_token){
      dispatch({
        type:"SET_TOKEN",
        token: _token,
      })
      // setToken(_token);

      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        // console.log('👱', user);
        dispatch({
          type: 'SET_USER',
          user: user, 
        });

      });
      // this will give access token to spotify
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        });
      });
      //37i9dQZF1DX2Y6ZOyTJZfp
      spotify.getPlaylist('39Dw6zxjHfNTAlKGEIMHGI').then(response => 
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response,
        })
        )
    }
    // console.log('I have a token...->', token);
  },[]);
  // console.log('👱', user);
  // console.log('👽', token);
  return (
    <div className="app">
      {
        token ? 
        <Player spotify = {spotify}/>
         :
          <Login />
      
      }
      {/* <Login /> */}
    </div>
  );
}

export default App;
