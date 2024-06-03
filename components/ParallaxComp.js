import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Page2 from "./Page2";
import Footer from "./Footer";



// import a css file instead
// import PageTwo.js from "./PageTwo.js";


                // IMPORTANT NOTES:
                // EVERYTHING IS DONE IN THE PARALLAX
                // from BG to animations
                //


// using 5 pages for now
// add a component for page {2} at before the closing tag of Parallax
// added viewbox to the svgs to make them responsive
//

const ParallaxComp = () => {
    const parallaxRef = React.useRef(null);
    
    return (
        <Parallax pages={5} style={{ top: '0', left: '0' }} className="bg-white">

{/* Page 1 */}
{/* Welcome text */}
            <ParallaxLayer offset={0.2} speed={0.32}>
                <div className="absolute top-0 left-0 ml-[150px] transform -translate-y-1/2">
                    <p className="text-6xl font-bold text-text animate-slideFadeUp" id="hello">Hello.</p>
                </div>
            </ParallaxLayer>
        
{/* Waves */}
            <ParallaxLayer offset={0} speed={0.1} className="animate-slideFadeUp">
                <div className="plxlayer parallax animate-float" id="wave-5"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.15} className="animate-slideFadeUp">
                <div className="plxlayer parallax animate-float2" id="wave-4"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.2} className="animate-slideFadeUp">
                <div className="plxlayer parallax animate-fish" id="blowfish"></div> {/* blowfish */}
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.19} className="animate-slideFadeUp">
                <div className="plxlayer parallax animate-float" id="wave-3"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.1} className="animate-slideFadeUp">
                <div className="plxlayer parallax animate-float" id="wave-1"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0} className="animate-slideFadeUp">
                <div className="translate-y-4 plxlayer parallax" id="wave-000"></div> {/* wave cover*/}
            </ParallaxLayer>

