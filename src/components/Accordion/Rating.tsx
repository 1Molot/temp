import React from 'react';

function Rating() {
    console.log("Rating rendering")
    return (
        <div>
            <>star</>
            <>star</>
            <>star</>
            <>star</>
            <>star</>
        </div>
    );
}

function Star() {
    console.log("Star rendering")
    return
    <span><b>star</b> </span>
}

export default Rating;