import React from 'react';
import backgroundImage from '../assets/Call-to-action.jpg';

interface BannerProps {
    title: string;
    para: string;
    btnText: string;
}

const Banner: React.FC<BannerProps> = ({ title, para, btnText }) => {
    return (
        <div
            className="relative bg-cover bg-center h-96 flex items-center justify-center text-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="relative z-10 text-white">
                <h2 className="text-4xl font-bold mb-2">{title}</h2>
                <p className="text-lg mb-4">{para}</p>
                <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    {btnText}
                </button>
            </div>
        </div>
    );
};

export default Banner;
