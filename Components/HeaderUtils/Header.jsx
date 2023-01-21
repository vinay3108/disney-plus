import { Box, styled } from '@mui/system'
import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import LoginRegister from './LoginRegister';

const Header = () => {
    const[open,setOpen]=useState(false);
    const[user,setUser]=useState({});
    useEffect(()=>{
        if(sessionStorage.getItem('user')){
            setUser(JSON.parse(sessionStorage.getItem('user')));
        }
    },[])
  return (
    <>
            <Nav>
            <Logo>
                <img src="/images/logo.svg" alt="Disney+" />
            </Logo>
            <NavMenu>
                <a href="">
                    <img src="/images/home-icon.svg" alt="HOME" />
                    <span>HOME</span>
                </a>
                <a href="">
                    <img src="/images/search-icon.svg" alt="HOME" />
                    <span>SEARCH</span>
                </a>
                <Link href="/new">
                    <img src="/images/series-icon.svg" alt="HOME" />
                    <span>NEW</span>
                </Link>

            </NavMenu>
            {
            open?
            <LoginRegister setOpen={setOpen} setUser={setUser}/>
            :
            <>
            {
            user.name?
            <Login onClick={()=>setUser({})}>SignOut</Login>
                :  
            <Login onClick={()=>setOpen(true)}>Login</Login>
            }
            </>
            }
        </Nav>
    </>
  )
}

export default Header

const Nav=styled(Box)(()=>({
position: "fixed",
top:"0",
left:"0",
right:"0",
height:"70px",
backgroundColor: "#090b13",
display: "flex",
justifyContent: "space-between",
alignItems: "center",
padding: "0 36px",
letterSpacing: "16px",
zIndex:"3",
color:"#fff"

}))

const Logo=styled(Box)(()=>({
padding:"0",
width: "80px",
marginTop:"4px",
maxHeight: "70px",
fontSize:"0",
display:"inline-block",
    "img":{
        display:"block",
        width:"100%",
    }
}))

const NavMenu=styled(Box)(()=>({
alignItems: "center",
display: "flex",
flexFlow: "row nowrap",
height: "100%",
justifyContent: "flex-end",
margin:"0px",
padding:"0px",
position: "relative",
marginLeft: "25px",
marginRight: "auto",
"a":{
    display: "flex",
    alignItems: "center",
    padding: "0 12px",
    "img":{
        height:"20px",
        minWidth: "20px",
        width: "20px",
        zIndex:"auto",
    },
    "span":{
        color:"rgb(249,249,249)",
        fontSize:"13px",
        letterSpacing: "1.42px",
        lineHeight: "1.08",
        padding: "2px 0px",
        whiteSpace: "nowrap",
        position: "relative",
    
    "&:before":{
        content: `""`,
        backgroundColor: "rgb(249,249,249)",
        borderRadius:"0px 0px 4px 4px",
        bottom: "-6px",
        left:"0px",
        height: "2px",
        opacity: "0",
        position: "absolute",
        right:"0",
        transformOrigin: "left center",
        transform: "scaleX(0)",
        transition: "all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s",
        visibility: "hidden",
        width:"auto",
    }
    },
    "&:hover":{
        "span:before":{
            transform: "scaleX(1)",
            visibility: "visible",
            opacity: "1 !important ",
        }
    }
    },
    "@media(max-width:768px)":{
        display: "none",
    }

}))

const Login=styled(Box)(()=>({
backgroundColor: "rgba(0,0,0,0.6)",
padding: "8px 16px",
textTransform: "uppercase",
letterSpacing: "1.5px",
border:"1px solid #f9f9f9",
borderRadius:"4px",
transition:"all 0.2s ease 0s",
cursor: "pointer",
"&:hover":{
     backgroundColor: "#f9f9f9",
     color:"#000",
     borderColor:"transparent",
}

}))

const UserImg=styled(Box)(()=>({
height:"100%",
}))
const DropDown =styled(Box)(()=>({
position:"absolute",
top:"48px",
right:"0px",
background: "rgb(19,19,19)",
border:"1px solid rgba(151,151,151,0.34)",
borderRadius: "4px",
boxShadow:"rgb(0 0 0/50%) 0px 0px 18px 0px",
padding:"10px",
fontSize:"14px",
letterSpacing: "3px",
width:"100px",
opacity: "0",
 
}))

const SignOut=styled(Box)(()=>({
position: "relative",
height: "48px",
width:"48px",
display: "flex",
cursor: "pointer",
alignItems: "center",
justifyContent: "center",

"&:hover":{
  
}

}))