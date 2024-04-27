import React from "react";

const Footer = () => {
    return (
        <footer className="absolute bottom-0 left-0 right-0 bg-none">
            <div className="pt-2 pb-2 text-center">
                <p className="text-white text-xs">©️ {new Date().getFullYear()}{" "} Edward Montilla. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
