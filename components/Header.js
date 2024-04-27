import React from "react";

// absolute is necessary to prevent double scrollbar
// replaced right/left-0 with inset-x-0
// 

const Header = ({ NavMenu }) => {
    return (
        <header className="fixed inset-x-0">
            <div className="bg-primary overflow-hidden p-5">
                {NavMenu}
            </div>
        </header>
    );
}

export default Header;
