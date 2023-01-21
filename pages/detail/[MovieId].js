import React from 'react'
import { useRouter } from 'next/router'
import { styled ,Box} from '@mui/system';
import Image from 'next/image';

const MovieId = ({movie}) => {
  const router = useRouter();
  return (
    <Container>
    <Background>
        <img src={movie.backgroundImg} alt={movie.title} />
    </Background>
    <ImageTitle>
    <img src={movie.titleImg} alt={movie.title} />

    </ImageTitle>
    <ContentMeta>
        <Controls>
            <Player>
                <img src='/images/play-icon-black.png' alt="" />
                <span>Play</span>
            </Player>
            <Trailer>
         
                <img src="/images/play-icon-white.png" alt="" />
                <span>Trailer</span>
     
            </Trailer>
          
              
              <>
              <RightContent>
                  <AddList >
                <span className='first-span'/>
                <span className='second-span'/>
                </AddList>
                <GroupWatch>
                  ADD TO WATCHLIST
                </GroupWatch>
              </RightContent>
              </>
                <>
                <RightContent onClick={()=>deleteHandler(id)}>
                  <AddList >
                <span className='first-span'/>
              
                
            </AddList>
            <GroupWatch>
               REMOVE FROM WATCHLIST
            </GroupWatch>
            </RightContent>
                </>
            </Controls>
            
        <SubTitle>{movie.subTitle}</SubTitle>
        <Description>{movie.description}</Description>
    </ContentMeta>
  </Container>
  )
}

export default MovieId
export async function getServerSideProps(context) {
  // console.info(context.params.MovieId);
  const id=context.params.MovieId;
  const res=await fetch(`http://localhost:4000/api/v1/movies/${id}`);
    const {movie}=await res.json();
  return {
    props: {movie}, // will be passed to the page component as props
  }
}
const Container=styled(Box)(()=>({
  position: 'relative',
  minHeight: 'calc(100vh - 250px)',
  overflowX:'hidden',
  display: 'block',
  top:'72px',
  padding: '0 calc(3.5vw + 5px)',
}))

const Background=styled(Box)(()=>({
  left: "0px",
  opacity: "0.8",
  position: "fixed",
  right: "0px",
  top: "0px",
  zIndex: "-1",
  
  "img":{
      width:"100vw",
      height:"100vh",
  },
  "@media (max-width:768px)":{
      width:"initial",
  }
}))

const ImageTitle=styled(Box)(()=>({
  alignItems: "flex-end",
  display: "flex",
  justifyContent: "flex-start",
  margin:"0px auto",
  height:"30vw",
  minHeight: "170px",
  padding: "24px",
  width:"100%",
  "img":{
      maxWidth: "600px",
      minWidth:"200px",
      width:"35vw",
  }
}))

const ContentMeta=styled(Box)(()=>({
  maxWidth:"874px",
}))

const Controls=styled(Box)(()=>({
  alignItems: "center",
display: "flex",
flexFlow:"row nowrap",
margin:"24px 0px",
minHeight: "56px",
}))

const Player=styled(Box)(()=>({
fontSize:"15px",
margin:"0px 22px 0px 0px",
padding: "0px 24px",
height:"56px",
borderRadius: "4px",
alignItems: "center",
cursor: "pointer",
display: "flex",
justifyContent: "center",
letterSpacing: "1.8px",
textAlign:"center",
textTransform:"uppercase",
background:"rgb(249,249,249)",
border:"none",
color:"rgb(0,0,0)",

"img":{
    width:"32px",
},
'&:hover':{
    background: "rgb(198,198,198)",
},
'@media(max-width:768px)': {
    height:"45px",
    padding:"0px 22px",
    fontSize:"12px",
    margin:"0px 10px 0px 0px",
    "img":{
        width:"25px",
    }
}
}))
const Trailer=styled(Box)(()=>({
background:"rgba(0,0,0,0.3)",
border:"1px solid rgb(249,249,249)",
color:"rgb(249,249,249)",
padding:'0.5rem 1.4rem',
display:"flex",
alignItems:'center',
borderRadius:'3px',
'&:hover':{
  cursor:'pointer',
}
}))

const RightContent=styled(Box)(()=>({
cursor:"pointer",
transition: "all 0.4s ease-in-out",
border:'1px solid #fff',
display:'flex',
margin:'0 2rem',
padding:'8px',
borderRadius:'3px',
"&:hover":{
    background: "rgb(0,0,0,0.7)",
    color:'#fff'
}
}))
const AddList=styled(Box)(()=>({
marginRight:"16px",
height:"44px",
width:"44px",
display: "flex",
justifyContent: "center",
alignitems:"center",
backgroundcolor:"rgba(0,0,0,0.6)",
borderRadius:"50%",
border:"2px solid white",
cursor: "pointer",

    "span":{
        backgroundColor:"rgb(249,249,249)",
        display:"inline-block",
        },
        ".first-span":{
          height:"2px",
          transform:"translate(1px,18px) rotate(0deg)",
          width:"16px",
      },
      ".second-span":{
          height:"16px",
          transform: 'translateY(10px) translateX(-8px)',
          width:"2px",
    }
  }))

const GroupWatch=styled(Box)(()=>({
//  height:"44px",
// width:"44px", 
// borderRadius:"50%",
display:"flex",
justifyContent:"center",
alignItems:"center",
cursor:"pointer",
// background:"white", 
}))


const SubTitle=styled(Box)(()=>({
color:"rgb(249,249,249)",
fontSize:"15px",
minHeight:"20px",

"@media(max-width:768)":{
    fontSize:"12px",
}

}))

const  Description =styled(Box)(()=>({
lineheight:"1.4",
fontSize:"20px",
padding:"16px 0px",
color:"rgb(249,249,249)",
"@media(max-width:768)":{
    fontSize:"14px",
}
}))
