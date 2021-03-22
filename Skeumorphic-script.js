var SkeuomorphIconArray = 
["<img onclick='messageFunction(this.id)' id=Hamburgericon class=iconimage src=Skeumorph-icons/hamburger-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Ballicon class=iconimage src=Skeumorph-icons/computer-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Donuticon class=iconimage src=Skeumorph-icons/donut-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Coffeeicon class=iconimage src=Skeumorph-icons/coffee-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Bookicon class=iconimage src=Skeumorph-icons/book-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Glassesicon class=iconimage src=Skeumorph-icons/glasses-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Speakericon class=iconimage src=Skeumorph-icons/speaker-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Cameraicon class=iconimage src=Skeumorph-icons/camera-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Toolicon class=iconimage src=Skeumorph-icons/trashcan-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Jewelryicon class=iconimage src=Skeumorph-icons/headphones-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Pensilicon class=iconimage src=Skeumorph-icons/pensil-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Travelicon class=iconimage src=Skeumorph-icons/search-icon/57.png>"];
var FlatIconArray = 
["<img onclick='messageFunction(this.id)' id=Hamburgericon class=iconimage src=Flatdesign-icons/hamburger-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Ballicon class=iconimage src=Flatdesign-icons/computer-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Donuticon class=iconimage src=Flatdesign-icons/donut-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Coffeeicon class=iconimage src=Flatdesign-icons/coffee-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Bookicon class=iconimage src=Flatdesign-icons/book-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Glassesicon class=iconimage src=Flatdesign-icons/glasses-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Speakericon class=iconimage src=Flatdesign-icons/speaker-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Cameraicon class=iconimage src=Flatdesign-icons/camera-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Toolicon class=iconimage src=Flatdesign-icons/trashcan-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Jewelryicon class=iconimage src=Flatdesign-icons/headphones-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Pensilicon class=iconimage src=Flatdesign-icons/pensil-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Travelicon class=iconimage src=Flatdesign-icons/search-icon/57.png>"];
var textQuote = ["Hamburgericon", "Ballicon", "Donuticon", "Coffeeicon", "Bookicon", "Glassesicon", "Speakericon", "Cameraicon", "Toolicon", "Jewelryicon", "Pensilicon","Travelicon"];
var rand;

function onloadFunction(){
    randomQuote();
    randomIcon();
}
function changeStyle(){
    var skeumorphMatrix = document.getElementById("skeumorphmatrix");
    var flatdesignMatrix = document.getElementById("flatdesignmatrix");
    if(skeumorphMatrix.display === 'block'){
        skeumorphMatrix.display='none';
        flatdesignMatrix.display='block';
        console.log("flat");
        document.getElementById("icon1").innerHTML = FlatIconArray[0];
        document.getElementById("icon2").innerHTML = FlatIconArray[1];
        document.getElementById("icon3").innerHTML = FlatIconArray[2];
        document.getElementById("icon4").innerHTML = FlatIconArray[3];
        document.getElementById("icon5").innerHTML = FlatIconArray[4];
        document.getElementById("icon6").innerHTML = FlatIconArray[5];
        document.getElementById("icon7").innerHTML = FlatIconArray[6];
        document.getElementById("icon8").innerHTML = FlatIconArray[7];
        document.getElementById("icon9").innerHTML = FlatIconArray[8];
        document.getElementById("icon10").innerHTML = FlatIconArray[9];
        document.getElementById("icon11").innerHTML = FlatIconArray[10];
        document.getElementById("icon12").innerHTML = FlatIconArray[11];
    }
    else{
        skeumorphMatrix.display='block';
        flatdesignMatrix.display='none';
        console.log("skeu");
        document.getElementById("icon1").innerHTML = SkeuomorphIconArray[0];
        document.getElementById("icon2").innerHTML = SkeuomorphIconArray[1];
        document.getElementById("icon3").innerHTML = SkeuomorphIconArray[2];
        document.getElementById("icon4").innerHTML = SkeuomorphIconArray[3];
        document.getElementById("icon5").innerHTML = SkeuomorphIconArray[4];
        document.getElementById("icon6").innerHTML = SkeuomorphIconArray[5];
        document.getElementById("icon7").innerHTML = SkeuomorphIconArray[6];
        document.getElementById("icon8").innerHTML = SkeuomorphIconArray[7];
        document.getElementById("icon9").innerHTML = SkeuomorphIconArray[8];
        document.getElementById("icon10").innerHTML = SkeuomorphIconArray[9];
        document.getElementById("icon11").innerHTML = SkeuomorphIconArray[10];
        document.getElementById("icon12").innerHTML = SkeuomorphIconArray[11];
    }
}
function randomQuote(){
    rand = Math.floor(Math.random() * textQuote.length);
    document.getElementById('textinstruction').innerHTML = textQuote[rand];
}
function randomIcon(){
    document.getElementById('message').innerHTML = "";
    for (var i = SkeuomorphIconArray.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tempArray = SkeuomorphIconArray[i];
        SkeuomorphIconArray[i] = SkeuomorphIconArray[j];
        SkeuomorphIconArray[j] = tempArray;
    }

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
