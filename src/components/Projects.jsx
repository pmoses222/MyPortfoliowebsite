import React from 'react'
import styled from "styled-components"
import {SiGithub} from "react-icons/si"
import pgImage1 from "./covid-tracker.png"
import pgImage2 from "./weatherapp.png"
import {motion} from "framer-motion";


function Projects() {
  return (
    <ProjectContainer id='project'>
      <h1 className="project-header">Personal Projects</h1>
      <div className="project-details">
        <motion.div 
          initial={{x:-200}}
          whileInView={{x:10}}
          end ={{x:0}}
          transition = {{duration:1.2}}
          className="project-list">
          <img src={pgImage1} alt="project" className="project-image" />
          <div className="project-notes">
              <h3 className="project-name">Covid-19 Tracker</h3>
               <a href=" https://covid-19-statsapp.netlify.app/" className="project-demo">Live Demo</a>
                  <a href="https://github.com/pmoses222/Covid-19-Tracker" 
                      className="project-link"><SiGithub /></a>
          </div>
          
        </motion.div>

        <motion.div 
        className="project-list"
        initial={{x:200}}
        whileInView={{x:-10}}
        end ={{x:0}}
        transition = {{duration:1.2}}>
             <img src={pgImage2} alt="project" className="project-image" />
             <div className="project-notes"> 
                 <h3 className="project-name">WeaForcast</h3>
                  <a href=" https://weaforecast.netlify.app/" className="project-demo">Live Demo</a>
                  <a href="https://github.com/pmoses222/WeForcast" className="project-link"><SiGithub /></a>
             </div>

        </motion.div>
       
      </div>


    </ProjectContainer>
  )
}
const ProjectContainer = styled.div`
#project{

}
margin-top:6em;
text-align:center;
.project-header{
  font-size:1rem;
}
.project-details{
  padding:20px;
  display:block;
 
  .project-list{
    background:#0a0a15;
    border-radius:20px;
    padding: 20px 10px;
    margin:20px;

    .project-image{
       height:150px;
       width:auto;
    }
    .project-notes{
      padding:10px 0;
     
      .project-name{
        font-size:0.8rem;
      }
      .project-demo{
        text-decoration:none;
        color:#DDDEDE;
      }
      .project-link{
        text-decoration:none;
        color:#DDDEDE;
      }
    }
    
    
  }
}

@media screen and (min-width:620px){
  .project-details{
    padding:0;
    .project-list{
      padding:30px;
      margin:30px;
  
      .project-image{
         height:200px;
         width:200px;
      }
      .project-notes{
        padding:20px;
       
        .project-name{
          font-size:1rem;
        }
        .project-demo{
          text-decoration:none;
          color:#DDDEDE;
        }
        .project-link{
          text-decoration:none;
          color:#DDDEDE;
        }
      }
      
      
    }
  }
}

@media screen and (min-width:960px){
  .project-header{
    font-size:1.5rem;
  }
  .project-details{
    display:flex;
    justify-content:center;
    align-items:center;
    
      
      
    
  }
}

@media screen and (min-width:1200px){
  .project-header{
    font-size:2rem;
  }
  .project-details{
    display:flex;
    justify-content:center;
    align-items:center;
    .project-list{
      
  
      .project-image{
         height:250px;
         width:250px;
      }
      .project-notes{
        padding:20px;
       
        .project-name{
          font-size:1.5rem;
        }
        .project-demo{
          text-decoration:none;
          color:#DDDEDE;
        }
        .project-link{
          text-decoration:none;
          color:#DDDEDE;
        }
      }
      
      
    }
    
    
  }
}

`



export default Projects