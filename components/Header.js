import React from "react";

// passing the component as a prop instead
const Header = ({ NavMenu }) => {
    return (
        <header>
            <div className="bg-gray-500 w-full p-5">
                {NavMenu}
            </div>
        </header>
    );
}

export default Header;
