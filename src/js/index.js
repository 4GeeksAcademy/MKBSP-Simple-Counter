//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let seconds = 0
let minutes = 0
let hours = 0
let days = 0

var timerSeconds = setInterval(() => {
    if (seconds < 59) {
        seconds += 1
    } else {
        seconds = 0
        if (minutes < 59) {
            minutes += 1
        } else {
            minutes = 0
            if (hours < 24) {
                hours += 1
            } else {
                hours = 0
                if (days < 2) {
                    days += 1
                } else {
                    days = 0
                }
            }
        }
    }

    console.log(seconds, minutes, hours)
    ReactDOM.render(<Home seconds={seconds} minutes={minutes} hours={hours} days={days} />, document.querySelector("#app"));
}, 1000)



/*
Failed attempt, firstly, did it inside out, secondly I should use else if statements, and have the console log outside of the intervals
var timerDays = setInterval(() => {
    var timerHours = setInterval(() => {
        var timerMinutes = setInterval(() => {
            var timerSeconds = setInterval(() => {
                if (seconds < 60)
                console.log(seconds)
                seconds += 1
            }, 100);
            if (minutes < 60)
            console.log(minutes)
            minutes += 1
        }, 60 * 1000);
        if (hours < 24)
        console.log(hours)
        hours += 1
    }, 60 * 60 * 1000);
    if (days < 24)
    console.log(days)
    days += 1
}, 24 * 60 * 60 * 1000);
*/


/*
setInterval(() => {
    ReactDOM.render(<Home />, document.querySelector("#app"));
}, 1000)
*/

//render your react application

