import React from "react";


// absolute is necessary to prevent double scrollbar
// replaced right/left-0 with inset-x-0
// added z-20 since parallax is set to z-10 and for buttons to work

const Header = ({ NavMenu }) => {
    return (
        <header className="fixed inset-x-0 z-40">
            <div className="bg-primary overflow-hidden p-5">
                {NavMenu}
            </div>
        </header>
    );
}

export default Header;
