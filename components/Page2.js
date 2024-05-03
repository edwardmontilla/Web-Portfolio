import React from "react";
import Footer from "./Footer";

const Page2 = () => {
    return (
        <section id="page2-block">
            <div className="page2-container">
                <p className="rbox text-lg font-bold text-text text-white">Technologies here:</p>
                <p className="lbox text-lg font-bold text-text text-white">React, Next.js, TailwindCSS, and more!</p>
            </div>
            <Footer />
        </section>
        
    );
}

export default Page2;