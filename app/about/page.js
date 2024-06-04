import React from "react";
import Footer from "@/components/Footer";
import Projects from "../projects/page";    /* this is how to import a component from another page within the same directory */
import { GoFileCode } from "react-icons/go";
import { PiPersonSimpleHike } from "react-icons/pi";
import { TfiGame } from "react-icons/tfi";
import { IoColorPaletteOutline } from "react-icons/io5";
import { LiaFishSolid } from "react-icons/lia";
import { HiMail, HiOutlineMail } from "react-icons/hi";
import { ImGithub } from "react-icons/im";
import { AiOutlineLinkedin } from "react-icons/ai";



// add shadow
//

const About = () => {
    return (
        <>
            <div>
                <div id="container" className="translate-y-12">
                    <div id="bio-container" className="text-gray-800 border shadow-lg shadow-secondary rounded-2xl animate-slideFadeRight border-primary">
                        <h1 className="mt-6 mb-6 text-2xl font-bold lnFont">About Me</h1>
                        <h2 className="text-lg font-semibold lnFont">So what made me pursue a career in software development?</h2>
                            <p id="bio" className="metropolisR">
                            I hadn&apos;t thought that I would go into software development but I was always interested in technology. 
                            What inspired me to pursue a career in software development was the ability to create something from scratch and see it come to life. 
                            I love the idea of creating something that can be used by others and make their lives easier. 
                            While the problem-solving aspect of software development may not seem as fun at first glance, the gratification and constant learning that 
                            come with it are what fuel my passion for it. I am always looking for new challenges and ways to improve my skills.
                            </p>
                        <h2 className="text-lg font-semibold lnFont">Hobbies and Interests</h2>
                            <p id="bio" className="metropolisR">
                            In addition to my technical and artistic skills, I enjoy outdoor activities and gaming. Being physically active keeps me energized, while gaming fuels my creativity. 
                            The intricate designs of game environments and captivating animations continually inspire my artistic endeavors.
                            </p>
                    </div>
                    
                    <div id="img-container" className="">
                            <img src="/images/jp1.jpg" alt="my-photo" className="border-[3px] rounded-full shadow-md border-accent/85 shadow-secondary animate-slideFadeLeft" /> {/* My Photo */}

                            <div id="hobby-icon" className="gap-4 border shadow-md text-accent border-accent bg-background rounded-xl animate-slideFadeLeft shadow-secondary"> {/* My stats icon */}
                                <GoFileCode className="w-8 h-8 m animate-bounce" />
                                <TfiGame className="w-8 h-8 m animate-bounce animation-delay-300" />
                                <PiPersonSimpleHike className="w-8 h-8 m animate-bounce animation-delay-500"/>
                                <img src="/icons/badminton.svg" alt="badminton" className="w-8 h-8 m animate-bounce animation-delay-700" />
                                <IoColorPaletteOutline className="w-8 h-8 m animate-bounce animation-delay-900" />
                                <LiaFishSolid className="w-8 h-8 m animate-bounce animation-delay-1100" />
                            </div>
                    </div>


                </div>

                
                <div id="container" className="bg-background ">
                    <div id="proj-container" className="text-gray-800 animate-slideFadeUp">
                        <h1 className="mb-6 text-2xl font-extrabold lnFont">Project and Other Works</h1>
                        <div className="">
                            <Projects />
                        </div>
                    </div>
                </div>

                <div id="wave-container"> {/* this is the wave BG */}
                    <div id="contact-container" className="animate-none">
                        <div id="contact" className="text-gray-800 animate-slideFadeUp">
                            <h1 className="mb-6 text-2xl font-extrabold lnFont">Contact Me</h1>
                            <div className="flex flex-row">
                                <p className="text-lg metropolisR">If you would like to get in touch with me, feel free to send me an email&nbsp;</p>
                                < HiMail size={25} className="fill-primary" id="mail-icon"/>.
                            </div>
                            <div className="flex flex-col gap-4 mt-4">
                                <div className="flex flex-row items-center gap-2">
                                    <a href="https://github.com/edwardmontilla" target="_blank" rel="noopener noreferrer"><ImGithub size={35} className="duration-100 ease-in-out fill-accent hover:fill-secondary hover:scale-110"/></a>
                                    <a href="https://www.linkedin.com/in/edward-montilla-ab5b51192/" target="_blank" rel="noopener noreferrer"><AiOutlineLinkedin size={44} className="duration-100 ease-in-out fill-accent hover:fill-secondary hover:scale-110"/></a>
                                    <a href="mailto:edanmontilla@gmail.com"><HiOutlineMail size={51} rel="noopener noreferrer" className="duration-100 ease-in-out fill-secondary hover:fill-gray-200 hover:scale-110"/></a>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative inset-x-0 bottom-0 z-30"> {/* changed from fixed to relative */}
                    <Footer />
                </div>

            </div>
        </>
    );
}

export default About;