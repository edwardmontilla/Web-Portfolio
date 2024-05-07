import React from "react";

// use this as reference to set the front content
// ie. box-content height (h-32)
// grid gaps (gap-x-# gap-y-#)
// see css for more grid prop
// 

const Page3 = () => {
    return (
        <div id="page-block2">
            <div id="page-container2" className="">
                <p className="inline-block text-4xl font-bold ml-100 bg-slate-100">Front Content Next</p>

        {/* FRONT */}
                <div className="flex justify-center h-full">
                    <div className="grid text-white border-2 border-yellow-200 grid-rows-7">
        {/* 1st row */}
                        <div className="col-span-1 col-start-2">
                            <div className="lbox2">
                                <img src="./images/cat.jpg" alt="image1" className="rounded-lg shadow-lg shadow-slate-900/50" />
                            </div>
                        </div>
        {/* 2nd row */}
                        <div className="col-span-1 col-start-1 row-start-2">
                            <div className="rbox2">
                                <img src="./images/cat.jpg" alt="image2" className="rounded-lg shadow-lg shadow-slate-900/50" />
                            </div>
                        </div>
        {/* 3rd row */}
                        <div className="col-span-1 col-start-2 row-start-3">
                            <div className="lbox2">
                                <img src="./images/cat.jpg" alt="image3" className="rounded-lg shadow-lg shadow-slate-900/50" />
                            </div>
                        </div>
        {/* 4th row */}
                        <div className="col-span-1 col-start-1 row-start-4">
                            <div className="rbox2">
                                <img src="./images/cat.jpg" alt="image4" className="rounded-lg shadow-lg shadow-slate-900/50" />
                            </div>
                        </div>
        {/* 5th row */}
                        <div className="col-span-1 col-start-2 row-start-5">
                            <div className="lbox2">
                                <img src="./images/cat.jpg" alt="image5" className="rounded-lg shadow-lg shadow-slate-900/50" />
                            </div>
                        </div>

                    </div>
                </div>
                    

            </div>
            
        </div>
        
    );
}

export default Page3;