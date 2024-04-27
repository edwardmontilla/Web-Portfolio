import React from "react";

// -z-10 to place it behind the parallax and scrollbar for now
//

const Footer = () => {
    return (
        <footer className="absolute -z-10 bottom-0 left-0 right-0 bg-primary pt-2 pb-2 text-center text-white text-xs">
            ©️ {new Date().getFullYear()}{" "} Edward Montilla. All Rights Reserved.
        </footer>
    );
}

export default Footer;
