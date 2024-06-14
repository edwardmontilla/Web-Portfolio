"use client";

import React, { useState, useEffect } from "react";
// import BurgerMenu from "./BurgerMenu";

const Header = ({ NavMenu }) => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    // const [hamburgerOpen, setHamburgerOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos, visible]);

    // const toggleHamburger = () => {
    //     setHamburgerOpen(!hamburgerOpen);
    // };

    return (
        <header className={`fixed inset-x-0 z-30 transition-opacity duration-300 animate-slideFadeDown ${visible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="p-2 bg-primary">
                {/* <BurgerMenu isOpen={hamburgerOpen} toggleHamburger={toggleHamburger} /> */}
                {NavMenu}
            </div>
        </header>
    );
}

export default Header;
