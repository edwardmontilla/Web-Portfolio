import React from "react";
import Link from "next/link";


//got rid of overflow-hidden for now
//

const NavMenu = () => {
    return (
        <nav className="flex text-center">
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