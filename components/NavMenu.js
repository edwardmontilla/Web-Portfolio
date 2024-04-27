import React from "react";
import Link from "next/link";

const NavMenu = () => {
    return (
        <nav className="flex text-center overflow-hidden text-white">
            <div className="flex-1">
                <Link href="/">
                    Home
                </Link>
            </div>
            <div className="flex-1">
                <Link href="/">
                    Projects
                </Link>
            </div>
            <div className="flex-1">
                <Link href="/">
                    Contact Me
                </Link>
            </div>
                
        </nav>
    );
}

export default NavMenu;