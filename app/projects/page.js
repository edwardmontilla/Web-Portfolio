import React from "react";

// useEffect on scroll to scroll down to Project section
//

const Projects = () => {
    return (
        <>
        <div id="proj" className="p-4 m-4 border-2 rounded-lg border-primary">  {/* this is the container for the projects */}
            <div id="proj-img" className="">
                <img src="/images/mg-1.png" alt="miggy-sc" className="w-1/6 h-auto border rounded-lg border-primary"/>
                <div className="flex flex-col ml-4">
                    <h2 className="lnFont">Miggy&apos;s Munchies</h2>
                    <p className="metropolisR">A food ordering webapp where customers can order food via pickup or delivery. This was created to.....as a capstone project.....with team..</p>
                </div>
            </div>
        </div>
        <div id="proj" className="p-4 m-4 border-2 rounded-lg border-primary">  {/* this is the container for the projects */}
            <div id="proj-img" className="">
                <img src="/images/py1.png" alt="py-sc" className="w-1/6 h-auto border rounded-lg border-primary"/>
                <div className="flex flex-col ml-4">
                    <h2 className="lnFont">Python Business Profit Calculator</h2>
                    <p className="metropolisR">A Python script created to calculate the daily profits of a fictional online business.</p>
                </div>
            </div>
        </div>
        <div id="proj" className="p-4 m-4 border-2 rounded-lg border-primary">  {/* this is the container for the projects */}
            <div id="proj-img" className="">
                <img src="/images/ln-1.png" alt="ln-sc" className="w-1/6 h-auto border rounded-lg border-primary"/>
                <div className="flex flex-col ml-4">
                    <h2 className="lnFont">Fan-made Website</h2>
                    <p className="metropolisR">A fan-made website created for learning design and expressing creativity, while enthusiastically supporting the content.</p>
                </div>
            </div>
        </div>
        
        </>
    );
}

export default Projects;