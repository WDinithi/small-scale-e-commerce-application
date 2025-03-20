import React from 'react';
import backgroundImage from "../assets/Banner.jpg";

interface CoverProps {
    title: string;
}

const Cover: React.FC<CoverProps> = ({title}) => {
    return (
        <div className="bg-cover bg-center h-[65vh] flex flex-col justify-center items-center text-center text-white"
             style={{backgroundImage: `url(${backgroundImage})`}}>
            <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-[#2c551d]">{title}</h1>
            </div>
        </div>);
}

export default Cover;
