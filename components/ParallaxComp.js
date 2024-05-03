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
        <Parallax pages={3} style={{ top: '0', left: '0' }} className="plxcontainer bg-background">

{/* Page 1 */}
{/* Welcome text */}
            <ParallaxLayer offset={0.2} speed={0.32}>
                <div className="absolute left-0 top-0 transform -translate-y-1/2 ml-40">
                    <p className="text-6xl font-bold text-text animate-slideFadeRight">Welcome!</p>
                </div>
            </ParallaxLayer>
        
{/* Waves */}
            <ParallaxLayer offset={0} speed={0.1}>
                <div className="plxlayer parallax animate-float" id="wave-55"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.15}>
                <div className="plxlayer parallax animate-float2" id="wave-44"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.19}>
                <div className="plxlayer parallax animate-float" id="wave-33"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.22}>
                <div className="plxlayer parallax animate-float2" id="wave-22"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.08}>
                <div className="plxlayer parallax animate-float" id="wave-11"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0}>
                <div className="plxlayer parallax" id="wave-00"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={0}>
                <Page2 />
            </ParallaxLayer>

{/* Content Back */}
{/* use grid-column start/end */}
{/* css the svgs */}
            <ParallaxLayer offset={1} speed={0}>
                <div className="flex justify-center h-3/4 w-screen ">
                    <div className="grid grid-cols-2 gap-20 text-text w-5/6">
                        <div className="flex col-span-2 justify-self-start self-start bg-gray-300 border-4 round-md">
                            <img src="./images/baked_macaroni_slice.png" alt="image" id="lbox" />01
                        </div>
                        <div className="bg-gray-300 col-span-2 justify-self-end self-end">03
                            <img src="./images/mango_graham.png" alt="image" id="rbox" />
                        </div>
                        <div className="bg-gray-300 col-span-2 justify-self-start self-start">04
                            <img src="./images/baked_macaroni_slice.png" alt="image" id="lbox" />
                        </div>
                        <div className="bg-gray-300 col-span-2 justify-self-end self-end">05
                            <img src="./images/mango_graham.png" alt="image" id="rbox" />
                        </div>
                        <div className="bg-gray-300 col-span-2 justify-self-start self-start">06
                            <img src="./images/baked_macaroni_slice.png" alt="image" id="lbox" />
                        </div>
                    </div>
                </div>
            </ParallaxLayer>


{/* Content Front */}
            <ParallaxLayer offset={1} speed={0}>
                <div className="flex justify-center w-screen">
                    <div className="grid grid-cols-2 gap-20 w-5/6">
                        <div className="bg-blue-100 flex justify-self-end self-end">Test

                        </div>

                    </div>

                </div>
            </ParallaxLayer>

{/* Page 3 */}
            <ParallaxLayer offset={2} speed={0}>
                <Page3 />
            </ParallaxLayer>

{/* Footer is set at the last Page */}
            <ParallaxLayer offset={2} speed={0}>
                <Footer />
            </ParallaxLayer>
        </Parallax>

    );
}

export default ParallaxComp;