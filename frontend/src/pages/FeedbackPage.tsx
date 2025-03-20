import React from 'react';
import Feedback from '../components/Feedback';
import img1 from '../assets/fimg1.jpg';
import img2 from '../assets/fimg2.jpg';
import img3 from '../assets/fimg3.jpg';

const feedbackData = [
    { description: 'Fast shipping and excellent customer service. The product was even better than expected. I will definitely be a returning customer.', imageSrc: `${img1}`, name: 'Jennifer Lewis' },
    { description: 'Great user experience on your website. I found exactly what I was looking for at a great price. I will definitely be telling my friends.', imageSrc: `${img2}`, name: 'Alicia Heart' },
    { description: 'Thank you for the excellent shopping experience. It arrived quickly and was exactly as described. I will definitely be shopping with you again in the future.', imageSrc: `${img3}`, name: 'Juan Carlos' },
];

const Feedbacks: React.FC = () => {
    return (
        <div className="container mx-auto py-16 ">
            <h2 className="text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {feedbackData.map((feedback, index) => (
                    <Feedback
                        key={index}
                        description={feedback.description}
                        imageSrc={feedback.imageSrc}
                        name={feedback.name}
                    />
                ))}
            </div>
        </div>
    );
};

export default Feedbacks;
