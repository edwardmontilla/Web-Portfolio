import React from "react";

// useEffect on scroll to scroll down to Project section
//

const Projects = () => {
    return (
        <>
        <div id="proj" className="p-4 m-4 transition ease-in-out bg-white border rounded-lg shadow-md group/proj border-primary shadow-secondary hover:bg-primary/60">  {/* this is the container for the projects */}
            <div id="proj-img">
                <img src="/images/mg-1.png" alt="miggy-sc" className="w-1/6 h-auto border rounded-lg border-secondary"/>
                <div className="flex flex-col ml-4 grow text-accent">
                    <h2 className="lnFont">Miggy&apos;s Munchies</h2>
                    <p className="metropolisR">A capstone project built to simplify food ordering operations with a dedicated web app, automating ordering and payment for enhanced convenience.</p>
                    <div className="flex flex-row mt-4">
                        <img src="/icons/html5-icon.svg" alt="html5" className="w-8 h-8 m-1"></img>
                        <img src="/icons/css-icon.svg" alt="css" className="w-8 h-8 m-1"></img>
                        <img src="/icons/javascript-icon.svg" alt="javascript" className="w-8 h-8 m-1"></img>
                        <img src="/icons/react-icon.svg" alt="react" className="w-8 h-8 m-1"></img>
                        <img src="/icons/mongodb-icon.svg" alt="mongoDB" className="w-8 h-8 m-1"></img>
                    </div>
                </div>

                <div className="group-hover/proj:animate-slideProjRight">
                    <a href="https://www.google.com" className="relative mt-24 font-semibold metropolisR gitlink invisible group-hover/proj:visible hover:translate-x-[-7px] transition ease-in-out" target="_blank" rel="noopener noreferrer">see more &#10140;</a> {/* this is the link to the project's GitHub repository */}
                </div>
            </div>
        </div>
        

        <div id="proj" className="p-4 m-4 transition ease-in-out bg-white border rounded-lg shadow-md group/proj border-primary shadow-secondary hover:bg-primary/60">  {/* this is the container for the projects */}
            <div id="proj-img">
                <img src="/images/py1.png" alt="py-sc" className="w-1/6 h-auto border rounded-lg border-secondary"/>
                <div className="flex flex-col ml-4 grow text-accent">
                    <h2 className="lnFont">Python Business Profit Calculator</h2>
                    <p className="metropolisR">A Python script created to calculate the daily profits of a fictional online retail business&apos; daily profits.</p>
                    <div className="flex flex-row mt-4">
                        <img src="/icons/python-icon.svg" alt="python" className="w-8 h-8 m-1"></img>
                    </div>
                </div>
                <div className="group-hover/proj:animate-slideProjRight">
                    <a href="https://www.google.com" className="relative mt-24 font-semibold metropolisR gitlink invisible group-hover/proj:visible hover:translate-x-[-7px] transition ease-in-out" target="_blank" rel="noopener noreferrer">see more &#10140;</a> {/* this is the link to the project's GitHub repository */}
                </div>
            </div>
        </div>
        <div id="proj" className="p-4 m-4 transition ease-in-out bg-white border rounded-lg shadow-md group/proj hover:bg-primary/60 border-primary shadow-secondary">  {/* this is the container for the projects */}
            <div id="proj-img">
                <img src="/images/ln-1.png" alt="ln-sc" className="w-1/6 h-auto border rounded-lg border-secondary"/>
                <div className="flex flex-col ml-4 grow text-accent">
                    <h2 className="lnFont">Fan-made Website</h2>
                    <p className="metropolisR">A fan-made website, based on the video game series Little Nightmares, created for learning design and expressing creativity, while enthusiastically supporting the content.</p>
                    <div className="flex flex-row mt-4">
                        <img src="/icons/html5-icon.svg" alt="html5" className="w-8 h-8 m-1"></img>
                        <img src="/icons/css-icon.svg" alt="css" className="w-8 h-8 m-1"></img>
                    </div>
                </div>
                <div className="group-hover/proj:animate-slideProjRight">
                    <a href="https://www.google.com" className="relative mt-24 font-semibold metropolisR gitlink invisible group-hover/proj:visible hover:translate-x-[-7px] transition ease-in-out" target="_blank" rel="noopener noreferrer">see more &#10140;</a> {/* this is the link to the project's GitHub repository */}
                </div>
            </div>
        </div>
        <div id="proj" className="p-4 m-4 transition ease-in-out bg-white border rounded-lg shadow-md hover:bg-primary/60 group/proj border-primary shadow-secondary">  {/* this is the container for the projects */}
            <div id="proj-img">
                <img src="/images/BG-Full-Opacity.png" alt="bg" className="w-1/6 h-auto border rounded-lg border-secondary"/>
                <div className="flex flex-col ml-4 grow text-accent">
                    <h2 className="lnFont">Project Title</h2>
                    <p className="metropolisR">Details</p>
                    <div className="flex flex-row mt-4">
                        <img src="/icons/python-icon.svg" alt="python" className="w-8 h-8 m-1"></img>
                    </div>
                </div>
                <div className="group-hover/proj:animate-slideProjRight">
                    <a href="https://www.google.com" className="relative mt-24 font-semibold metropolisR gitlink invisible group-hover/proj:visible hover:translate-x-[-7px] transition ease-in-out" target="_blank" rel="noopener noreferrer">see more &#10140;</a> {/* this is the link to the project's GitHub repository */}
                </div>
            </div>
        </div>
        
        </>
    );
}

export default Projects;

// ADD hover:visible when projects are hovered over!!