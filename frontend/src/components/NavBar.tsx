import React, {useState} from 'react';
import {FaBars, FaShoppingCart, FaSignInAlt} from 'react-icons/fa';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (<nav className="p-4 mt-3 bg-transparent">
            <div className="container mx-auto flex justify-between items-center text-black">
                <div className="text-black text-2xl font-bold font-custom">
                    WallArt Store
                </div>
                <div className="hidden md:flex space-x-6 text-lg font-custom">
                    <a href="/home" className="flex items-center text-black hover:text-[#2c551d]">
                        Home
                    </a>
                    <a href="/about" className="flex items-center text-black hover:text-[#2c551d]">
                        About
                    </a>
                    <a href="/shop" className="flex items-center text-black hover:text-[#2c551d]">
                        Shop
                    </a>
                    <a href="/contact" className="flex items-center text-black hover:text-[#2c551d]">
                        Contact
                    </a>
                    <div className="flex items-center space-x-6">
                        <a href="#" className="text-black hover:text-[#2c551d]">
                            <FaSignInAlt className="h-6 w-6"/>
                        </a>
                        <a href="#" className="text-black hover:text-[#2c551d]">
                            <FaShoppingCart className="h-6 w-6"/>
                        </a>
                    </div>
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-black focus:outline-none">
                        <FaBars className="h-6 w-6"/>
                    </button>
                </div>
            </div>
            {isOpen && (<div className="md:hidden">
                    <div className="flex flex-col space-y-4 mt-4 text-lg font-custom text-center">
                        <a href="/home" className="flex items-center justify-center text-black hover:text-[#2c551d]">
                            Home
                        </a>
                        <a href="/about" className="flex items-center justify-center text-black hover:text-[#2c551d]">
                            About
                        </a>
                        <a href="/shop" className="flex items-center justify-center text-black hover:text-[#2c551d]">
                            Shop
                        </a>
                        <a href="/contact" className="flex items-center justify-center text-black hover:text-[#2c551d]">
                            Contact
                        </a>
                        <div className="flex justify-center space-x-4">
                            <a href="#" className="text-black hover:text-[#2c551d]">
                                <FaSignInAlt className="h-6 w-6"/>
                            </a>
                            <a href="#" className="text-black hover:text-[#2c551d]">
                                <FaShoppingCart className="h-6 w-6"/>
                            </a>
                        </div>
                    </div>
                </div>)}
        </nav>);
}

export default NavBar;
