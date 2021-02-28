import React from 'react'
import Albums from '../../components/Pages/Albums/Albums'
import Hero from '../../components/Pages/Hero/Hero'
import MoreAlbums from '../../components/Pages/MoreAlbums/MoreAlbums'
import SongsDownloaded from '../../components/Pages/SongsDownloaded/SongsDownloaded'
import WhoSoundtrackedMost from '../../components/Pages/WhoSoundtrackedMost/WhoSoundtrackedMost'

const Main = () => (
  <>
    <Hero />
    <SongsDownloaded />
    <Albums />
    <WhoSoundtrackedMost />
    <MoreAlbums />
  </>
)

export default Main
