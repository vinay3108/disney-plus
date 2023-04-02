import React from 'react'
import Home from '../Components/HomeUtils/Home'
import Header from '../Components/HeaderUtils/Header'
import {fetchData} from '@/Helpers/restApiHandler';
const index = ({movies}) => {
  return (
    <>
    <Header/>
    <Home movieList={movies}/>
    </>
  )
}
export async function getServerSideProps(context) {
  const res=await fetchData('movies') ;
    const {movies}=await res.json();
  return {
    props: {movies}, // will be passed to the page component as props
  }
}
export default index