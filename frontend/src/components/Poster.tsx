import React from 'react';

interface PosterProps {
    imageSrc: string;
    title: string;
    price: number;
}

const Poster: React.FC<PosterProps> = ({ imageSrc, title, price }) => {
    return (
        <div className="flex flex-col items-center bg-white rounded-lg shadow-md overflow-hidden">
            <img src={imageSrc} alt={title} className="w-full h-64 object-cover" />
            <div className="p-4 text-center">
                <h2 className="text-2xl font-semibold mb-2">{title}</h2>
                <p className="text-xl text-gray-600">${price.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default Poster;
