var SkeuomorphIconArray = 
["<img onclick='messageFunction(this.id)' id=Hamburger-icon class=iconimage src=Skeumorph-icons/hamburger-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Computer-icon class=iconimage src=Skeumorph-icons/computer-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Donut-icon class=iconimage src=Skeumorph-icons/donut-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Coffee-icon class=iconimage src=Skeumorph-icons/coffee-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Book-icon class=iconimage src=Skeumorph-icons/book-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Glasses-icon class=iconimage src=Skeumorph-icons/glasses-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Speaker-icon class=iconimage src=Skeumorph-icons/speaker-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Camera-icon class=iconimage src=Skeumorph-icons/camera-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Trashcan-icon class=iconimage src=Skeumorph-icons/trashcan-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Headphones-icon class=iconimage src=Skeumorph-icons/headphones-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Pensil-icon class=iconimage src=Skeumorph-icons/pensil-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Search-icon class=iconimage src=Skeumorph-icons/search-icon/57.png>"];
var FlatIconArray = 
["<img onclick='messageFunction(this.id)' id=Hamburger-icon class=iconimage src=Flatdesign-icons/hamburger-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Computer-icon class=iconimage src=Flatdesign-icons/computer-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Donut-icon class=iconimage src=Flatdesign-icons/donut-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Coffee-icon class=iconimage src=Flatdesign-icons/coffee-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Book-icon class=iconimage src=Flatdesign-icons/book-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Glasses-icon class=iconimage src=Flatdesign-icons/glasses-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Speaker-icon class=iconimage src=Flatdesign-icons/speaker-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Camera-icon class=iconimage src=Flatdesign-icons/camera-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Trashcan-icon class=iconimage src=Flatdesign-icons/trashcan-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Headphones-icon class=iconimage src=Flatdesign-icons/headphones-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Pensil-icon class=iconimage src=Flatdesign-icons/pensil-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Search-icon class=iconimage src=Flatdesign-icons/search-icon/57.png>"];
var textQuote = ["Hamburger-icon", "Computer-icon", "Donut-icon", "Coffee-icon", "Book-icon", "Glasses-icon", "Speaker-icon", "Camera-icon", "Trashcan-icon", "Headphones-icon", 
"Pensil-icon","Search-icon"];
var rand;
var skeumorphMatrix;
var flatdesignMatrix;

function onloadFunction(){
    skeumorphMatrix = document.getElementById("skeumorphmatrix");
    flatdesignMatrix = document.getElementById("flatdesignmatrix");
    randomQuote();
}
function changeStyle(){
    if(skeumorphMatrix.display === 'block'){
        skeumorphMatrix.display='none';
        flatdesignMatrix.display='block';
        console.log("flat");
        randomFlatdesignIcon();
    }
    else{
        skeumorphMatrix.display='block';
        flatdesignMatrix.display='none';
        console.log("skeu");
        randomSkeuomoprhismIcon();
    }
}
function randomQuote(){
    rand = Math.floor(Math.random() * textQuote.length);
    document.getElementById('textinstruction').innerHTML = textQuote[rand];
}
function randomSkeuomoprhismIcon(){
    document.getElementById('message').innerHTML = "";
    for (var i = SkeuomorphIconArray.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tempArray = SkeuomorphIconArray[i];
        SkeuomorphIconArray[i] = SkeuomorphIconArray[j];
        SkeuomorphIconArray[j] = tempArray;
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
function randomFlatdesignIcon(){
    document.getElementById('message').innerHTML = "";
    for (var i = FlatIconArray.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tempArray = FlatIconArray[i];
        FlatIconArray[i] = FlatIconArray[j];
        FlatIconArray[j] = tempArray;
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
}
function messageFunction(iconName){
    if(iconName == textQuote[rand]){
        randomQuote();
        if(skeumorphMatrix.display === 'block'){
            randomSkeuomoprhismIcon();
        }
        else{
            randomFlatdesignIcon();
        }
    }
    else{
        document.getElementById('message').innerHTML = "Wrong";
    }
}
