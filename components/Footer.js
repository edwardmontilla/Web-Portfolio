import React from "react";

const Footer = () => {
    return (
        <footer className="fixed bottom-0 w-full">
            <div className="bg-gray-500 w-full p-5 text-center">
                <p className="text-white">©️ {new Date().getFullYear()}{" "} Edward Montilla</p>
            </div>
        </footer>
    );
}

export default Footer;