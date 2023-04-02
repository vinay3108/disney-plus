import React from 'react'
import ReactPlayer from 'react-player/lazy'
const VideoPlayer = () => {
  return (
      <ReactPlayer controls ={true} light={true} url='https://drive.google.com/file/d/1xDzfgjyqY9GdnFqj-dwlHGNqGxzkANzd/view?usp=share_link' />
  )
}

export default VideoPlayer
