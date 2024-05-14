import React from "react";
import Link from "next/link";


// got rid of overflow-hidden for now
// add hover color

const NavMenu = () => {
    return (
        <nav className="flex justify-end gap-4 mr-8 text-center text-white">
            <div className="p-2">
                <Link href="/">
                    Home
                </Link>
            </div>
            <div className="p-2">
                <Link href="/">
                    About
                </Link>
            </div>
            <div className="p-2">
                <Link href="/">
                    Projects
                </Link>
            </div>
            <div className="p-2">
                <Link href="/">
                    Contact
                </Link>
            </div>
                
        </nav>
    );
}

export default NavMenu;