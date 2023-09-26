// ==UserScript==
// @name         Region Alert
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Tamper the AWS console bar, making sure the user knows they messed up the region
// @author       Arman Rezaei @ DataChef
// @match        https://*.console.aws.amazon.com/console/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

window.addEventListener('load', function(){
    'use strict';

    // determine where to place bar
    let navBar = document.getElementById('consoleNavHeader');

    // grab region from the URL
    let awsRegion = window.location.href.split('.')[0];

    // decide what message to show the user
    let message;
    let color;

    if (awsRegion === "https://eu-west-1") {
        message = "All good!";
        color = "#05a114"; // a slightly better green than the default "green"
    } else {
        message = "Please make sure that you are in eu-west-1. <a href='https://www.notion.so/datachef/THA-Accounts-Usage-Policies-a2f88a2110b94d94b904cd07a7d75917?pvs=4' target='_blank'>Click here for more info</a>.";
        color = "#b30909"; // a slightly better red than the default "red"
    }

    // create a bar to show the region status
    let colorBar = document.createElement("div");
    colorBar.style.backgroundColor = color;
    colorBar.style.height = "15px";
    colorBar.style.width = "100%";
    colorBar.style.position = "relative";

    // display message inside our bar
    let messageElement = document.createElement("div");
    messageElement.style.color = "white";
    messageElement.style.fontSize = "12px";
    messageElement.style.fontWeight = "bold";
    messageElement.style.position = "absolute";
    messageElement.style.top = "50%";
    messageElement.style.left = "50%";
    messageElement.style.transform = "translate(-50%, -50%)";
    messageElement.innerHTML = message;

    colorBar.appendChild(messageElement);
    navBar.insertBefore(colorBar, navBar.childNodes[0]);
});
