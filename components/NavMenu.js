import React from "react";
import Link from "next/link";


// got rid of overflow-hidden for now
// add hover color

const NavMenu = () => {
    return (
        <nav className="flex justify-end text-center text-white">
            <div className="ml-4 mr-4 p-2">
                <Link href="/">
                    Home
                </Link>
            </div>
            <div className="ml-4 mr-4 p-2">
                <Link href="/">
                    Projects
                </Link>
            </div>
            <div className="ml-4 mr-4 p-2">
                <Link href="/">
                    Contact Me
                </Link>
            </div>
                
        </nav>
    );
}

export default NavMenu;