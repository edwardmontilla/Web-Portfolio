import React from "react";
import Link from "next/link";


// add hover color and other things
// 

const NavMenu = () => {
    return (
        <nav className="flex items-center justify-between ml-8 text-white text-nowrap">
            <div className="pl-2 pr-2 ml-2 mr-2 border-l-2 border-r-2 border-white metropolisL">
                <Link href="/">
                    Edward Montilla
                </Link>
            </div>
            

            <div className="flex justify-end gap-4 mr-8 text-center metropolisL">

                <div className="p-2">
                    <Link href="/"> {/* page.js */}
                        Home
                    </Link>
                </div>
                <div className="p-2">
                    <Link href="./about#container"> {/* Description about me on a separate page, might include photos of hobbies  */}
                        About Me
                    </Link>
                </div>
                <div className="p-2">
                    <Link href="./about#proj-container"> {/* will scroll down to projects section  */}
                        Projects
                    </Link>
                </div>
                <div className="p-2">
                    <Link href="./about#contact"> {/* will scroll down to contact section  */}
                        Contact
                    </Link>
                </div>
            </div>
                
        </nav>
    );
}

export default NavMenu;