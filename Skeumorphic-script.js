
var iconArray = 
["<img onclick='messageFunction(this.id)' id=Hamburgericon class=ikonimage src=hamburger-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Ballicon class=ikonimage src=ball-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Dounuticon class=ikonimage src=dounut-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Coffeeicon class=ikonimage src=coffee-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Bookicon class=ikonimage src=book-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Glassesicon class=ikonimage src=glasses-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Speakericon class=ikonimage src=speaker-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Cameraicon class=ikonimage src=camera-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Toolicon class=ikonimage src=tool-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Jewelryicon class=ikonimage src=jewelry-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Pensilicon class=ikonimage src=pensil-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Travelicon class=ikonimage src=travel-icon/57.png>"];
var textQuote = ["Hamburgericon", "Ballicon", "Dounuticon", "Coffeeicon", "Bookicon", "Glassesicon", "Speakericon", "Cameraicon", "Toolicon", "Jewelryicon", "Pensilicon","Travelicon"];
var rand;
function randomIcon(){
    document.getElementById('message').innerHTML = "";
    rand = Math.floor(Math.random() * textQuote.length);
    document.getElementById('textinstruction').innerHTML = textQuote[rand];

    for (var i = iconArray.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = iconArray[i];
        iconArray[i] = iconArray[j];
        iconArray[j] = temp;
    }
    document.getElementById("ikon1").innerHTML = iconArray[0];
    document.getElementById("ikon2").innerHTML = iconArray[1];
    document.getElementById("ikon3").innerHTML = iconArray[2];
    document.getElementById("ikon4").innerHTML = iconArray[3];
    document.getElementById("ikon5").innerHTML = iconArray[4];
    document.getElementById("ikon6").innerHTML = iconArray[5];
    document.getElementById("ikon7").innerHTML = iconArray[6];
    document.getElementById("ikon8").innerHTML = iconArray[7];
    document.getElementById("ikon9").innerHTML = iconArray[8];
    document.getElementById("ikon10").innerHTML = iconArray[9];
    document.getElementById("ikon11").innerHTML = iconArray[10];
    document.getElementById("ikon12").innerHTML = iconArray[11];
}

function messageFunction(iconName){
    
    if(iconName == textQuote[rand])
    {
        randomIcon();
    }
    else{
        document.getElementById('message').innerHTML = "Wrong";
    }
}