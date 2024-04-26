import React from "react";

const Footer = () => {
    return (
        <footer className="absolute bottom-0 w-full">
            <div className="bg-primary p-5 text-center">
                <p className="text-white">©️ {new Date().getFullYear()}{" "} Edward Montilla. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;