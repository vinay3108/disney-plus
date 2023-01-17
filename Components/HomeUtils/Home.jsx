import React from 'react'
import { Box,styled } from '@mui/system'
import ImgSlider from './ImgSlider';
import Viewers from './Viewers'
const Home = () => {
  return (
    <HomeItem>
      <ImgSlider/>
      <Viewers/>

    </HomeItem>
  )
}
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('')
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
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

