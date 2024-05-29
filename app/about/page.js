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
                    <div id="bio-container" className="text-gray-800 shadow-md shadow-secondary bg-background rounded-2xl animate-slideFadeRight">
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
                            In addition to my technical and artistic skills, I also enjoy spending time outdoors. I play badminton on a weekly basis and love going on hikes and camping to explore new places. 
                            Additionally, I thoroughly enjoy gaming as a hobby and find it to be a huge source of inspiration for my creativity. Whether it&apos;s the intricate designs of game environments or 
                            the captivating characters in animations, I&apos;m constantly drawn to the artistic aspects of gaming and animation.
                            I&apos;m also planning to get back into aquascaping so I can create a small underwater landscape to soothe my mind.
                            </p>
                    </div>
                    
                    <div id="img-container" className="">
                            <img src="/images/jp1.jpg" alt="cat" className="shadow-md rounded-2xl shadow-secondary animate-slideFadeLeft" /> {/* My Photo */}

                            <div id="hobby-icon" className="gap-4 text-gray-700 shadow-md bg-background rounded-xl animate-slideFadeLeft shadow-secondary"> {/* My stats icon */}
                                <GoFileCode className="w-8 h-8 m animate-bounce" />
                                <TfiGame className="w-8 h-8 m animate-bounce animation-delay-300" />
                                <PiPersonSimpleHike className="w-8 h-8 m animate-bounce animation-delay-500"/>
                                <img src="/icons/badminton.svg" alt="badminton" className="w-8 h-8 m animate-bounce animation-delay-700" />
                                <IoColorPaletteOutline className="w-8 h-8 m animate-bounce animation-delay-900" />
                                <LiaFishSolid className="w-8 h-8 m animate-bounce animation-delay-1100" />
                            </div>
                    </div>


                </div>

                
                <div id="container" className="bg-slate-100 ">
                    <div id="proj-container" className="text-gray-800 animate-slideFadeRight">
                        <h1 className="mb-6 text-2xl font-extrabold lnFont">Projects</h1>
                        <div className="">
                            <Projects />
                        </div>
                    </div>
                    {/* <div id="side-container" className="">
                        <h2 className="mt-6 mb-6 text-lg font-extrabold lnFont">Contact Me</h2>
                
                    </div> */}
                </div>

                <div id="contact-container" className="border border-slate-500">
                    <div id="contact" className="text-gray-800 animate-slideFadeDown">
                        <h1 className="mb-6 text-2xl font-extrabold lnFont">Contact Me</h1>
                        <div className="flex flex-row">
                            <p className="text-lg metropolisR">If you would like to get in touch with me, feel free to send me an email&nbsp;</p>
                            < HiMail size={22} className="fill-primary"/>.
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-row items-center gap-2">
                                <a href="https://github.com/edwardmontilla"><ImGithub size={35} className="fill-accent"/></a>
                                <a href="https://www.linkedin.com/in/edward-montilla-ab5b51192/" target="_blank" rel="noopener noreferrer"><AiOutlineLinkedin size={44} className="fill-accent"/></a>
                                <a href="mailto:edanmontilla@gmail.com"><HiOutlineMail size={51} rel="noopener noreferrer" className="fill-secondary"/></a>
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