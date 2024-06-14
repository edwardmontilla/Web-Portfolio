'use client';

import React, { useState } from "react";
import Link from "next/link";

const NavMenu = () => {

    
    return (
        <nav className="flex items-center justify-between ml-16 text-white text-nowrap">
            <div className="pl-2 pr-2 ml-2 mr-2 border-r border-white metropolisL" id="desktop-name-logo">
                <Link href="/">
                    Edward Montilla
                </Link>
            </div>
            
            <div className="flex justify-end gap-4 mr-24 text-center metropolisL">
                <div className="p-2 duration-100 ease-in-out hover:font-semibold hover:text-accent">
                    <Link href="/">
                        Home
                    </Link>
                </div>
                <div className="p-2 duration-100 ease-in-out hover:font-semibold hover:text-accent">
                    <Link href="/about#container">
                        About
                    </Link>
                </div>
                <div className="p-2 duration-100 ease-in-out hover:font-semibold hover:text-accent">
                    <Link href="/about#proj-container">
                        Projects
                    </Link>
                </div>
                <div className="p-2 duration-100 ease-in-out hover:font-semibold hover:text-accent">
                    <Link href="/about#contact">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default NavMenu;
