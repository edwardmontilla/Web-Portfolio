import React from "react";

// 
// replaced right/left-0 with inset-x-0
// 

const Footer = () => {
    return (
        <footer className="absolute z-40 inset-x-0 bottom-0 bg-primary pt-2 pb-2 text-center text-white text-xs">
            ©️ {new Date().getFullYear()}{" "} Edward Montilla. All Rights Reserved.
        </footer>
    );
}

export default Footer;
