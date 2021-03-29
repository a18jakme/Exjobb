var myrng = new Math.seedrandom('randomicon');
var user=1;
var fails = 0;
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
"<img onclick='messageFunction(this.id)' id=Pencil-icon class=iconimage src=Skeumorph-icons/pencil-icon/57.png>",
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
"<img onclick='messageFunction(this.id)' id=Pencil-icon class=iconimage src=Flatdesign-icons/pencil-icon/57.png>",
"<img onclick='messageFunction(this.id)' id=Search-icon class=iconimage src=Flatdesign-icons/search-icon/57.png>"];
var textQuote = ["Hamburger-icon", "Computer-icon", "Donut-icon", "Coffee-icon", "Book-icon", "Glasses-icon", "Speaker-icon", "Camera-icon", "Trashcan-icon", "Headphones-icon", "Pencil-icon","Search-icon"];
var rand;
var skeumorphPage;
var flatdesignPage;
var rightClicks = 0;
var timerstart;
var totaltime;

function saveData() {
    $.post("data.php",
    {
        username: user,
        fails: fails,
        millispeed: totaltime,
    });
}
function onloadFunction(){
    skeumorphPage = document.getElementById("skeumorphismpage");
    flatdesignPage = document.getElementById("flatdesignpage");
    skeumorphPage.style.display='block';
    randomQuote();
    randomIcon();
    timerstart = new Date().getTime();
}
function changePage(){
    serveyPage = document.getElementById("surveypage");
    experimentPage = document.getElementById("experimentpage");
    experimentPage.style.display='block';
    serveyPage.style.display='none';
}
// change theme to flat or skeuomorphic
function changeStyle(){
    if(skeumorphPage.style.display == 'block'){
        skeumorphPage.style.display='none';
        flatdesignPage.style.display='block';
    }
    else{
        skeumorphPage.style.display='block';
        flatdesignPage.style.display='none';
    }
}
function randomQuote(){
    rand = Math.floor(myrng() * textQuote.length);
    document.getElementById('textinstruction').innerHTML = textQuote[rand];
}
function randomIcon(){
    document.getElementById('wrongmessage').innerHTML = "";
    for (var i = SkeuomorphIconArray.length - 1; i > 0; i--) {
        var j = Math.floor(myrng() * (i + 1));
        var tempArray = SkeuomorphIconArray[i];
        SkeuomorphIconArray[i] = SkeuomorphIconArray[j];
        SkeuomorphIconArray[j] = tempArray;
        tempArray=FlatIconArray[i];
        FlatIconArray[i] = FlatIconArray[j];
        FlatIconArray[j] = tempArray;
        document.getElementById("sicon1").innerHTML = SkeuomorphIconArray[0];
        document.getElementById("sicon2").innerHTML = SkeuomorphIconArray[1];
        document.getElementById("sicon3").innerHTML = SkeuomorphIconArray[2];
        document.getElementById("sicon4").innerHTML = SkeuomorphIconArray[3];
        document.getElementById("sicon5").innerHTML = SkeuomorphIconArray[4];
        document.getElementById("sicon6").innerHTML = SkeuomorphIconArray[5];
        document.getElementById("sicon7").innerHTML = SkeuomorphIconArray[6];
        document.getElementById("sicon8").innerHTML = SkeuomorphIconArray[7];
        document.getElementById("sicon9").innerHTML = SkeuomorphIconArray[8];
        document.getElementById("sicon10").innerHTML = SkeuomorphIconArray[9];
        document.getElementById("sicon11").innerHTML = SkeuomorphIconArray[10];
        document.getElementById("sicon12").innerHTML = SkeuomorphIconArray[11];
        document.getElementById("ficon1").innerHTML = FlatIconArray[0];
        document.getElementById("ficon2").innerHTML = FlatIconArray[1];
        document.getElementById("ficon3").innerHTML = FlatIconArray[2];
        document.getElementById("ficon4").innerHTML = FlatIconArray[3];
        document.getElementById("ficon5").innerHTML = FlatIconArray[4];
        document.getElementById("ficon6").innerHTML = FlatIconArray[5];
        document.getElementById("ficon7").innerHTML = FlatIconArray[6];
        document.getElementById("ficon8").innerHTML = FlatIconArray[7];
        document.getElementById("ficon9").innerHTML = FlatIconArray[8];
        document.getElementById("ficon10").innerHTML = FlatIconArray[9];
        document.getElementById("ficon11").innerHTML = FlatIconArray[10];
        document.getElementById("ficon12").innerHTML = FlatIconArray[11];
    }
}
function messageFunction(iconName){
    if(iconName == textQuote[rand]){
        rightClicks ++;
        if(rightClicks >= 5){
            totaltime = new Date().getTime() - timerstart;
            saveData();
            document.getElementById('wrongmessage').innerHTML = "End";
        }
        else{
            randomQuote();
            randomIcon();
        }
    }
    else{
        document.getElementById('wrongmessage').innerHTML = "Wrong icon try again!";
        fails ++;
    }
}