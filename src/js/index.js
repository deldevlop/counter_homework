//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import Counter from "./component/counter.jsx";

//render your react application
let counter=0;
setInterval(function () {
    const seconds = Math.floor(counter/1);
    const minutes = Math.floor(counter/10);
    const hours = Math.floor(counter/100);
    console.log(seconds, minutes, hours);
    counter ++;
    ReactDOM.render(<Counter
        second={seconds}
        minutes={minutes}
        hours={hours}
       
        
    />
        , document.querySelector("#app"));
}, 1000);

