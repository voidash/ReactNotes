import React from "react";

// Your code is going to go here
function Pet({ name, breed }) {
    // return React.createElement("div", {}, [
    //     React.createElement("h1", {}, name),
    //     React.createElement("h2", {}, breed),
    // ]);


    return (
        <div>
        <h1>{name}</h1>
        <h2>{breed}</h2>
        </div>

    );
}

export default Pet;
