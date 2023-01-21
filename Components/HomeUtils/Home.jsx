import React,{useState,useEffect} from 'react'
import { Box,styled } from '@mui/system'
import ImgSlider from './ImgSlider';
import Viewers from './Viewers'
import Card from './Card';
const Home = ({movieList}) => {

  const [recommend,setRecommend]=useState([]);
  const [disneyMovie,setDisneyMovie]=useState([]);
  const [trending,setTrending]=useState([]);
  const [original,setOriginal]=useState([]);
  useEffect(()=>{
      setRecommend(movieList.filter((item)=>item.type=='recommend'))
      setDisneyMovie(movieList.filter((item)=>item.type=='disneyMovie'))
      setTrending(movieList.filter((item)=>item.type=='trending'))
      setOriginal(movieList.filter((item)=>item.type=='original'))
  },[movieList])
  return (
    <HomeItem>
      <ImgSlider/>
      <Viewers/>
      <Card title={"Recommends"} movies={recommend}/>
      <Card title={"Disney Movies"} movies={disneyMovie}/>
      <Card title={"Trendings"} movies={trending}/>
      <Card title={"Originals"} movies={original}/>
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

