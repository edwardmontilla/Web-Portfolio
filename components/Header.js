"use client";

import React, { useState, useEffect } from "react";


// absolute is necessary to prevent double scrollbar
// replaced right/left-0 with inset-x-0
// added z-30 since parallax is set to z-10 and for buttons to work
// added relative to prevent z-30 from being ignored

const Header = ({ NavMenu }) => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos, visible]);

    return (
        <header className={`fixed inset-x-0 z-30 transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="p-2 bg-primary">
                {NavMenu}
            </div>
        </header>
    );
}

export default Header;