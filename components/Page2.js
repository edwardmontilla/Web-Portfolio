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
            <div id="page-container">
        {/* ABOUT ME */}
            <h2 className="text-5xl text-white lnFont" id="about-me">Edward Montilla</h2>
            <div>
                <p className="text-xl text-white metropolisR" id="desc-me">
                A recent Software Development graduate with a background in 2D Digital Animation, 
                committed to leveraging expertise in web design and proficient software languages 
                to create dynamic and engaging online experiences.
                {/* <FaFish className="text-white translate-x-56 animate-fish"/> */}
                
                </p>
            </div>
            <div>
                {/* insert github and linkedin icons here if you want */}
            </div>
            
{/* BACK */}
        {/* 1st Row */}
                <div className="flex justify-center h-full">
                    <div className="grid text-white grid-rows-7">
                        <div className="col-span-1 col-start-1">
                            <div className="border-[1px] rounded-xl shadow-lg shadow-background/25 border-background lbox" id="rectangle">
                                
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
                        
        {/* 2nd Row */}
                        <div className="col-span-1 col-start-2 row-start-2 h-1/2" id="ui-box"> {/* box height adjusted to h-1/2 */}
                            <div className="border-[1px] rounded-xl shadow-lg shadow-background/20 border-background rbox" id="rectangle">
                                
                                <div className="middle-icon">
                                    
                                    <div className="icon-container" id="figma-icon">
                                        <span>Figma</span>
                                    </div>
                                    <div className="icon-container" id="ps-icon">
                                        <span>Photoshop</span>
                                    </div>
                                </div>

                            </div>
                        </div>

        {/* 3rd Row */}
                        <div className="col-span-1 col-start-1 row-start-3 h-4/5 translate-y-[-7rem]" id="edu-box">
                            <div className="border-[1px] rounded-xl shadow-lg shadow-background/20 border-background lbox" id="rectangle">
                                
                                <div className="cust-icon">
                                    <div className="icon-container" id="sait-logo">
                                        <span>SAIT</span>
                                    </div>
                                </div>
                                <div className="cust-icon2">
                                    <div className="icon-container" id="vfs-logo2">
                                        <span>VFS</span>
                                    </div>
                                </div>
                            </div>
                        </div>

    {/* PROJECTS */}
        {/* 4th Row */}
                        <div className="flex justify-center col-span-2 col-start-1 row-start-4 mt-[-8rem]">
                            <h2 className="z-40 text-4xl text-white lnFont" id="proj-heading">Projects</h2>
                        </div>

                        <div className="mt-[40px] col-span-1 col-start-1 row-start-4 h-[85%] w-full backdrop-blur-[6px]" id="proj-box">  
                            <div className="lbox rounded-xl bg-primary/50 absolute top-[5%] right-[10%] backdrop-blur-[6px]">back box</div>
                                <div className="lbox rounded-xl border-[1px] opacity-75 absolute top-[14%] right-[14%] backdrop-blur-[6px]" id="bgFull"></div>
                                    <div className="border-[1px] border-background rounded-xl shadow-lg shadow-background/25 lbox absolute top-[25%] right-[15%]" id="rectangle2">
                                        <div className="rounded-lg" id="mg2"></div>
                                    </div>
                                    <div className="border-[1px] border-background rounded-xl shadow-lg shadow-background/25 lbox absolute top-[25%] right-[15%] animate-fadeInOut" id="rectangle2">
                                        <div className="rounded-lg" id="mg1"></div>
                                    </div>
                        </div>

        {/* 4th Row */}
                        <div className="mt-[40px] col-span-1 col-start-2 row-start-4 h-[85%] w-full backdrop-blur-[6px]" id="proj-box">
                            <div className="rbox rounded-xl bg-primary/50 absolute top-[5%] left-[10%] backdrop-blur-[6px]">back box</div>
                                <div className="rbox rounded-xl border-[1px] opacity-75 absolute top-[14%] left-[14%] backdrop-blur-[6px]" id="ln3"></div>
                                    <div className="border-[1px] border-b-background rounded-xl shadow-lg shadow-background/25 rbox absolute top-[25%] left-[15%]" id="rectangle3">
                                        <div className="rounded-lg" id="ln2"></div>
                                    </div>
                                    <div className="border-[1px] border-b-background rounded-xl shadow-lg shadow-background/25 rbox absolute top-[25%] left-[15%] animate-fadeInOut animation-delay-2000" id="rectangle3">
                                        <div className="rounded-lg" id="ln1"></div>
                                    </div>
                        </div>

        {/* 5th Row */}
                        <div className="mt-[40px] col-span-1 col-start-1 row-start-5 h-[85%] w-full backdrop-blur-[6px]" id="proj-box">  
                            <div className="lbox rounded-xl bg-primary/50 absolute top-[5%] right-[10%] backdrop-blur-[6px]">back box</div>
                                <div className="lbox rounded-xl border-[1px] opacity-75 absolute top-[14%] right-[14%] backdrop-blur-[6px]" id="py3"></div>
                                    <div className="border-[1px] border-background rounded-xl shadow-lg shadow-background/25 lbox absolute top-[25%] right-[15%]" id="rectangle2">
                                        <div className="rounded-lg" id="py2"></div>
                                    </div>
                                    <div className="border-[1px] border-background rounded-xl shadow-lg shadow-background/25 lbox absolute top-[25%] right-[15%] animate-fadeInOut" id="rectangle2">
                                        <div className="rounded-lg" id="py1"></div>
                                    </div>
                        </div>
                        
        {/* 5th Row */}
                        <div className="mt-[40px] col-span-1 col-start-2 row-start-5 h-[85%] w-full backdrop-blur-[6px]" id="proj-box">
                            <div className="rbox rounded-xl bg-primary/50 absolute top-[5%] left-[10%] backdrop-blur-[6px]">back box</div>
                                <div className="rbox rounded-xl border-[1px] opacity-75 absolute top-[14%] left-[14%] backdrop-blur-[6px]" id="">add img here</div>
                                    <div className="border-[1px] border-b-background rounded-xl shadow-lg shadow-background/25 rbox absolute top-[25%] left-[15%]" id="rectangle3">
                                        <div className="rounded-lg" id="">second img</div>
                                    </div>
                                    <div className="border-[1px] border-b-background rounded-xl shadow-lg shadow-background/25 rbox absolute top-[25%] left-[15%] animate-fadeInOut animation-delay-2000" id="rectangle3">
                                        <div className="rounded-lg" id="">front img</div>
                                    </div>
                        </div>

        {/* 6th Row we don't touch */}
                        <div className="col-span-1 col-start-1 row-start-6">
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