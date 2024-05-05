import React from "react";

// use this as reference to set the front content
// ie. box-content height (h-32)
// grid gaps (gap-x-# gap-y-#)
//

const Page2 = () => {
    return (
        <div id="page-block">
            <div id="page-container" className="">
                <p className="inline-block ml-40 text-4xl font-bold bg-slate-100">This is the Back Content using grid</p>
                <div className="flex justify-center w-full h-3/4">
                    <div className="grid w-9/12 grid-cols-2 text-white border-4 grid-rows-7 gap-y-80 border-rose-800">
                        
                        <div className="col-span-1 col-start-1">
                            <div className="box-content border-2 border-yellow-300">
                                <img src="./images/BG-Full-Opacity.png" alt="image" id="lbox"/>1
                            </div>
                        </div>
                        <div className="col-span-1 col-start-2 row-start-2">
                            <div className="box-content border-2 border-yellow-300">
                                <img src="./images/BG-Full-Opacity.png" alt="image" id="rbox"/>2
                            </div>
                        </div>
                        <div className="col-span-1 col-start-1 row-start-3">
                            <div className="">
                                <img src="./images/baked_macaroni_slice.png" alt="image" id="lbox" />3
                            </div>
                        </div>
                        <div className="col-span-1 col-start-2 row-start-4">
                            <div className="">
                                <img src="./images/baked_macaroni_slice.png" alt="image" id="rbox" />4
                            </div>
                        </div>
                        <div className="col-span-1 col-start-1 row-start-5">
                            <div className="">
                                <img src="./images/baked_macaroni_slice.png" alt="image" id="lbox" />5
                            </div>
                        </div>
                    </div>
                </div>
                    

            </div>
            
        </div>
        
    );
}

export default Page2;