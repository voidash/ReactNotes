import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet.jsx";
import SearchParams from "./SearchParams.js";

const App = () => {
  // return new React.createElement("div", {}, [
  //   react.createelement("h1", {}, "adopt me! "),
  //   react.createelement(pet, {
  //     name: " kirk",
  //     breed: "german sheperd",
  //   }),
  //   react.createelement(pet, {
  //     name: "skunk",
  //     breed: "japanese speech",
  //   }),
  // ]);

  return (
    <div>
      <h1 id="something-important">This is PET finder API</h1>
      <SearchParams />
    </div>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
