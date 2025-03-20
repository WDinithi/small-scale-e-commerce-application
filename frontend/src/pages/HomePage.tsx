import React from 'react';
import backgroundImage from '../assets/Banner.jpg';
import PostersPage from "./PostersPage";
import FeedbackPage from "./FeedbackPage";
import Banner from "../components/Banner";
import Benefits from "../components/Benifits";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function HomePage() {
    return (<div>
        <NavBar/>
        <div
            className="bg-cover bg-center h-[65vh] flex flex-col justify-center items-center text-center text-white"
            style={{backgroundImage: `url(${backgroundImage})`}}

        >
            <div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-[#2c551d]"></h1>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 text-[#242727]">MULTIPURPOSE
                    STORE</h2>
                <button
                    className="bg-[#74a84a] hover:bg-[#2c551d] text-white font-bold py-2 px-4 rounded text-sm sm:text-base md:text-lg">
                    Shop Now
                </button>
            </div>
        </div>

        <PostersPage/>
        <hr className="border-t border-[#f5f6fa] my-3"/>
        <FeedbackPage/>
        <Banner
            title={'Give the Gift of a Postcard'}
            para={'Give the gift of a lasting memory with a postcard'}
            btnText={'PURCHASE A POSTCARD'}/>
        <Benefits/>
        <hr className="border-t border-[#f5f6fa] my-3"/>
        <Footer/>
    </div>);
}


export default HomePage;
