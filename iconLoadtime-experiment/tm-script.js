// ==UserScript==
// @name         iconLoadtime
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        file:///C:/Users/jakob/OneDrive/Documents/GitHub/Exjobb/iconLoadtime-experiment/skeuomorphism-iconLoadtime.html
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js
// @icon         https://www.google.com/s2/favicons?domain=undefined.
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var measurement = new Date();
    var pageLoad = 20;
    var str = localStorage.getItem("theData");
    var cnt = parseInt(localStorage.getItem("counter"));
    if(cnt >= pageLoad){
        //getData();
        localStorage.clear();
    }
    else{
        if(isNaN(cnt)) cnt=0;
        if (cnt == 0) {
            str="data:text/csv;charset=utf-8";
        }
        else{
            var old = new Date();
            old = old.setTime(localStorage.getItem("Oldval"));
            var delta = measurement-old;
            // Increase counter and save data to localstorage
            str += " , " + delta;
            console.log(delta);
        }
        console.log(cnt);
        cnt ++;
        localStorage.setItem("theData", str);
        localStorage.setItem("counter", cnt);
        var measurement2 = new Date();
        measurement2 = measurement2.getTime();
        localStorage.setItem("Oldval",measurement2);
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