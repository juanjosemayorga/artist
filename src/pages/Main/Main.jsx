import React from 'react'
import Albums from '../../components/Pages/Albums/Albums'
import Hero from '../../components/Pages/Hero/Hero'
import SongsDownloaded from '../../components/Pages/SongsDownloaded/SongsDownloaded'
import WhoSoundtrackedMost from '../../components/Pages/WhoSoundtrackedMost/WhoSoundtrackedMost'

const Main = () => (
  <>
    <Hero />
    <SongsDownloaded />
    <Albums />
    <WhoSoundtrackedMost />
  </>
)

export default Main
