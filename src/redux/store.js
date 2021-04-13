import { createStore } from "redux";
import { PLAYING_SONG_PAUSE, PLAYING_SONG_PLAY, PLAY_SONG, TOGGLE_SONG } from "./actions";

const initialStore = {
  activeSong: {
    id: "0",
    name: "Fade",
    artist: "Alan Walker",
    song: "https://juan-jose-mayorga-projects.s3.amazonaws.com/react/artist/audios/Alan_Walker_Fade_NCS_Release.mp3",
  },
  playingSong: false
}

const rootReducer = (state = initialStore, action) => {

  switch (action.type) {
    case PLAY_SONG:
      return {
        ...state,
        activeSong: action.song
      }
    case TOGGLE_SONG:
      return {
        ...state,
        playingSong: !state.playingSong
      }
    case PLAYING_SONG_PLAY:
      return {
        ...state,
        playingSong: true
      }
    case PLAYING_SONG_PAUSE:
      return {
        ...state,
        playingSong: false
      }
    default:
      return state;
  }

}

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)