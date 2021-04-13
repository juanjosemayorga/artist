import { PLAYING_SONG_PAUSE, PLAYING_SONG_PLAY, PLAY_SONG, TOGGLE_SONG } from "./actions";

export const setSong = song => ({
  type: PLAY_SONG,
  song
})

export const toggleSong = () => ({
  type: TOGGLE_SONG
})

export const playingSongPlay = () => ({
  type: PLAYING_SONG_PLAY
})

export const playingSongPause = () => ({
  type: PLAYING_SONG_PAUSE
})
