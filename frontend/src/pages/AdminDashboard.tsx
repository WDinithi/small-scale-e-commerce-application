import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import AdmNav from '../components/AdmNav';

const AdminDashboard: React.FC = () => {
    const [userCount, setUserCount] = useState<number>(0);
    const [itemCount, setItemCount] = useState<number>(0);
    const [orderCount, setOrderCount] = useState<number>(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCounts = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:5002/api/dashboard/counts');
                setUserCount(response.data.userCount);
                setItemCount(response.data.itemCount);
                setOrderCount(response.data.orderCount);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchCounts();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <AdmNav/>
            <hr className="border-t border-[#f5f6fa] my-3" />
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold text-green-600">Admin Dashboard</h1>
                <div className="mt-4 flex flex-wrap -mx-2">
                    <div className="w-full md:w-1/3 p-2">
                        <div className="bg-white shadow-md rounded-lg p-4">
                            <h2 className="text-xl font-bold">User Count</h2>
                            <p className="text-3xl">{userCount}</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 p-2">
                        <div className="bg-white shadow-md rounded-lg p-4">
                            <h2 className="text-xl font-bold">Item Count</h2>
                            <p className="text-3xl">{itemCount}</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 p-2">
                        <div className="bg-white shadow-md rounded-lg p-4">
                            <h2 className="text-xl font-bold">Order Count</h2>
                            <p className="text-3xl">{orderCount}</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="border-t border-[#f5f6fa] my-3" />
           <Footer/>
          
        </div>
    );
};

export default AdminDashboard;
