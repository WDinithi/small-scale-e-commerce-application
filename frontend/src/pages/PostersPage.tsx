import React from 'react';
import Poster from '../components/Poster';
import post1 from '../assets/post1.jpg';
import post2 from '../assets/post2.jpg';
import post3 from '../assets/post3.jpg';


const postersData = [
    { imageSrc: `${post1}`, title: 'Beautiful Sunset', price: 20 },
    { imageSrc: `${post2}`, title: 'Mountain View', price: 25 },
    { imageSrc: `${post3}`, title: 'City Lights', price: 30 },
];

const PostersPage: React.FC = () => {
    return (
        <div className="container mx-auto py-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {postersData.map((poster, index) => (
                    <Poster
                        key={index}
                        imageSrc={poster.imageSrc}
                        title={poster.title}
                        price={poster.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default PostersPage;
