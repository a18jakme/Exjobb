// ==UserScript==
// @name         iconLoadtime
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  script to download the page load time
// @author       You
// @match        file:///C:/Users/jakob/OneDrive/Documents/GitHub/Exjobb/iconLoadtime-experiment/index.html
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js
// @icon         https://www.google.com/s2/favicons?domain=undefined.
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var pageLoad = 5;
    var str = localStorage.getItem("theData");
    var cnt = parseInt(localStorage.getItem("counter"));
    // calculates the time it takes for the web page to load
    var delta = performance.timing.domComplete - performance.timing.connectStart;

    if(isNaN(cnt)) cnt=0;
    if (cnt == 0) {
        str="data:text/csv;charset=utf-8";
    }
    if(cnt == pageLoad){
        getData();
        localStorage.clear();
    }
    else{
        // Increase counter and save data to localstorage
        str += " , " + delta;
        cnt ++;
        localStorage.setItem("theData", str);
        localStorage.setItem("counter", cnt);
        location.reload();
    }
    function getData() {
        var str = localStorage.getItem("theData");
        var anchor = document.createElement("a");
        anchor.setAttribute("href", encodeURI(str));
        anchor.setAttribute("download", "iconLoad_data.csv");
        document.body.appendChild(anchor);
        anchor.click();
    }
})();