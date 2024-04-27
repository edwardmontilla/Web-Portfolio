import React from "react";

const Header = ({ NavMenu }) => {
    return (
        <header className="overflow-hidden absolute top-0 left-0 right-0">
            <div className="bg-none overflow-hidden p-5">
                {NavMenu}
            </div>
        </header>
    );
}

export default Header;
