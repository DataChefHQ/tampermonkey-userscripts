// ==UserScript==
// @name         Region Alert
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Tamper the AWS console bar, making sure the user knows they messed up the region
// @author       Arman Rezaei @ DataChef
// @match        https://*.console.aws.amazon.com/console/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

window.addEventListener('load', function(){
    'use strict';

    // grab region element
    let items = document.getElementById('consoleNavHeader');

    // grab region according to URL
    let awsRegion = window.location.href.split('.')[0];

    // decide what message to show the user
    let message;

    if (awsRegion === "https://eu-west-1") {
        message = "All good!";
    } else {
        message = "Please make sure that you are in eu-west-1.";
    }

    // create a button to perform region check on-click
    let button = document.createElement("button");
    button.innerHTML = "Check Region";
    button.onclick = () => {alert(message)};
    items.insertBefore(button, items.childNodes[0]);
});