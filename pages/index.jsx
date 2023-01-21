import React from 'react'
import Home from '../Components/HomeUtils/Home'
import Header from '../Components/HeaderUtils/Header'
const index = ({movies}) => {
  return (
    <>
    <Header/>
    <Home movieList={movies}/>
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