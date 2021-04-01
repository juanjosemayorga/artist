import { PLAY_SONG } from "./actions";

export const playSong = song => ({
  type: PLAY_SONG,
  song
})