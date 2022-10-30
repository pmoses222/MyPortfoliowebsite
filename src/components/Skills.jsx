import React from 'react'
import styled from "styled-components"
import  { SiHtml5 ,
   SiCss3,
   SiJavascript,
   SiReact,
   SiRedux,
   SiNextdotjs,
   SiNodedotjs,
   SiExpress,SiPython,SiMongodb,SiPostgresql,SiGit,SiGithub,SiNetlify } from "react-icons/si"

function Skills() {
  return (
  <SkillsContainer>
       <h1 className="skill-header">Skills and tools</h1>
       <div className="skill-details">
        <ul className="skill-lists">
          <li className="skill-list"><SiHtml5/></li>
          <li className="skill-list"><SiCss3/></li>
          <li className="skill-list"><SiJavascript /></li>
          <li className="skill-list"><SiReact /></li>
          <li className="skill-list"><SiRedux /></li>
          <li className="skill-list"><SiNextdotjs /></li>
          <li className="skill-list"><SiNodedotjs /></li>
          <li className="skill-list"><SiExpress /></li>
          <li className="skill-list"><SiPython /></li>
          <li className="skill-list"><SiMongodb /></li>
          <li className="skill-list"><SiPostgresql /></li>
          <li className="skill-list"><SiGit /></li>
          <li className="skill-list"><SiGithub /></li>
          <li className="skill-list"><SiNetlify /></li>

         </ul>
       </div>
  </SkillsContainer>
  )
}
const SkillsContainer = styled.div`
margin-top:2em;
.skill-header{
  text-align:center;
  font-size:1rem;
}
.skill-details{
  padding:0 20px;
  

 .skill-lists{
    display:grid;
    grid-template-columns:repeat(2,1fr);
    place-items:center;
    
   .skill-list{
    list-style:none;
    padding:20px;
    background:#0a0a15;
    border-radius:50%;
    height:50px;
    width:50px;
     svg{
         font-size:3rem;
       }
    }
  }
}
@media screen and (min-width:620px){
  
  .skill-header{
    text-align:center;
    font-size:1.5rem;
  }
  .skill-details{
    margin:0 0px;
    
  
   .skill-lists{
      display:grid;
      grid-template-columns:repeat(2,1fr);
      place-items:center;
      
      
     .skill-list{
      list-style:none;
      padding:30px;
      background:#0a0a15;
      border-radius:50%;
      height:50px;
      width:50px;
       svg{
           font-size:3rem;
         }
      }
    }
  }
}

@media screen and (min-width:960px){
  .skill-header{
    text-align:center;
    font-size:1.5rem;
  }
  .skill-details{
    margin:0 0px;
    
  
   .skill-lists{
      display:grid;
      grid-template-columns:repeat(7,1fr);
      place-items:center;
      
      
     .skill-list{
      list-style:none;
      padding:20px;
      background:#0a0a15;
      border-radius:50%;
      height:50px;
      width:50px;
       svg{
           font-size:3rem;
         }
      }
    }
  }
}

@media screen and (min-width:1200px){
  .skill-header{
    font-size:2rem;
  }
  .skill-details{
    .skill-lists{
      .skill-list{
      list-style:none;
      padding:50px;
       svg{
           font-size:3rem;
         }
      }
    }
  }
}



`



export default Skills