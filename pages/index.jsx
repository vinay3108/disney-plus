import React,{useEffect,useState} from 'react'
import Home from '../Components/HomeUtils/Home'

const index = ({movies}) => {
  const [movieList,setMovieList]=useState([]);
  useEffect(()=>{
    setMovieList(movies);
  },[])
  return (
    <>
    <Home movieList={movieList}/>
    </>
  )
}
export async function getServerSideProps(context) {
  const res=await fetch('http://localhost:4000/api/v1/movies');
    const {movies}=await res.json();
  return {
    props: {movies}, // will be passed to the page component as props
  }
}
export default index