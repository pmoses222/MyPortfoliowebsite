import React from 'react'
import styled from "styled-components"
import {FaLinkedin,FaGoogle,FaInstagram,FaTwitter} from "react-icons/fa"
import { motion } from 'framer-motion'

function Footer() {
  return (
   <FooterContainer>
     <div className="footer grid">
      <motion.div className="footer-location"
      initial={{x:200}}
      whileInView={{x:-10}}
      end ={{x:0}}
      transition = {{duration:1.2}}>
          <h3 className="location-header">Address</h3>
          <div className="location-details">
             <div className="address">202,Muritala Mohammed Way <br/>Ebute-Metta,Lagos.</div>
             <div className="phone">
                <p><span>Tel:</span> +23407037666259</p>
             </div>
         </div>
      </motion.div>

     <div className="footer-links">
       <h3 className="links-header"> Quick Links</h3>
         <div className="footer-lists">
            <p className="footer-list">Home</p>
            <p className="footer-list">About</p>
            <p className="footer-list">Projects</p>
            <p className="footer-list">Hire Me</p>
         </div>
     </div>

     <motion.div className="footer-social"
        initial={{x:-200}}
        whileInView={{x:10}}
        end ={{x:0}}>
        <h3 className="social-header">Social</h3>
        <div className="footer-icons">
           <p className="icon"><FaGoogle /></p>
           <p className="icon"><FaLinkedin /></p>
           <p className="icon"><FaTwitter /></p>
           <p className="icon"><FaInstagram /></p>
       </div>
     </motion.div>

     </div>
      
   </FooterContainer>
  )
}

const FooterContainer = styled.div`
margin-top:6em;
.footer{
  margin:0 20px;
  .footer-location{
    text-align:center;
    grid-column:1/3;
   .location-header{
    font-size:1rem;
   }
   .location-details{
      font-size:1rem;
      .address{
        font-size:0.8rem;
      }
      
      .phone{
        font-size:0.8rem;
      }
   }
  }

  .footer-links{
    text-align:center;
    grid-column:7/9;
   .links-header{
    font-size:1rem;
   }
   .footer-lists{
      font-size:0.8rem;
     
     .footer-list{
      
     }
   }
  }
  .footer-social{
    text-align:center;
    grid-column:4/6;
   .social-header{
   font-size:1rem;
   }
   .footer-icons{
     display:flex;
     justify-content:center;
     gap:20px;
     cursor:pointer;
     list-style:none;
     .icon{
       font-size:2rem;
       color:var(--fonts-color);
       width:auto;
  
     }
   }
  }


}


@media screen and (min-width:960px){
  .footer{
    font-size:1.5rem;
    display:flex;
    justify-content:center;
    align-items:center;
    gap:80px;
    
      
      
    
  }
}


@media screen and (min-width:1200px){
  .footer{
    display:flex;
    justify-content:center;
    align-items:center;
    gap:150px;
  }
}


`




export default Footer