import { Box, styled } from '@mui/system'
import React from 'react'

const Card = ({movies,title}) => {
  console.log(movies)
  return (
    <>
          {movies && 
          <h4>{title}</h4>
          }
        <Content>
          {movies &&movies.map((movie,key)=>(
              <Wrap key={key}>
                 
                  {/* <Link to={"/detail/"+ movie.id}> */}
                    <WrapDesc>
                      <p>{movie.title}</p>
                      <p>{movie.subTitle}</p>
                    </WrapDesc>
                     <img src={movie.cardImg} alt="" />
                  {/* </Link> */}
              </Wrap>
          ))}
        </Content>
    </>
  )
}

export default Card
const Content=styled(Box)(()=>({
    padding: "0 0 26px",
    display: "grid",
    gridGap: "25px",
    gap: "25px",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    '@media (max-width: 768px)': {
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
    }
}))

const Wrap=styled(Box)(()=>({
    borderRadius: "10px",
    cursor: "pointer",
    position: "relative",
  
    overflow: "hidden",
    border: "3px solid rgba(249, 249, 249, 0.1)",
    boxShadow: "rgba(0 0 0 / 69%) 0px 26px 30px -10px,rgba(0 0 0 / 73%) 0px 16px 10px -10px",
    transition: "all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s",
    "img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    '&:hover': {
      borderColor: "rgba(249, 249, 249, 0.8)",
      transform: 'scale(1.1)',
      boxShadow: 'rgba(0 0 0 / 80%) 0px 40px 58px -16px, rgba(0 0 0 / 72%) 0px 30px 22px -10px',
    }
}))
const WrapDesc=styled(Box)(()=>({
    position: 'absolute',
    height: "100%",
    width: "100%",
    background:"rgba(0,0,0,0.5)",
    top:"0",
    left: "0",
    opacity: "0",
    margin:"0",
    '&:hover':{
      opacity: "1",
    },
    display: "flex",
    flexDirection: "column",
    justifyContent: "end",
    alignItems: "flex-start",
    "p":{
      fontSize: "0.75rem",
      fontWeight: "600",
      margin:"2px 4px",
      padding: "0",
    }
}))