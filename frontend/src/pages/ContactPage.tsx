import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Cover from '../components/Cover';
import {FaEnvelope, FaFacebookF, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaTwitter, FaYoutube} from 'react-icons/fa';


const ContactPage: React.FC = () => {
    return (<div>
            <NavBar/>
            <Cover title={'Contact Us'}/>
            <div className="min-h-screen flex items-center justify-center p-4">
                <div className="max-w-4xl w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/2 p-8">
                            <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
                            <form className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Full name"
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                                <textarea
                                    placeholder="Message"
                                    className="w-full p-2 border border-gray-300 rounded"
                                    rows={4}
                                ></textarea>
                                <button
                                    type="submit"
                                    className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
                                >
                                    SEND NOW
                                </button>
                            </form>
                        </div>


                        <div className="md:w-1/2 bg-green-100 p-8">
                            <h2 className="text-2xl font-bold mb-10">Talk To Us</h2>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-4">
                                    <FaEnvelope className="w-6 h-6 text-green-600"/>
                                    <span>wallarts@gmail.com</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <FaPhoneAlt className="w-6 h-6 text-green-600"/>
                                    <span>+9477-555-0188</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <FaMapMarkerAlt className="w-6 h-6 text-green-600"/>
                                    <span>2727 Ocean Road,Colombo</span>
                                </div>
                                <div className="flex space-x-4 py-20">
                                    <a href="#" className="text-green-600 hover:text-green-800">
                                        <FaFacebookF className="w-6 h-6"/>
                                    </a>
                                    <a href="#" className="text-green-600 hover:text-green-800">
                                        <FaTwitter className="w-6 h-6"/>
                                    </a>
                                    <a href="#" className="text-green-600 hover:text-green-800">
                                        <FaLinkedinIn className="w-6 h-6"/>
                                    </a>
                                    <a href="#" className="text-green-600 hover:text-green-800">
                                        <FaYoutube className="w-6 h-6"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="border-t border-[#f5f6fa] my-3"/>

            <Footer/>
        </div>);
};

export default ContactPage;
