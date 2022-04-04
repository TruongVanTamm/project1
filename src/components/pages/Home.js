import React from 'react'
import HeroSection from '../../components/HeroSection.js'
import '../../App.css'
import Cards from '../Cards.js'
import Footer from '../Footer.js'

function Home(){
    return (
        <>
        <HeroSection></HeroSection>
        <Cards></Cards>
        <Footer></Footer>
        </>
    )
}
export default Home