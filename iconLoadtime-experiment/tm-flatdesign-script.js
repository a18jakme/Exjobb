// ==UserScript==
// @name         Flat design icon loadtime script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Download copy paste this code in Tampermonkey, dont forget to change the match url. 
// @author       Jakob Mellqvist
// @match        file:///C:/Users/jakob/OneDrive/Documents/GitHub/Exjobb/iconLoadtime-experiment/flatdesign-iconLoadtime.html
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js
// @icon         https://www.google.com/s2/favicons?domain=undefined.
// @grant        none
// ==/UserScript==

//Check if whole page is loaded
jQuery(window).load(function () {
    var pageLoad = 1001; //Number of page reload
    measureTime();
    function measureTime(){
        var measurement = new Date();
        //Get items from localstorage
        var str = localStorage.getItem("theData");
        var cnt = parseInt(localStorage.getItem("counter"));
        if(cnt >= pageLoad){
            getData();
            localStorage.clear();
        }
        else{
            if(isNaN(cnt)) cnt=0;
            if (cnt == 0) {
                str="data:text/csv;charset=utf-8";
            }
            else{
                //Set timer
                var old = new Date();
                old = old.setTime(localStorage.getItem("Oldval"));
                var delta = measurement-old;
                // Increase counter and save data to localstorage
                str += " , " + delta;
                console.log(delta);
            }
            cnt ++;
            //Set items in localstorage
            localStorage.setItem("theData", str);
            localStorage.setItem("counter", cnt);
            var measurement2 = new Date();
            measurement2 = measurement2.getTime();
            localStorage.setItem("Oldval",measurement2);
            location.reload();
        }
    }
});
function getData() {
    var str = localStorage.getItem("theData");
    var anchor = document.createElement("a");
    anchor.setAttribute("href", encodeURI(str));
    anchor.setAttribute("download", "iconLoad_data.csv");
    document.body.appendChild(anchor);
    anchor.click();
}