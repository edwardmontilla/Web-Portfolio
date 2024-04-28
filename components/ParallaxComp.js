import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

// using 3 pages for now

const ParallaxComp = () => {
    const parallaxRef = React.useRef(null);
    
    return (
        <div className="overflow-hidden">
            <Parallax pages={2} className="overflow-hidden">

                <ParallaxLayer offset={0} speed={0.1}>
                <img src="/images/wave-5.svg" alt="wave 5" className="w-full mt-[-158px]" />
                </ParallaxLayer>

                <ParallaxLayer offset={0} speed={0.2}>
                <img src="/images/wave-4.svg" alt="wave 4" className="w-full mt-[-120px]" />
                </ParallaxLayer>

                <ParallaxLayer offset={0} speed={0.32}>
                <img src="/images/wave-3.svg" alt="wave 3" className="w-full mt-[-108px]" />
                </ParallaxLayer>

                <ParallaxLayer offset={0} speed={0.45}>
                <img src="/images/wave-2.svg" alt="wave 2" className="w-full mt-[-45px]" />
                </ParallaxLayer>

                <ParallaxLayer offset={0} speed={0.58}>
                <img src="/images/wave-1.svg" alt="wave 1" className="w-full mt-[-45px]" />
                </ParallaxLayer>

                <ParallaxLayer offset={0.8} speed={0.1}>
                    <div className="absolute w-full flex justify-center items-center">
                        <h1 className="text-5xl font-bold text-text">Hello, I'm Edward</h1>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={0.8} speed={0.3}>
                    <div className="absolute w-full flex justify-center items-center">
                        <h1 className="text-5xl font-bold text-text">I'm a Full Stack Developer</h1>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={0.8} speed={0.5}>
                    <div className="absolute w-full flex justify-center items-center">
                        <h1 className="text-5xl font-bold text-text">I'm a Full Stack Developer</h1>
                    </div>
                </ParallaxLayer>


            </Parallax>

        </div>
    );
}

export default ParallaxComp;