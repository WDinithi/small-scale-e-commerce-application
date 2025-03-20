import React from 'react';
import image from '../assets/Banner.jpg';

interface HeroProps {
    title: string;
    subtitle?: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
    return (
        <div className="flex flex-col md:flex-row px-4 py-10 md:px-10 md:py-20 space-y-8 md:space-y-0 md:space-x-8">
            <div className="w-full md:w-1/2 flex justify-center items-center">
                <img src={image} alt={title} className="object-cover w-full md:w-[80%] h-auto" />
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8">
                <div className="">
                    <h1 className="text-2xl md:text-4xl  text-black">{title}</h1>
                    {subtitle && <p className="text-lg md:text-xl text-gray-500 mt-4">{subtitle}</p>}
                </div>
            </div>
        </div>
    );
};

export default Hero;
