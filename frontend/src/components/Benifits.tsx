import React from 'react';
import {FaHeadset, FaLock, FaTruck} from 'react-icons/fa';

const benefitsData = [{
    icon: <FaLock className="text-3xl text-white"/>,
    title: 'Secure Payment',
    description: 'All our payments are SSL secured'
}, {
    icon: <FaTruck className="text-3xl text-white"/>,
    title: 'Delivered With Care',
    description: 'Super fast shipping to your door'
}, {
    icon: <FaHeadset className="text-3xl text-white"/>,
    title: 'Excellent Service',
    description: 'Live chat and phone support'
}];

const Benefits: React.FC = () => {
    return (<div className="container mx-auto py-16 flex justify-center space-x-8">
            {benefitsData.map((benefit, index) => (<div key={index} className="flex items-center space-x-4">
                    <div className="flex-shrink-0 bg-green-900 rounded-full p-4">
                        {benefit.icon}
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold">{benefit.title}</h4>
                        <p className="text-sm">{benefit.description}</p>
                    </div>
                </div>))}
        </div>);
};

export default Benefits;
