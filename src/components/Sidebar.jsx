import React from 'react'
import styled from 'styled-components'
import {GiCancel} from "react-icons/gi"
import AnchorLink from "react-anchor-link-smooth-scroll";
import {motion} from "framer-motion";



function Sidebar({Clicktoggle}) {
  return (
     <>
     <SidebarContainer as = {motion.div}
     initial={{x:200}}
     whileInView={{x:-10}}
     end ={{x:0}}
     transition = {{duration:0.5}}>
       <div className="handburger" onClick={Clicktoggle}><GiCancel /></div>
       <ul className="sidebar-lists">
           <AnchorLink id ="home" href='#about'><li className="sidebar-list">About</li></AnchorLink>
           <AnchorLink id ="home" href='#project'><li className="sidebar-list">Projects</li></AnchorLink>
           <AnchorLink id ="home" href='#foot'><li className="sidebar-list">Contact</li></AnchorLink>
       </ul>   
       <div className="resume">
         <button className="side-button">
           <a href="https://drive.google.com/file/d/1KrXcIQ77xGB1o0IxQ6PX2CR7HLRvHxRs/view?usp=sharing" className="side-link">Download CV</a>
        </button>
       </div>
        
       
      </SidebarContainer>
     </>
  )
}
const SidebarContainer = styled.div`
background:var(--bg-color);
position:absolute;
opacity:0.9;
top:0;
right:0;
height:100vh;
width:50%;
z-index:99;
.handburger{
text-align:center;
}
.sidebar-lists{
  text-align:center;
  padding:20px;
 
  #home{
    text-decoration:none;
    color: var(--fonts-color);
  }
  .sidebar-list{
    list-style:none;
    font-size:0.8rem;
    padding:10px;
    
  }
}
.resume{
  display:flex;
  justify-content:center;
  align-items:center;

  .side-button{
    display:flex;
    justify-content:center;
    font-size:0.7rem;
    font-family:'Murecho', sans-serif;
    text-align:center;
    outline:none;
    border:none;
    padding: 10px 20px;
    border-radius:10px;
    cursor:pointer;
    .side-link{
    text-decoration:none;
    color:var(--buttons-color);
  }
}
}   
`


export default Sidebar