import React from 'react';
import styled from "styled-components"
import Hero from "./Hero"
import About from "./About"
import Skills from "./Skills"
import Projects from "./Projects"
import Footer from "./Footer"


function Home() {
  return (
    <>
     <HomeContainer>
        <Hero />
        <Skills />
        <About />
        <Projects />
        <Footer />
     </HomeContainer>

    </>
  )
}

const HomeContainer = styled.div`


@media screen and (min-width:620px){
margin:0 30px;
}

@media screen and (min-width:960px){
  margin:0 60px;
}

@media screen and (min-width:1200px){
  margin:0 90px;
}


`

export default Home