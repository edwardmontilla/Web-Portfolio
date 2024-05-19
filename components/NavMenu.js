import React from "react";
import Link from "next/link";
import About from "./About";
import Projects from "./Projects";


// add hover color

const NavMenu = () => {
    return (
        <nav className="flex justify-end gap-4 mr-8 text-center text-white">
            
            <div className="p-2">
                <Link href="/"> {/* page.js */}
                    Home
                </Link>
            </div>
            <div className="p-2">
                <Link href="/About.js"> {/* Description about me on a separate page, might include photos of hobbies  */}
                    About Me
                </Link>
            </div>
            <div className="p-2">
                <Link href="/Projects.js"> {/* will scroll down to projects section  */}
                    Projects
                </Link>
            </div>
            <div className="p-2">
                <Link href="/"> {/* will scroll down to contact section  */}
                    Contact
                </Link>
            </div>
                
        </nav>
    );
}

export default NavMenu;