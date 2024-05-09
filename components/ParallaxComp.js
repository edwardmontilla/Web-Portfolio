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
                <div className="translate-y-4 plxlayer parallax" id="wave-000"></div>
            </ParallaxLayer>

{/* About Me */}
            <ParallaxLayer offset={0} speed={0.1}>
                
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
            <ParallaxLayer offset={1.62} speed={0.33}>
                <div id="page-block2">
                    <div id="page-container2" className="">
                        <div className="flex justify-center h-full">
                            <div className="grid grid-rows-1">
                                <div className="col-span-1 col-start-2">
                                    <div className="lbox2"  id="titleR">
                                        <p className="box-content h-12 p-3 text-2xl font-semibold text-white bg-middle lnFont">Full Stack Development</p>
                                    </div>
                                    <div>
                                        <p className="text-lg text-white metropolisR">Descriptions here aaaaaaaaaa aaaaaaa aaaa aa a aaaaaaaaa aaaaaaaaaaaa</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ParallaxLayer>

            {/* 2nd row */}
            <ParallaxLayer offset={2.05} speed={0.33}>
                <div id="page-block2">
                    <div id="page-container2" className="">
                        <div className="flex justify-center h-full">
                            <div className="grid grid-rows-1">
                                <div className="col-span-1 col-start-1 row-start-1">
                                    <div className="rbox2" id="titleL">
                                        <p className="box-content h-12 p-3 text-2xl font-semibold text-white bg-middle lnFont">UI/UX Design</p>
                                    </div>
                                    <div>
                                        <p className="text-lg text-white metropolisR">Descriptions here aaaaaaaaaa aaaaaaa aaaa aa a aaaaaaaaa aaaaaaaaaaaa</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ParallaxLayer>

            {/* 3rd row */}
            <ParallaxLayer offset={2.8} speed={0.33}>
                <div id="page-block2">
                    <div id="page-container2" className="">
                        <div className="flex justify-center h-full">
                            <div className="grid grid-rows-1">
                                <div className="col-span-1 col-start-2 row-start-1">
                                    <div className="lbox2" id="titleR">
                                        <p className="box-content h-12 p-3 text-2xl font-semibold text-white bg-middle lnFont">Education</p>
                                    </div>
                                    <div>
                                        <p className="text-lg text-white metropolisR">Descriptions here aaaaaaaaaa aaaaaaa aaaa aa a aaaaaaaaa aaaaaaaaaaaa</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ParallaxLayer>

            {/* 4th row */}
            <ParallaxLayer offset={3.26} speed={0.33}>
                <div id="page-block2">
                    <div id="page-container2" className="">
                        <div className="flex justify-center h-full">
                            <div className="grid grid-rows-1">
                                <div className="col-span-1 col-start-1 row-start-1">
                                    <div className="rbox2" id="titleL">
                                        <p className="box-content h-12 p-3 text-2xl font-semibold text-white bg-middle lnFont">Projects</p>
                                    </div>
                                    <div>
                                        <p className="text-lg text-white metropolisR">Descriptions here aaaaaaaaaa aaaaaaa aaaa aa a aaaaaaaaa aaaaaaaaaaaa</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ParallaxLayer>

            {/* 5th row
            <ParallaxLayer offset={3} speed={0.33}>
                <div id="page-block2">
                    <div id="page-container2" className="">
                        <div className="flex justify-center h-full">
                            <div className="grid grid-rows-1">
                                <div className="col-span-1 col-start-2 row-start-1">
                                    <div className="lbox2" id="titleR">
                                        <p className="box-content h-12 p-3 text-2xl font-semibold text-white bg-middle lnFont">Full Stack Development</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ParallaxLayer> */}



{/* Footer is set at the last Page */}
            <ParallaxLayer offset={3} speed={0}>
                <Footer />
            </ParallaxLayer>
        </Parallax>

    );
}

export default ParallaxComp;