import { useState } from 'react';
import 'boxicons/css/boxicons.min.css';

const Header = () => {
    // State to toggle mobile menu
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Function to toggle the mobile menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="flex justify-between items-center py-4 px-4 lg:px-20">

            <h1 data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500" className="text-3xl md:text-4xl lg:text-5xl font-light m-0 text-[#8F00FF]">
                Violet's Portfolio
            </h1>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-12">
                <a data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000" className="text-base tracking-wider transition-colors hover:text-[#8F00FF] z-50" href="#about">
                    About
                </a>

                <a data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500" className="text-base tracking-wider transition-colors hover:text-[#8F00FF] z-50" href="#projects">
                    Projects
                </a>

                <a data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="2000" className="text-base tracking-wider transition-colors hover:text-[#8F00FF] z-50" href="#skills">
                    Skills
                </a>

                <a data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="2500" className="text-base tracking-wider transition-colors hover:text-[#8F00FF] z-50" href="#contact">
                    Contact
                </a>
            </nav>

            <button className="hidden md:block bg-[#8F00FF] text-white py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-[#6B00CC] cursor-pointer z-50">
                Get in Touch
            </button>

            {/* Mobile Menu Button - Visible only on Mobile */}
            <button onClick={toggleMobileMenu} className="md:hidden text-3xl p-2 z-50">
                <i className="bx bx-menu"></i>
            </button>

            {/* Mobile Menu - Hidden By Default */}
            <div
                id="mobileMenu"
                className={`fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur-md ${isMobileMenuOpen ? '' : 'hidden'}`}
            >
                <nav className="flex flex-col gap-6 items-center">
                    <a className="text-base tracking-wider transition-colors hover:text-[#8F00FF] z-50" href="#about">
                        About
                    </a>
                    <a className="text-base tracking-wider transition-colors hover:text-[#8F00FF] z-50" href="#projects">
                        Projects
                    </a>
                    <a className="text-base tracking-wider transition-colors hover:text-[#8F00FF] z-50" href="#skills">
                        Skills
                    </a>
                    <a className="text-base tracking-wider transition-colors hover:text-[#8F00FF] z-50" href="#contact">
                        Contact
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;