import { motion } from 'framer-motion'
import React from 'react'
import styled from "styled-components"
import aboutImg from "./Bg_low.png"

function About() {
  return (

   <AboutContainer as = {motion.div}
   initial ={{scale:0.7}} 
   whileInView={{scale:1}} 
   end ={{scale:1}} 
   transition = {{duration:1.2}}>
      <div className="about-section" id='about'>
        <img src={aboutImg} alt="about" className='about-image'/>
          <div className="about-details">
            <h1 className="about-header">About Me</h1>
               <p className="about-summary">
                    An individual from an accounting background with an immerse passion for technology and finance.
                    Three years learning experience in Python, JavaScript, Web development and UI/UX Design
                    Methodologies. A quick learner who ready to adapt and learn the latest technologies. I have worked on
                    some projects and still ongoing. My Domain Knowledge, Team-work and collaborating skills can be of
                    good value to any engineering team.
              </p>
         </div>
    </div>
   </AboutContainer>
    )
  }


const AboutContainer = styled.div`
margin-top:6em;
#about{
  
}
.about-section{
 text-align:center;
 margin:0 20px;
  .about-details{
    
    .about-header{
     font-size:1.5rem;
    }
    .about-summary{
      font-size:0.8rem;
      padding:5px;
    }
  }
  .about-image{
    height:150px;
    width:150px;
    background-color:#1d1d3f;
    border-radius:50%;

  }
}
@media screen and (min-width:620px){

}

@media screen and (min-width:960px){
  
}

@media screen and (min-width:1200px){
  
.about-section{
 text-align:center;
 margin:0 20px;
  .about-details{
    
    .about-header{
     font-size:2rem;
    }
    .about-summary{
      font-size:1rem;
      padding:30px 100px;
      
    }
  }
  .about-image{
    height:250px;
    width:250px;
    background-color:#1d1d3f;
    border-radius:50%;

  }
}
}



`

export default About