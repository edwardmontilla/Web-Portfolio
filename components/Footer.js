import React from "react";

// 
// replaced right/left-0 with inset-x-0
// 

const Footer = () => {
    return (
        <>
        <div className="hidden"> {/* hidden for now! */}
            <div className="">
                <div className="">
                    <button className="p-4 text-white border-2 bg-primary">View Project 1</button>
                    <button className="p-4 text-white border-2 bg-primary">View Project 2</button>
                </div>
            </div>
            <div className="">
                <div className="">
                    <button className="p-4 text-white border-2 bg-primary">View Project 3</button>
                    <button className="p-4 text-white border-2 bg-primary">View Project 4</button>
                </div>
            </div>
        </div>
            <footer className="absolute inset-x-0 bottom-0 z-40 pt-2 pb-2 text-xs text-center text-white bg-primary">
                ©️ {new Date().getFullYear()}{" "} Edward Montilla. All Rights Reserved.
            </footer>
        </>
    );
}

export default Footer;
