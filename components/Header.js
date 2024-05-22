import React from "react";


// absolute is necessary to prevent double scrollbar
// replaced right/left-0 with inset-x-0
// added z-30 since parallax is set to z-10 and for buttons to work
// added relative to prevent z-30 from being ignored

const Header = ({ NavMenu }) => {
    return (
        <header className="relative inset-x-0 z-30">
            <div className="p-2 bg-primary">
                {NavMenu}
            </div>
        </header>
    );
}

export default Header;
