import React from 'react';
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa';

function Footer() {
    return (<footer className="bg-white text-black py-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="flex space-x-4">
                    <a href="#" className="text-black hover:text-gray-400">
                        <FaFacebook className="h-6 w-6"/>
                    </a>
                    <a href="#" className="text-black hover:text-gray-400">
                        <FaTwitter className="h-6 w-6"/>
                    </a>
                    <a href="#" className="text-black hover:text-gray-400">
                        <FaInstagram className="h-6 w-6"/>
                    </a>
                </div>
                <div className="my-2 md:my-0">
                    <span className="text-xl font-bold">WallArt Store</span>
                </div>
                <div>
                    <span>&copy; {new Date().getFullYear()}All rights reserved.</span>
                </div>
            </div>
        </footer>);
}

export default Footer;
