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
        <Parallax pages={3} style={{ top: '0', left: '0' }} className="bg-white">

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
            <ParallaxLayer offset={1} speed={0}>
                <Page2 />

            </ParallaxLayer>


{/* Content Front */}
            <ParallaxLayer offset={1} speed={0}>
                <div className="flex items-center justify-center mt-60">
                    <div className="">
                        <div className="text-4xl font-bold border-2 rounded-lg bg-slate-100 border-slate-500">Front Content goes on top here

                        </div>

                    </div>

                </div>
            </ParallaxLayer>

{/* Page 3 */}
            {/* <ParallaxLayer offset={2} speed={0}>
                <Page3 />
            </ParallaxLayer> */}

{/* Footer is set at the last Page */}
            <ParallaxLayer offset={2} speed={0}>
                <Footer />
            </ParallaxLayer>
        </Parallax>

    );
}

export default ParallaxComp;