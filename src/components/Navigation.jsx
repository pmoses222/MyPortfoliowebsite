import React,{useState} from 'react';
import styled from "styled-components";
import {FiMenu} from "react-icons/fi"
import Sidebar from './Sidebar';
import {motion} from "framer-motion";

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
         <motion.h1 className="nav-logo"  whileHover={{scale:1.1}}>Peter Moses</motion.h1>
         <div className="handburger" onClick ={Clicktoggle}>< FiMenu /></div>
         {toggle && <Sidebar  Clicktoggle= {Clicktoggle}/>}
         <ul className="nav-lists">
           <li className="nav-list">Home</li>
           <li className="nav-list">About</li>
           <li className="nav-list">Projects</li>
           <li className="nav-list">Contact</li>
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

    .nav-logo{
     font-size:1rem;
     cursor:pointer;
    } 
    .handburger{
      font-size:2rem;
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
      text-decoration:none;
    }
    }
  }

  @media screen and (min-width:960px){
    .nav{
      display:flex;
      justify-content:space-between;
      margin:0 20px;
 
     .nav-logo{
      font-size:1.5rem;
     } 
     .handburger{
       display:none;
     }
     .nav-lists{
      display:flex;
      justify-content:center;
      align-items:center;
      gap:40px;
       .nav-list{
        list-style:none;
        cursor:pointer;
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

     }
   }
 
  }
  
  
`

export default Navigation