import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

interface ProductCardProps {
    title: string;
    price: string;
    image: string;
    category: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, image, category }) => {
    return (
        <div className="w-full sm:w-1/2 md:w-1/3 p-4 relative">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="relative">
                    <img src={image} alt={title} className="w-full h-48 object-cover" />
                    <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-lg">
                        <FaShoppingCart className="h-6 w-6 text-green-600 hover:text-green-800 cursor-pointer" />
                    </div>
                </div>
                <div className="p-4">
                    <p className="text-sm text-gray-600">{category}</p>
                    <h2 className="text-lg font-bold">{title}</h2>
                    <p className="text-green-600">{price}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
