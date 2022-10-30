import React from 'react'
import styled from 'styled-components'
import {GiCancel} from "react-icons/gi"

function Sidebar({Clicktoggle}) {
  return (
     <>
     <SidebarContainer>
       <div className="handburger" onClick={Clicktoggle}><GiCancel /></div>
       <ul className="sidebar-lists">
            <li className="sidebar-list">About</li>
            <li className="sidebar-list">Projects</li>
            <li className="sidebar-list">Hire Me</li>
            <li className="sidebar-list">Download Resume</li>
         </ul>
      </SidebarContainer>
     </>
  )
}
const SidebarContainer = styled.div`
background:var(--bg-color);
opacity:0.7;
position:absolute;
top:0;
right:0;
height:100vh;
width:50%;
z-index:3;
.handburger{
text-align:center;
}
.sidebar-lists{
  text-align:center;
  padding:50px;
  color: var(--fonts-color);
  .sidebar-list{
    list-style:none;
    font-size:0.8rem;
    padding:10px;
    
  }
}
`


export default Sidebar