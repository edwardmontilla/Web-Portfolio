import React from "react";

const Footer = () => {
    return (
        <footer className="fixed bottom-0 w-screen">
            <div className="bg-primary w-full pt-5 pb-5 text-center">
                <p className="text-white">©️ {new Date().getFullYear()}{" "} Edward Montilla. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;