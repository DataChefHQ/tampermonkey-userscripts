// ==UserScript==
// @name         Console Bar
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Tamper the AWS console bar, making sure the user knows they messed up the region
// @author       Arman Rezaei @ DataChef
// @match        https://*.console.aws.amazon.com/console/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// @require      https://code.jquery.com/jquery-3.7.1.min.js
// ==/UserScript==

(function() {
    'use strict';

    // original solution (didn't work)
    // document.title.split(" | ")[1] != "eu-west-1"
    if (window.location.href.split('.')[0] != "https://eu-west-1") {
        alert("You may want to check your region ( ﾟдﾟ)つ\nmake sure it is set to eu-west-1!")
    }
    else {
        alert("LETS GOOO! (＃°Д°)")
    }
})();