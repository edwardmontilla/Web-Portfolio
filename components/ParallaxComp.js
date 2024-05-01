import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
// import PageTwo.js from "./PageTwo.js";


                // IMPORTANT NOTES:
                // EVERYTHING IS DONE IN THE PARALLAX
                // from BG to animations
                //


// using 2 pages for now
// add a cmponent for page {2} at before the closing tag of Parallax
// added viewbox to the svgs to make them responsive
//

const ParallaxComp = () => {
    const parallaxRef = React.useRef(null);
    
    return (
        <div>
            <Parallax pages={2} className="overflow-hidden">

                <ParallaxLayer offset={0.25} speed={0.32}>
                    <div className="absolute left-0 top-0 transform -translate-y-1/2 ml-40">
                        <p className="text-8xl font-bold text-text animate-slideFadeRight">Welcome!</p>
                    </div>
                </ParallaxLayer>

{/* First Background */}

                <ParallaxLayer offset={0.25} speed={0.1}>
                <img src="/images/wave-5.svg" alt="wave 5" className="w-full mt-[-158px] animate-waveX1" viewBox="0 0 1920 1080" />
                </ParallaxLayer>

                <ParallaxLayer offset={0.25} speed={0.2}>
                <img src="/images/wave-4.svg" alt="wave 4" className="w-full mt-[-120px] animate-waveX2" viewBox="0 0 1920 1080" />
                </ParallaxLayer>

                <ParallaxLayer offset={0.25} speed={0.32}>
                <img src="/images/wave-3.svg" alt="wave 3" className="w-full mt-[-108px] animate-waveX3" viewBox="0 0 1920 1080" />
                </ParallaxLayer>

                <ParallaxLayer offset={0.25} speed={0.45}>
                <img src="/images/wave-2.svg" alt="wave 2" className="w-full mt-[-45px] animate-waveX2" viewBox="0 0 1920 1080" />
                </ParallaxLayer>

                <ParallaxLayer offset={0.25} speed={0.58}>
                <img src="/images/wave-1.svg" alt="wave 1" className="w-full mt-[-45px] animate-waveX1" viewBox="0 0 1920 1080" />
                </ParallaxLayer>

{/* Texts and Second Background */}


                <ParallaxLayer offset={0.8} speed={0.1}>
                    <div className="absolute w-full flex justify-center items-center">
                        <h1 className="text-7xl font-bold text-text">Im Edward</h1>
                    </div>
                </ParallaxLayer>
                
                <ParallaxLayer offset={0.9} speed={0.3}>
                    <div className="absolute w-full flex justify-center items-center">
                        <h1 className="text-5xl font-bold text-text">Im a Software Developer</h1>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={0.95} speed={0.5}>
                    <div className="absolute w-full flex justify-center items-center">
                        <h1 className="text-5xl font-bold text-text">............</h1>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.25}>
                {/* Page 2 Component here
                    Pass Footer Component here 
                */}
                </ParallaxLayer>
            </Parallax>

        </div>
    );
}

export default ParallaxComp;