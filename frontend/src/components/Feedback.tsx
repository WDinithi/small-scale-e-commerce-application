import React from 'react';

interface FeedbackProps {
    description: string;
    imageSrc: string;
    name: string;
}

const Feedback: React.FC<FeedbackProps> = ({ description, imageSrc, name }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="text-green-700 mb-4 text-3xl">“</div>
            <p className="text-gray-800 text-lg mb-6">{description}</p>
            <div className="flex items-center">
                <img src={imageSrc} alt={name} className="h-12 w-12 rounded-full mr-4" />
                <div>
                    <p className="text-gray-600 font-semibold">{name}</p>
                </div>
            </div>
        </div>
    );
};

export default Feedback;
