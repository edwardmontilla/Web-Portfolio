import React from "react";

// passing the component as a prop instead
const Header = ({ NavMenu }) => {
    return (
        <header>
            <div className="bg-primary p-5">
                {NavMenu}
            </div>
        </header>
    );
}

export default Header;
