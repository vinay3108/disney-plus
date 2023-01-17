import React from 'react'
import { Box,styled } from '@mui/system'
const Home = () => {
  return (
    <HomeItem>
      home
    </HomeItem>
  )
}

export default Home
const HomeItem=styled(Box)(()=>({
    position: 'relative',
    minHeight: 'calc(100vh - 250px)',
    overflowX: 'hidden',
    display: 'block',
    top:'72px',
    padding:'0 calc(3.5vw + 5px)',

    '&:after':{
    background: 'url("/images/home-background.png") center center / cover no-repeat fixed',
        content:`""`,
        position: 'absolute',
        inset:'0px',
        opacity: '1',
        zIndex:'-1'
    }
}))

