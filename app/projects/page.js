import React from "react";

// useEffect on scroll to scroll down to Project section
//

const Projects = () => {
    return (
        <>
        <div id="proj" className="p-4 m-4 bg-white border rounded-lg shadow-md border-primary shadow-secondary transition ease-in-out hover:scale-[1.01]">  {/* this is the container for the projects */}
            <div id="proj-img" className="">
                <img src="/images/mg-1.png" alt="miggy-sc" className="w-1/6 h-auto border rounded-lg border-primary"/>
                <div className="flex flex-col ml-4 grow">
                    <h2 className="lnFont">Miggy&apos;s Munchies</h2>
                    <p className="metropolisR">A capstone project built to simplify food ordering operations with a dedicated web app, automating ordering and payment for enhanced convenience.</p>
                </div>
                <div>
                    <a href="https://www.google.com" className="relative mt-24 m-8font-semibold metropolisR gitlink hover:translate-x-[-7px] transition ease-in-out" target="_blank" rel="noopener noreferrer">see more &#10140;</a> {/* this is the link to the project's GitHub repository */}
                </div>
            </div>
        </div>
        <div id="proj" className="p-4 m-4 bg-white border rounded-lg shadow-md border-primary shadow-secondary transition ease-in-out hover:scale-[1.01]">  {/* this is the container for the projects */}
            <div id="proj-img" className="">
                <img src="/images/py1.png" alt="py-sc" className="w-1/6 h-auto border rounded-lg border-primary"/>
                <div className="flex flex-col ml-4 grow">
                    <h2 className="lnFont">Python Business Profit Calculator</h2>
                    <p className="metropolisR">A Python script created to calculate the daily profits of a fictional online retail business&apos; daily profits.</p>
                </div>
                <div>
                    <a href="https://www.google.com" className="relative mt-24 m-8font-semibold metropolisR gitlink hover:translate-x-[-7px] transition ease-in-out" target="_blank" rel="noopener noreferrer">see more &#10140;</a> {/* this is the link to the project's GitHub repository */}
                </div>
            </div>
        </div>
        <div id="proj" className="p-4 m-4 bg-white border rounded-lg shadow-md border-primary shadow-secondary transition ease-in-out hover:scale-[1.01]">  {/* this is the container for the projects */}
            <div id="proj-img" className="">
                <img src="/images/ln-1.png" alt="ln-sc" className="w-1/6 h-auto border rounded-lg border-primary"/>
                <div className="flex flex-col ml-4 grow">
                    <h2 className="lnFont">Fan-made Website</h2>
                    <p className="metropolisR">A fan-made website, based on the video game series Little Nightmares, created for learning design and expressing creativity, while enthusiastically supporting the content.</p>
                </div>
                <div>
                    <a href="https://www.google.com" className="relative mt-24 m-8font-semibold metropolisR gitlink hover:translate-x-[-7px] transition ease-in-out" target="_blank" rel="noopener noreferrer">see more &#10140;</a> {/* this is the link to the project's GitHub repository */}
                </div>
            </div>
        </div>
        <div id="proj" className="p-4 m-4 bg-white border rounded-lg shadow-md border-primary shadow-secondary transition ease-in-out hover:scale-[1.01]">  {/* this is the container for the projects */}
            <div id="proj-img" className="">
                <img src="/images/BG-Full-Opacity.png" alt="bg" className="w-1/6 h-auto border rounded-lg border-primary"/>
                <div className="flex flex-col ml-4 grow">
                    <h2 className="lnFont">Project Title</h2>
                    <p className="metropolisR">Details</p>
                </div>
                <div>
                    <a href="https://www.google.com" className="relative mt-24 m-8font-semibold metropolisR gitlink hover:translate-x-[-7px] transition ease-in-out" target="_blank" rel="noopener noreferrer">see more &#10140;</a> {/* this is the link to the project's GitHub repository */}
                </div>
            </div>
        </div>
        
        </>
    );
}

export default Projects;