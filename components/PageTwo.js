import React from "react";

// The idea is to pass footer as a prop to PageTwo
// then we can add PageTwo comp inside ParallaxComp at the bottom
// so Footer will show when scrolled
//

const PageTwo = ({Footer}) => {
    return (
        <div>
            <h1>Page Two</h1>
            {Footer}
        </div>
    );
}
export default PageTwo;