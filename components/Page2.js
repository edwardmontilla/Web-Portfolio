import React from "react";

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
             <p className="text-xl text-white metropolisR">Software Developer graduate aspiring</p>

        {/* BACK */}
                <div className="flex justify-center h-full">
                    <div className="grid text-white grid-rows-7">
                        <div className="col-span-1 col-start-1">
                            <div className="border-2 rounded-lg shadow-lg shadow-background/15 border-background lbox" id="rectangle">
                            </div>
                        </div>
                        <div className="col-span-1 col-start-2 row-start-2">
                            <div className="border-2 rounded-lg shadow-lg shadow-background/15 border-background rbox" id="rectangle">
                            </div>
                        </div>
                        <div className="col-span-1 col-start-1 row-start-3">
                            <div className="border-2 rounded-lg shadow-lg shadow-background/15 border-background lbox" id="rectangle">
                                {/* <img src="./images/cat.jpg" alt="image3" className="rounded-lg shadow-lg shadow-slate-900/50" /> */}
                            </div>
                        </div>
                        <div className="col-span-1 col-start-2 row-start-4">
                            <div className="rbox">
                                <img src="./images/cat.jpg" alt="image4" className="rounded-lg shadow-lg shadow-slate-900/50" />
                            </div>
                        </div>
                        {/* <div className="col-span-1 col-start-1 row-start-5">
                            <div className="lbox">
                                <img src="./images/badminton.jpg" alt="image5" className="rounded-lg shadow-lg shadow-slate-900/50" />
                            </div>
                        </div> */}
                    </div>
                </div>
                
            </div>
            
        </div>
        
    );
}

export default Page2;