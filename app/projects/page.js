import React from "react";

// useEffect on scroll to scroll down to Project section
//

const Projects = () => {
    return (
        <>
        <div id="proj" className="">  {/* this is the container for the projects */}
            <div id="proj-img" className="">
                <img src="/images/mg-1.png" alt="miggy-logo" className="w-1/6 h-auto border rounded-xl border-primary"/>
                <h2 className="lnFont">Miggy&apos;s Munchies</h2>
                <p className="metropolisR">Miggy&apos;s Munchies is a food ordering webapp where customers can order food via pickup or delivery. This was created to.....as a capstone project.....with team..</p>
            </div>

        </div>
        </>
    );
}

export default Projects;