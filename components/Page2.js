import React from "react";
import Footer from "./Footer";

const Page2 = () => {
    return (
        <section className="pgbg h-screen">
            <div className="w-full mx-auto pt-24">
                <p className="text-lg font-bold text-text text-white">Technologies here:</p>
                <p className="text-lg font-bold text-text text-white">React, Next.js, TailwindCSS, and more!</p>
            </div>
            <Footer />
        </section>
    );
}

export default Page2;
