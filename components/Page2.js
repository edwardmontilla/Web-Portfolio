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
                <p className="inline-block ml-40 text-4xl font-bold bg-slate-100">This is the Back Content using grid</p>
                <div className="flex justify-center h-full">
                    <div className="grid text-white grid-rows-7">
                        
                        <div className="col-span-1 col-start-1">
                            <div className="lbox">
                                <img src="./images/badminton.jpg" alt="image1"/>1
                            </div>
                        </div>
                        <div className="col-span-1 col-start-2 row-start-2">
                            <div className="rbox">
                                <img src="./images/cat.jpg" alt="image2"/>2
                            </div>
                        </div>
                        <div className="col-span-1 col-start-1 row-start-3">
                            <div className="lbox">
                                <img src="./images/badminton.jpg" alt="image3"/>3
                            </div>
                        </div>
                        <div className="col-span-1 col-start-2 row-start-4">
                            <div className="rbox">
                                <img src="./images/BG-Full-Opacity.png" alt="image4"/>4
                            </div>
                        </div>
                        <div className="col-span-1 col-start-1 row-start-5">
                            <div className="lbox">
                                <img src="./images/BG-Full-Opacity.png" alt="image5"/>5
                            </div>
                        </div>
                    </div>
                </div>
                    

            </div>
            
        </div>
        
    );
}

export default Page2;