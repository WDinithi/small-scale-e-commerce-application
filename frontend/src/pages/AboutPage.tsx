import Cover from "../components/Cover";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import React from "react";


const AboutPage = () => {
    return (<div>
        <NavBar/>
        <Cover title={'About Us'}/>
        <Hero
            title={'OUR MISSION'}
            subtitle={'Hello, my name is Tyler Moore and with the help of many people I made this template. I made it so it is super easy to update and so that it flows perfectly with my tutorials. Lots of love and hundreds of hours went into making it. I hope you love it as much as I do.\n' + '\n' + ' \n' + '\n' + 'I wish you the best of luck with your business, enjoy the adventure.'}/>
        <Banner
            title={'GIVE THE GIFT OF A POSTCARD'}
            para={'Give the gift of a lasting memory with a postcard'}
            btnText={'PURCHASE A POSTCARD'}/>
        <hr className="border-t border-[#f5f6fa] my-3"/>
        <Footer/>
    </div>)
}
export default AboutPage;