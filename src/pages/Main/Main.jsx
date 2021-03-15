import React from 'react'

import Hero from '@Components/Pages/Hero/Hero'
import SongsDownloaded from '@Components/Pages/SongsDownloaded/SongsDownloaded'
import Albums from '@Components/Pages/Albums/Albums'
import WhoSoundtrackedMost from '@Components/Pages/WhoSoundtrackedMost/WhoSoundtrackedMost'
import MoreAlbums from '@Components/Pages/MoreAlbums/MoreAlbums'
import CreatedVideos from '@Components/Pages/CreatedVideos/CreatedVideos'
import ExploreNew from '@Components/Pages/ExploreNew/ExploreNew'
import Grew from '@Components/Pages/Grew/Grew'

import useWindowSize from '@Hooks/useWindowSize'

const Main = () => {

  const { width } = useWindowSize()

  return (
    <>
      <Hero />
      <SongsDownloaded />
      <Albums />
      <WhoSoundtrackedMost />
      {width < 768 && <MoreAlbums />}
      <CreatedVideos />
      <ExploreNew />
      <Grew />
    </>
  )
}

export default Main
