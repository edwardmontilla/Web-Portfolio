import React from "react";
import { FaFish } from "react-icons/fa6";

// use this as reference to set the front content
// ie. box-content height (h-32)
// grid gaps (gap-x-# gap-y-#)
// see css for more grid prop
// 

const Page2 = () => {
    return (
        <div id="page-block">
            <div id="page-container" className="">
        {/* ABOUT ME */}
            <h2 className="text-5xl text-white lnFont" id="about-me">Edward Montilla</h2>
            <div>
                <p className="text-xl text-white metropolisR" id="desc-me">
                A recent Software Development graduate with a background in 2D Digital Animation, 
                committed to leveraging expertise in web design and proficient software languages 
                to create dynamic and engaging online experiences.
                <FaFish className="text-white"/>
                </p>
            </div>
            <div>
                {/* insert github and linkedin icons here */}
            </div>
        {/* BACK */}
                <div className="flex justify-center h-full">
                    <div className="grid text-white grid-rows-7">
                        <div className="col-span-1 col-start-1">
                            <div className="border-2 rounded-lg shadow-lg shadow-background/15 border-background lbox" id="rectangle">
                                
                                <div className="top-icon">

                                    <div className="icon-container" id="html5-icon">
                                        <span>HTML5</span>
                                    </div>
                                    <div className="icon-container" id="css-icon">
                                        <span>CSS3</span>
                                    </div>
                                    <div className="icon-container" id="javascript-icon">
                                        <span>JavaScript</span>
                                    </div>
                                    <div className="icon-container" id="react-icon">
                                        <span>React</span>
                                    </div>
                                </div>

                                <div className="bottom-icon">
                                    
                                    <div className="icon-container" id="tailwind-icon">
                                        <span>Tailwind</span>
                                    </div>
                                    <div className="icon-container" id="nodejs-icon">
                                        <span>Nodejs</span>
                                    </div>
                                    <div className="icon-container" id="npm-icon">
                                        <span>NPM</span>
                                    </div>
                                    <div className="icon-container" id="python-icon">
                                        <span>Python</span>
                                    </div>
                                    <div className="icon-container" id="database-icon">
                                        <span>Database</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                        
                        <div className="col-span-1 col-start-2 row-start-2">
                            <div className="border-2 rounded-lg shadow-lg shadow-background/15 border-background rbox" id="rectangle">
                            </div>
                        </div>
                        <div className="col-span-1 col-start-1 row-start-3">
                            <div className="border-2 rounded-lg shadow-lg shadow-background/15 border-background lbox" id="rectangle">
                            </div>
                        </div>
                        <div className="col-span-1 col-start-2 row-start-4">
                            <div className="border-2 rounded-lg shadow-lg shadow-background/15 border-background rbox" id="rectangle">
                            </div>
                        
                        </div>
                        <div className="col-span-1 col-start-1 row-start-5">
                            <div className="invisible lbox">
                                <img src="./images/cat.jpg" alt="image5" className="rounded-lg shadow-lg shadow-slate-900/50" />
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
        
    );
}

export default Page2;