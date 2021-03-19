var iconArray = 
["<img onclick='messageFunction(this.id)' id=Hamburgericon class=iconimage src=Skeumorph-icons/hamburger-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Ballicon class=iconimage src=Skeumorph-icons/ball-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Donuticon class=iconimage src=Skeumorph-icons/donut-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Coffeeicon class=iconimage src=Skeumorph-icons/coffee-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Bookicon class=iconimage src=Skeumorph-icons/book-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Glassesicon class=iconimage src=Skeumorph-icons/glasses-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Speakericon class=iconimage src=Skeumorph-icons/speaker-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Cameraicon class=iconimage src=Skeumorph-icons/camera-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Toolicon class=iconimage src=Skeumorph-icons/tool-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Jewelryicon class=iconimage src=Skeumorph-icons/jewelry-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Pensilicon class=iconimage src=Skeumorph-icons/pensil-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Travelicon class=iconimage src=Skeumorph-icons/travel-icon/57.png>"];
var textQuote = ["Hamburgericon", "Ballicon", "Donuticon", "Coffeeicon", "Bookicon", "Glassesicon", "Speakericon", "Cameraicon", "Toolicon", "Jewelryicon", "Pensilicon","Travelicon"];
var rand;

function onloadFunction(){
    randomQuote();
    randomIcon();
}
function randomQuote(){
    rand = Math.floor(Math.random() * textQuote.length);
    document.getElementById('textinstruction').innerHTML = textQuote[rand];
}
function randomIcon(){
    document.getElementById('message').innerHTML = "";
    for (var i = iconArray.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tempArray = iconArray[i];
        iconArray[i] = iconArray[j];
        iconArray[j] = tempArray;
    }
    document.getElementById("icon1").innerHTML = iconArray[0];
    document.getElementById("icon2").innerHTML = iconArray[1];
    document.getElementById("icon3").innerHTML = iconArray[2];
    document.getElementById("icon4").innerHTML = iconArray[3];
    document.getElementById("icon5").innerHTML = iconArray[4];
    document.getElementById("icon6").innerHTML = iconArray[5];
    document.getElementById("icon7").innerHTML = iconArray[6];
    document.getElementById("icon8").innerHTML = iconArray[7];
    document.getElementById("icon9").innerHTML = iconArray[8];
    document.getElementById("icon10").innerHTML = iconArray[9];
    document.getElementById("icon11").innerHTML = iconArray[10];
    document.getElementById("icon12").innerHTML = iconArray[11];
}
function messageFunction(iconName){
    if(iconName == textQuote[rand]){
        randomIcon();
        randomQuote();
    }
    else{
        document.getElementById('message').innerHTML = "Wrong";
    }
}
