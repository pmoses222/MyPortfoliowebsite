import React,{useState} from 'react';
import styled from "styled-components";
import {FiMenu} from "react-icons/fi"
import Sidebar from './Sidebar';
import {motion} from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import logo from "./Logo.png";

function Navigation() {

  const [toggle, settoggle] = useState(false)

  const Clicktoggle = () => {
      settoggle(!toggle)
  }

  return (
    
    <NavContainer as ={motion.div}
    animate={{y:10}}
    end ={{y:0}}  >
      
     <div className="nav  grid">
       <div className="nav-image"><motion.img src = {logo} className="nav-logo"  whileHover={{scale:1.1}}/></div>
         {toggle && <Sidebar Clicktoggle={Clicktoggle} />}
         <div className="handburger" onClick ={Clicktoggle}>< FiMenu /></div>
         <ul className="nav-lists">
           <AnchorLink id ="home" href='#hero'><li className="nav-list">Home</li></AnchorLink>
           <AnchorLink id ="home" href='#about'><li className="nav-list">About</li></AnchorLink>
           <AnchorLink id ="home" href='#project'><li className="nav-list">Projects</li></AnchorLink>
           <AnchorLink id ="home" href='#foot'><li className="nav-list">Contact</li></AnchorLink>
         </ul>

         <button className="nav-button">
           <a href="https://drive.google.com/file/d/1KrXcIQ77xGB1o0IxQ6PX2CR7HLRvHxRs/view?usp=sharing" className="link">Download CV</a>
        </button>
      </div>
      
    </NavContainer>
  )
}

const NavContainer = styled.div`
 .nav{
     margin:0 20px;
    .nav-image{
      padding:10px;
      .nav-logo{
        height:30px;
        width:120px;
        text-align:center;
        cursor:pointer;
       } 
    }
    
    .handburger{
      font-size:2.5rem;
      grid-column:9/9;
    }
    .nav-lists{
     display:none;
      .nav-list{
       
      }
    }
    .nav-button{
    display:none;
    .link{
      
    }
    }
  }

  @media screen and (min-width:960px){
    .nav{
      display:flex;
      justify-content:space-between;
      margin:0 20px;
 
     .nav-logo{
      height:40px;
      width:170px;
      text-align:center;
      cursor:pointer;
     } 
     .handburger{
       display:none;
     }
     .nav-lists{
      display:flex;
      justify-content:center;
      align-items:center;
      gap:40px;
      #home{
        text-decoration:none;
      }
       .nav-list{
        list-style:none;
        cursor:pointer;
        color:var(--fonts-color);
       }
     }
     .nav-button{
       font-family:'Murecho', sans-serif;
       margin:15px;
       display:block;
       outline:none;
       border:none;
       padding:0 20px;
       border-radius:10px;
       cursor:pointer;
       .link{
         text-decoration:none;
         color:var(--buttons-color);
       }

     }
   }
 
  }
  
  
`

export default Navigation