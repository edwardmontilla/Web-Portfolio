import React from "react";
import Footer from "@/components/Footer";

// add shadow
//

const About = () => {
    return (
        <>
            <div id="container" className="">
                <div id="bio-container" className="text-gray-800 bg-background rounded-2xl">
                    <h1 className="mt-6 mb-6 text-2xl font-bold lnFont">About Me</h1>
                    <h2 className="text-lg font-semibold lnFont">So what made me pursue a career in software development?</h2>
                        <p id="bio" className="metropolisR">
                        I hadn&apos;t thought that I would go into software development but I was always interested in technology. 
                        What inspired me to pursue a career in software development was the ability to create something from scratch and see it come to life. 
                        I love the idea of creating something that can be used by others and make their lives easier. 
                        While the problem-solving aspect of software development may not seem as fun at first glance, the gratification and constant learning that 
                        come with it are what fuel my passion for it. I am always looking for new challenges and ways to improve my skills.
                        </p>
                        <p id="bio" className="metropolisR">
                        In addition to my technical and artistic skills, I also enjoy spending time outdoors. I play badminton on a weekly basis and love going on hikes to explore new places. 
                        Additionally, I&apos;m an avid gamer and a huge fan of illustrations from both video games and animation. 
                        I&apos;m also planning to get back into aquascaping, creating a small underwater landscape to soothe my mind.
                        </p>
                </div>
                <div id="img-container" className="">
                        <img src="/images/cat.jpg" alt="cat" className="rounded-2xl"></img>

                        <div id="hobby-icon" className="border-2 bg-background rounded-xl">hobby icons will go here</div>
                </div>


            </div>

            
            <div id="container" className="">
                <div id="proj-container" className="">
                    <h1 className="mt-6 mb-6 text-2xl font-extrabold lnFont">Projects</h1>
                    <p>Detailed projects will go here along with github link</p>
                    
                </div>
            </div>








        <div className="relative">
            <Footer />
        </div>
        
        </>
    );
}

export default About;