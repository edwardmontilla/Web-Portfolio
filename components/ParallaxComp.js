import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Footer from "./Footer";



// import a css file instead
// import PageTwo.js from "./PageTwo.js";


                // IMPORTANT NOTES:
                // EVERYTHING IS DONE IN THE PARALLAX
                // from BG to animations
                //


// using 2 pages for now
// add a component for page {2} at before the closing tag of Parallax
// added viewbox to the svgs to make them responsive
//

const ParallaxComp = () => {
    const parallaxRef = React.useRef(null);
    
    return (
        <Parallax pages={4} style={{ top: '0', left: '0' }} className="bg-white">

{/* Page 1 */}
{/* Welcome text */}
            <ParallaxLayer offset={0.2} speed={0.32}>
                <div className="absolute top-0 left-0 ml-40 transform -translate-y-1/2">
                    <p className="text-6xl font-bold text-text animate-slideFadeRight">Hello!</p>
                </div>
            </ParallaxLayer>
        
{/* Waves */}
            <ParallaxLayer offset={0} speed={0.1}>
                <div className="plxlayer parallax animate-float" id="wave-5"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.15}>
                <div className="plxlayer parallax animate-float2" id="wave-4"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.19}>
                <div className="plxlayer parallax animate-float" id="wave-3"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.22}>
                <div className="plxlayer parallax animate-float2" id="wave-2"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.1}>
                <div className="plxlayer parallax animate-float" id="wave-1"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0}>
                <div className="plxlayer parallax" id="wave-0"></div>
            </ParallaxLayer>

{/* Content Back */}
{/* use grid-column start/end */}
{/* css the svgs */}
{/* Page 2 */}
            <ParallaxLayer offset={1} speed={0}>
                <Page2 />
            </ParallaxLayer>
            
{/* <Page3 contents/> */}
{/* FRONT */}
            {/* 1st row */}
            <ParallaxLayer offset={1.08} speed={0.33}>
                <div id="page-block2">
                    <div id="page-container2" className="">
                        <p className="inline-block text-4xl font-bold ml-100 bg-slate-100">Front Content Next</p>
                        <div className="flex justify-center h-full">
                            <div className="grid grid-rows-1">
                                <div className="col-span-1 col-start-2">
                                    <div className="lbox2">
                                        <p className="box-content w-full p-3 text-3xl font-bold text-gray-200 bg-black border-2 border-yellow-300">Title</p>
                                        {/* <img src="./images/cat.jpg" alt="image1" className="rounded-lg shadow-lg shadow-slate-900/50" /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ParallaxLayer>

            {/* 2nd row */}
            <ParallaxLayer offset={1.74} speed={0.33}>
                <div id="page-block2">
                    <div id="page-container2" className="">
                        <div className="flex justify-center h-full">
                            <div className="grid grid-rows-1 border-2 border-yellow-300">
                                <div className="col-span-1 col-start-1 row-start-1">
                                    <div className="rbox2">
                                        <img src="./images/cat.jpg" alt="image1" className="rounded-lg shadow-lg shadow-slate-900/50" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ParallaxLayer>

            {/* 3rd row */}
            <ParallaxLayer offset={2.05} speed={0.33}>
                <div id="page-block2">
                    <div id="page-container2" className="">
                        <div className="flex justify-center h-full">
                            <div className="grid grid-rows-1 border-2 border-yellow-300">
                                <div className="col-span-1 col-start-2 row-start-1">
                                    <div className="lbox2">
                                        <img src="./images/cat.jpg" alt="image1" className="rounded-lg shadow-lg shadow-slate-900/50" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ParallaxLayer>

            {/* 4th row */}
            <ParallaxLayer offset={2.66} speed={0.33}>
                <div id="page-block2">
                    <div id="page-container2" className="">
                        <div className="flex justify-center h-full">
                            <div className="grid grid-rows-1 border-2 border-yellow-300">
                                <div className="col-span-1 col-start-1 row-start-1">
                                    <div className="rbox2">
                                        <img src="./images/cat.jpg" alt="image1" className="rounded-lg shadow-lg shadow-slate-900/50" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ParallaxLayer>

            {/* 5th row */}
            <ParallaxLayer offset={3} speed={0.33}>
                <div id="page-block2">
                    <div id="page-container2" className="">
                        <div className="flex justify-center h-full">
                            <div className="grid grid-rows-1 border-2 border-yellow-300">
                                <div className="col-span-1 col-start-2 row-start-1">
                                    <div className="lbox2">
                                        <img src="./images/cat.jpg" alt="image1" className="rounded-lg shadow-lg shadow-slate-900/50" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ParallaxLayer>



{/* Footer is set at the last Page */}
            <ParallaxLayer offset={3} speed={0}>
                <Footer />
            </ParallaxLayer>
        </Parallax>

    );
}

export default ParallaxComp;