import React from "react";

const Footer = () => {
    return (
        <footer>
            <div className="bg-gray-500 w-full p-5 text-center">
                <p className="text-white">©️ {new Date().getFullYear()}{" "}
                <span>Edward Montilla</span>
                </p>
            </div>
        </footer>
    );
}

export default Footer;