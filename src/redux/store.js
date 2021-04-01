import { createStore } from "redux";
import { PLAY_SONG } from "./actions";

const initialStore = {
  activeSong: {
    id: "0",
    name: "Fade",
    artist: "Alan Walker",
    song: "https://juan-jose-mayorga-projects.s3.amazonaws.com/react/artist/audios/Alan_Walker_Fade_NCS_Release.mp3"
  }
}

const rootReducer = (state = initialStore, action) => {

  if(action.type === PLAY_SONG) {
    return {
      activeSong: action.song
    }
  }

  return state

}

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)