{/* About Me */}
            <ParallaxLayer offset={0} speed={0.1}>
                {/* Leave this here. this sets the whole viewport */}
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
            <ParallaxLayer offset={1.62} speed={0.15}>
                <div id="page-block2">
                    <div id="page-container2">
                        <div className="flex justify-center h-full">
                            <div className="grid grid-rows-1">
                                <div className="col-span-1 col-start-2">
                                    <div className="lbox2"  id="titleR">
                                        <p className="rounded-md box-content h-12 p-3 text-2xl text-white border-2 border-background/25 bg-middle/75 backdrop-blur-[6px] lnFont">
                                            Full Stack Development
                                        </p>
                                    </div>
                                    <div>
                                        <p className="mt-24 text-lg text-white translate-x-[-2rem] text-right metropolisR" id="mobile-desc1">
                                            While my passion for designing interactive and smooth user experiences shines through on the front-end side, 
                                            utilizing proprietary tools, and allowing me to craft unique and engaging digital solutions, I also recognize the 
                                            importance of back-end development, which motivates me to engage with it as part of the full-stack development process.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ParallaxLayer>

            {/* 2nd row */}
            <ParallaxLayer offset={2.1} speed={0.15}>
                <div id="page-block2">
                    <div id="page-container2">
                        <div className="flex justify-center h-full">
                            <div className="grid grid-rows-1">
                                <div className="col-span-1 col-start-1 row-start-1" id="ui-title">
                                    <div className="rbox2" id="titleL">
                                        <p className="box-content rounded-md h-12 p-3 text-2xl text-white border-2 border-background/25 bg-middle/75 backdrop-blur-[6px] lnFont">
                                            UI/UX Design
                                        </p>
                                    </div>
                                    <div>
                                        <p className="mt-24 text-lg text-white translate-x-8 metropolisR" id="mobile-desc2">
                                            Equipped with a background in 2D Digital Animation, I have a keen eye for detail and a strong understanding 
                                            of spatial relationships in design. My proficiency in software tools like Photoshop and Figma further 
                                            enhances my ability to translate creative concepts into visually compelling digital experiences.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ParallaxLayer>

            {/* 3rd row */}
            <ParallaxLayer offset={2.74} speed={0.15}>
                <div id="page-block2">
                    <div id="page-container2">
                        <div className="flex justify-center h-full">
                            <div className="grid grid-rows-1">
                                <div className="col-span-1 col-start-2 row-start-1 translate-y-[-7rem]" id="edu-title">
                                    <div className="lbox2" id="titleR">
                                        <p className="rounded-md box-content h-12 p-3 text-2xl text-white border-2 border-background/25 bg-middle/75 backdrop-blur-[6px] lnFont">
                                            Education
                                        </p>
                                    </div>
                                    <div className="mt-24 text-lg text-white metropolisR translate-x-[-2rem] text-right" id="mobile-desc3">
                                        <ul>
                                            <li className="underline underline-offset-[5px]">Southern Alberta Institute of Technology </li>
                                            <li>Software Development (Diploma)</li>
                                            <li>2022 - 2024 </li>
                                        </ul>
                                    </div>
                                    <div className="mt-4 text-lg text-white metropolisR translate-x-[-2rem] text-right" id="mobile-desc3">
                                        <ul>
                                            <li className="underline underline-offset-[5px]">Vancouver Film School </li>
                                            <li>2D Classical Animation (Diploma)</li>
                                            <li>2019 - 2020 </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ParallaxLayer>

            {/* PROJECTS */}
            {/* 4th row */}
            <ParallaxLayer offset={3.05} speed={0.15}>
                <div id="page-block2">
                    <div id="page-container2">
                        <div className="flex justify-center h-full">
                            <div className="grid grid-rows-1">

                        {/* 1 */}
                                <div className="col-span-1 col-start-1 row-start-1">
                                    <div className="rbox2">
                                        <p className="mt-24 text-lg text-white translate-x-8 metropolisR" id="mobile-desc4">
                                            A capstone project built to simplify food ordering operations with a dedicated web app, automating ordering and payment 
                                            for enhanced convenience.
                                        </p>
                                    </div>
                                </div>
                                
                        {/* 2 */}
                                <div className="col-span-1 col-start-2 row-start-1">
                                    <div className="lbox2">
                                        <p className="mt-24 text-lg text-right text-white translate-x-[-2rem] metropolisR" id="mobile-desc5">
                                            An application to calculate an online retail business&apos; daily profits.
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ParallaxLayer>

            {/* 5th row */}
            <ParallaxLayer offset={3.72} speed={0.15}>
                <div id="page-block2">
                    <div id="page-container2" className="">
                        <div className="flex justify-center h-full">
                            <div className="grid grid-rows-1">

                        {/* 3 */}
                        
                                <div className="col-span-1 col-start-1 row-start-1"> 
                                    <div className="rbox2">
                                        <p className="mt-24 text-lg text-white translate-x-8 metropolisR" id="mobile-desc6">
                                            This is a fan-made simple website for a game series called Little Nightmares.
                                        </p>
                                    </div>
                                </div>
                                
                                
                        {/* 4 */}
                                <div className="col-span-1 col-start-2 row-start-1">
                                    <div className="lbox2">
                                        <p className="mt-24 text-lg text-right text-white translate-x-[-2rem] metropolisR" id="mobile-desc7">
                                            Project/Work description here
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ParallaxLayer>

            {/* 6th row */}
            <ParallaxLayer offset={4.2} speed={0.15}>
                <div id="page-block2">
                    <div id="page-container2">
                        <div className="flex justify-center h-full">
                            <div className="grid grid-rows-1">

                        {/* 1 Hidden */}
                                <div className="hidden col-span-1 col-start-1 row-start-1">
                                    <div className="rbox2">
                                        <p className="mt-24 text-lg text-white translate-x-8 metropolisR" id="mobile-desc8">
                                            description here
                                        </p>
                                    </div>
                                </div>
                                
                        {/* 2 Hidden */}
                                <div className="hidden col-span-1 col-start-2 row-start-1">
                                    <div className="lbox2">
                                        <p className="mt-24 text-lg text-right text-white translate-x-[-2rem] metropolisR" id="mobile-desc9">
                                            description here
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ParallaxLayer>



{/* Footer is set at the last Page */}
            <ParallaxLayer offset={4} speed={0}>
                <div className="plxlayer parallax" id="layered-wave"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={4} speed={0}>
                <Footer />
            </ParallaxLayer>
        </Parallax>

    );
}

export default ParallaxComp;