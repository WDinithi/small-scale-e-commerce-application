import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { FaChevronDown, FaSearch } from 'react-icons/fa';


interface Product {
    _id: string;
    title: string;
    price: number;
    image: string;
    category: string;
}

const ShopPage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:5002/api/items');
                setProducts(response.data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <NavBar />
            <hr className="border-t border-[#f5f6fa] my-3" />
            <div className="container mx-auto p-4">
                <div className="flex flex-col md:flex-row">
                    <aside className="w-full md:w-1/4 p-4">
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                            <button className="p-2 bg-green-600 text-white rounded ml-2">
                                <FaSearch />
                            </button>
                        </div>
                        <div className="mb-4">
                            <h2 className="text-lg font-bold mb-2">Filter by price</h2>
                            <div className="flex items-center space-x-2">
                                <input type="range" min="10" max="30" className="w-full" />
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>$10</span>
                                <span>$30</span>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-lg font-bold mb-2">Categories</h2>
                            <ul>
                                <li className="mb-2 text-green-600">Postcards</li>
                                <li className="mb-2 text-green-600">Posters</li>
                            </ul>
                        </div>
                    </aside>
                    <main className="w-full md:w-3/4 p-4">
                        <div className="flex justify-between items-center mb-4">
                            <h1 className="text-3xl font-bold text-green-600">Shop</h1>
                            <div className="flex items-center space-x-2">
                                <span className="text-gray-600">Default sorting</span>
                                <FaChevronDown className="text-gray-600" />
                            </div>
                        </div>
                        <div className="flex flex-wrap -m-4">
                            {products.map((product) => (
                                <ProductCard
                                    key={product._id}
                                    title={product.title}
                                    price={`$${product.price.toFixed(2)}`}
                                    image={product.image}
                                    category={product.category}
                                />
                            ))}
                        </div>
                    </main>
                </div>
            </div>
            <hr className="border-t border-[#f5f6fa] my-3" />
            <Footer />
        </div>
    );
};

export default ShopPage;
