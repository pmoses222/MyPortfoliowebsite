import React from 'react'
import styled from "styled-components"
import {FaLinkedin,FaGoogle,FaInstagram,FaTwitter} from "react-icons/fa"
import { motion } from 'framer-motion'
import AnchorLink from "react-anchor-link-smooth-scroll";

function Footer() {
  return (
   <FooterContainer>
     <div className="footer grid" id='foot'>
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
          <AnchorLink id ="home" href='#hero'><p className="footer-list">Home</p></AnchorLink>
           <AnchorLink id ="home" href='#about'><p className="footer-list">About</p></AnchorLink>
           <AnchorLink id ="home" href='#project'><p className="footer-list">Projects</p></AnchorLink>
           <AnchorLink id ="home" href='#foot'><p className="footer-list">Contact</p></AnchorLink>
         </div>
     </div>

     <motion.div className="footer-social"
        initial={{x:-200}}
        whileInView={{x:10}}
        end ={{x:0}}>
        <h3 className="social-header">Social</h3>
        <div className="footer-icons">
           <a href="mailto:pmoses222@gmail.com" className="social-link"><p className="icon"><FaGoogle /></p></a>
           <a href="https://www.linkedin.com/in/moses-oluwatosin-aca-6a4511120/recent-activity/shares/" className="social-link"><p className="icon"><FaLinkedin /></p></a>
           <a href="https://twitter.com/peterafe222" className="social-link"><p className="icon"><FaTwitter /></p></a>
           <a href="https://www.instagram.com/pmoses7505/" className="social-link"><p className="icon"><FaInstagram /></p></a>
       </div>
     </motion.div>

     </div>
      
   </FooterContainer>
  )
}

const FooterContainer = styled.div`
margin-top:6em;
#foot{
  
}
.footer{
  margin:0 20px;
  .footer-location{
    text-align:center;
    grid-column:1/3;
   .location-header{
    font-size:0.8rem;
   }
   .location-details{
      font-size:0.5rem;
      .address{
        font-size:0.5rem;
      }
      
      .phone{
        font-size:0.5rem;
      }
   }
  }

  .footer-links{
    text-align:center;
    grid-column:7/9;
   .links-header{
    font-size:0.8rem;
   }
   .footer-lists{
      font-size:0.5rem;
      text-decoration:none;
      #home{
        text-decoration:none;
      }
     .footer-list{
      color:var(--fonts-color);
     }
   }
  }
  .footer-social{
    text-align:center;
    grid-column:4/6;
   .social-header{
   font-size:0.8rem;
   }
   .footer-icons{
     display:flex;
     justify-content:center;
     gap:20px;
     cursor:pointer;
     list-style:none;
     .icon{
       font-size:1rem;
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
    .footer-location{
      text-align:center;
      grid-column:2/4;
     .location-header{
      font-size:1rem;
     }
     .location-details{
        font-size:0.8rem;
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
        text-decoration:none;
        #home{
          text-decoration:none;
        }
       .footer-list{
        color:var(--fonts-color);
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
         font-size:1rem;
         color:var(--fonts-color);
         width:auto;
    
       }
     }
    }
   
  }
  
}


`




export default Footer