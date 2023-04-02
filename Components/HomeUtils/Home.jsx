import React,{useState,useEffect} from 'react'
import { Box,styled } from '@mui/system'
import axios from 'axios';
import ImgSlider from './ImgSlider';
import Viewers from './Viewers'
import Card from './Card';
import { fetchData } from '@/Helpers/restApiHandler';
const Home = ({movieList}) => {

  const [recommend,setRecommend]=useState([]);
  const [disneyMovie,setDisneyMovie]=useState([]);
  const [trending,setTrending]=useState([]);
  const [original,setOriginal]=useState([]);
  const [watchList,setWatchList]=useState([]);
  useEffect(()=>{
      setRecommend(movieList.filter((item)=>item.type=='recommend'))
      setDisneyMovie(movieList.filter((item)=>item.type=='disneyMovie'))
      setTrending(movieList.filter((item)=>item.type=='trending'))
      setOriginal(movieList.filter((item)=>item.type=='original'))
  },[movieList])
  const getWatchList=async(user)=>{
    const {data}=await fetchData(`/user/${user._id}`);
    setWatchList(data.user.movies);
  }
  useEffect(()=>{
    const user=sessionStorage.getItem('user');
    if(user){
      getWatchList(JSON.parse(user));
    }
  },[])
  return (
    <HomeItem>
      <ImgSlider/>
      <Viewers/>
      {
      watchList.length>0&&
      <Card title={"WatchList"} movies={watchList}/>
      }
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

