import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { playingSongPause, playingSongPlay, toggleSong } from '../redux/actionCreators'

const useAudio = () => {

  const dispatch = useDispatch()

  const url = useSelector(state => state.activeSong.song)
  const playingSong = useSelector(state => state.playingSong)

  const [audio] = useState(new Audio(url))
  // const [playing, setPlaying] = useState(playingSong)

  // const toggle = _ => setPlaying(!playing)
  const toggle = () => dispatch(toggleSong())
  const pauseSong = () => dispatch(playingSongPause())
  const playSong = () => dispatch(playingSongPlay())

  useEffect(() => {
    audio.setAttribute('src', url)
  }, [url])

  useEffect(() => {
    playingSong ? audio.play() : audio.pause()
  }, [playingSong])

  useEffect(() => {
    audio.addEventListener('ended', () => pauseSong)
    return () => {
      audio.removeEventListener('ended', () => pauseSong)
    }
  }, [])

  return [toggle, playSong, pauseSong]

}

export default useAudio