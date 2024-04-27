import React from "react";

const Header = ({ NavMenu }) => {
    return (
        <header className="overflow-hidden fixed top-0 left-0 right-0 z-50">
            <div className="bg-primary overflow-visible p-5">
                {NavMenu}
            </div>
        </header>
    );
}

export default Header;
