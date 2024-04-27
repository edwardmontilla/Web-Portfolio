import React from "react";

// absolute is necessary to prevent double scrollbar
//

const Header = ({ NavMenu }) => {
    return (
        <header className="absolute left-0 right-0">
            <div className="bg-primary overflow-hidden p-5">
                {NavMenu}
            </div>
        </header>
    );
}

export default Header;
