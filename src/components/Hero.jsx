import React from 'react'
import styled from "styled-components"
import Navigation from './Navigation'
import img from "./hero.png"

function Hero() {
  return (
    <HeroContainer>
        <Navigation />
        <div className="hero-details grid">
          <h1 className="hero-header">I'm Peter ! A Front-End Developer.</h1>
          <img src={img} alt="hero" className='hero-image'/>
        </div>


    </HeroContainer>
  )
}
const HeroContainer = styled.div`

.hero-details{
  margin:0 20px;
  width:auto;
  .hero-header{
  font-size:1.5rem;
  
  }
  .hero-image{
    grid-column:9/9;
    height:180px;
    width:200px;
    
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
    width:auto;
    .hero-header{
    font-size:3.5rem;
    }
    .hero-image{
      height:400px;
      width:500px;
      
    }
  
  }
}



`

export default Hero