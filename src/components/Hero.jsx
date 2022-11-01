import React from 'react'
import styled from "styled-components"
import Navigation from './Navigation'
import img from "./hero.png"
import {motion} from "framer-motion";


function Hero() {
  return (
    <HeroContainer as ={motion.div}
    
    animate={{y:10}}
    end ={{y:0}}
    >
        <Navigation />
        <div className="hero-details grid" id='hero'>
          <motion.h1 className="hero-header" 
          initial={{x:-100}}
          animate={{x:10}}
          end ={{x:0}} transition = {{duration:2}}>I'm Peter ! <br/> A Front-End Developer.</motion.h1>
          <motion.img initial={{x:100}}
          animate={{x:-10}}
          end ={{x:0}} transition = {{duration:1.2}}
          src={img} alt="hero" className='hero-image'/>
        </div>


    </HeroContainer>
  )
}
const HeroContainer = styled.div`
#hero{
  
}

.hero-details{
  margin:0 20px;
  width:100%;
  .hero-header{
  font-size:1.5rem;
  padding:40px 0;
  width:200%;
  
  }
  .hero-image{
    grid-column:9/9;
    height:180px;
    width:200px;
    padding:40px 0;
    z-index:-99;
    
  }

}
@media screen and (min-width:620px){
  .hero-details{
    width:auto;
    .hero-header{
    font-size:2.0rem;
    }
    .hero-image{
      height:200px;
      width:250px;
      
    }
  
  }
}

@media screen and (min-width:960px){
  .hero-details{
    width:auto;
    .hero-header{
    font-size:2.5rem;
    }
    .hero-image{
      
      height:300px;
      width:400px;
      
    }
  
  }
}

@media screen and (min-width:1200px){
  
  .hero-details{
    margin:50px 20px;
    width:auto;
    .hero-header{
    font-size:3.0rem;
    }
    .hero-image{
      height:370px;
      width:400px;
      
    }
  
  }
}



`

export default Hero