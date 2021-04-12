var myrng = new Math.seedrandom('myrandom');
var SkeuomorphIconArray = 
["<img onclick='checkRightIcon(this.id)' id=Hamburger-icon class=iconimage src=Skeumorph-icons/hamburger-icon/57.png>",
"<img onclick='checkRightIcon(this.id)' id=Computer-icon class=iconimage src=Skeumorph-icons/computer-icon/57.png>",
"<img onclick='checkRightIcon(this.id)' id=Donut-icon class=iconimage src=Skeumorph-icons/donut-icon/57.png>",
"<img onclick='checkRightIcon(this.id)' id=Coffee-icon class=iconimage src=Skeumorph-icons/coffee-icon/57.png>",
"<img onclick='checkRightIcon(this.id)' id=Book-icon class=iconimage src=Skeumorph-icons/book-icon/57.png>",
"<img onclick='checkRightIcon(this.id)' id=Glasses-icon class=iconimage src=Skeumorph-icons/glasses-icon/57.png>",
"<img onclick='checkRightIcon(this.id)' id=Speaker-icon class=iconimage src=Skeumorph-icons/speaker-icon/57.png>",
"<img onclick='checkRightIcon(this.id)' id=Camera-icon class=iconimage src=Skeumorph-icons/camera-icon/57.png>",
"<img onclick='checkRightIcon(this.id)' id=Trashcan-icon class=iconimage src=Skeumorph-icons/trashcan-icon/57.png>",
"<img onclick='checkRightIcon(this.id)' id=Headphones-icon class=iconimage src=Skeumorph-icons/headphones-icon/57.png>",
"<img onclick='checkRightIcon(this.id)' id=Pencil-icon class=iconimage src=Skeumorph-icons/pencil-icon/57.png>",
"<img onclick='checkRightIcon(this.id)' id=Search-icon class=iconimage src=Skeumorph-icons/search-icon/57.png>"];
var FlatIconArray = 
["<img onclick='checkRightIcon(this.id)' id=Hamburger-icon class=iconimage src=Flatdesign-icons/hamburger-icon/57.png>",
"<img onclick='checkRightIcon(this.id)' id=Computer-icon class=iconimage src=Flatdesign-icons/computer-icon/57.png>",
"<img onclick='checkRightIcon(this.id)' id=Donut-icon class=iconimage src=Flatdesign-icons/donut-icon/57.png>",
"<img onclick='checkRightIcon(this.id)' id=Coffee-icon class=iconimage src=Flatdesign-icons/coffee-icon/57.png>",
"<img onclick='checkRightIcon(this.id)' id=Book-icon class=iconimage src=Flatdesign-icons/book-icon/57.png>",
"<img onclick='checkRightIcon(this.id)' id=Glasses-icon class=iconimage src=Flatdesign-icons/glasses-icon/57.png>",
"<img onclick='checkRightIcon(this.id)' id=Speaker-icon class=iconimage src=Flatdesign-icons/speaker-icon/57.png>",
"<img onclick='checkRightIcon(this.id)' id=Camera-icon class=iconimage src=Flatdesign-icons/camera-icon/57.png>",
"<img onclick='checkRightIcon(this.id)' id=Trashcan-icon class=iconimage src=Flatdesign-icons/trashcan-icon/57.png>",
"<img onclick='checkRightIcon(this.id)' id=Headphones-icon class=iconimage src=Flatdesign-icons/headphones-icon/57.png>",
"<img onclick='checkRightIcon(this.id)' id=Pencil-icon class=iconimage src=Flatdesign-icons/pencil-icon/57.png>",
"<img onclick='checkRightIcon(this.id)' id=Search-icon class=iconimage src=Flatdesign-icons/search-icon/57.png>"];
var textQuote = ["Hamburger-icon", "Computer-icon", "Donut-icon", "Coffee-icon", "Book-icon", "Glasses-icon", "Speaker-icon", "Camera-icon", "Trashcan-icon", "Headphones-icon", "Pencil-icon","Search-icon"];
var id = new Date().toLocaleString();;
var rand;
var skeumorphFails = 0;
var flatdesignFails = 0;
var skeumorphTheme;
var flatdesignTheme;
var skeumorphRightClicks = 0;
var flatdesignRightClicks = 0;
var startSkeumorphTimer;
var startFlatdesignTimer;
var totalSkeumorphTime;
var totalFlatdesignTime;
var flatdesignExperiment=false;
var userAge;
var userExperience;
var userbrowser;
var userDevice;
var numOfExperiment = 0;
function body(){
    skeumorphTheme = document.getElementById("skeumorph-content");
    flatdesignTheme = document.getElementById("flatdesign-content");
    page1 = document.getElementById("page1");
    page2 = document.getElementById("page2");
    page3 = document.getElementById("page3");
    page4 = document.getElementById("page4");
    skeumorphTheme.style.display='block';
}
function saveData() {
    console.log(id);
    console.log(userAge);
    console.log(userExperience);
    console.log(userDevice);
    console.log(userbrowser);
    console.log("skeufails: " +skeumorphFails);
    console.log("seutime: " +totalSkeumorphTime);
    console.log("flatfails: " + flatdesignFails);
    console.log("flattime: " + totalFlatdesignTime);
    $.post("data.php",
    {
        id: id,
        age: userAge,
        experience: userExperience,
        device: userDevice,
        browser: userbrowser,
        skeumorphfails: skeumorphFails,
        skeumorphtotaltime: totalSkeumorphTime,
        flatdesignfails: flatdesignFails,
        flatdesigntotaltime: totalFlatdesignTime,
    });
}
function formData(){
    if(formValidate() == false){
    userAge = $('.agegroup-input:checked').val();
    userExperience = $('.experience-input:checked').val();
    userbrowser = $('.browser-input:checked').val();
    userDevice = $('.device-input:checked').val();
    }
    else{
    }
    if(document.getElementById("check-exstart").checked){
        changePage('page4');
    }
    else{
        changePage('page2');
    }
}
function formValidate(){
    formValid = false;
    var ageRadios = document.getElementsByName("agegroup");
    var experienceRadios = document.getElementsByName("experience");
    var browserRadios = document.getElementsByName("browser");
    var deviceRadios = document.getElementsByName("device");
    if (!(ageRadios[0].checked || ageRadios[1].checked)) {
        document.getElementById("agevalidate-text").innerHTML = ("Please select your agegroup");
        formValid = true;
    }
    else{
        document.getElementById("agevalidate-text").innerHTML = ("");
    }
    if (!(experienceRadios[0].checked || experienceRadios[1].checked || experienceRadios[2].checked)) {
        document.getElementById("experiencevalidate-text").innerHTML = ("Please select your mobile experience");
        formValid = true;
    }
    else{
        document.getElementById("experiencevalidate-text").innerHTML = ("");
    }
    if (!(browserRadios[0].checked || browserRadios[1].checked || browserRadios[2].checked)) {
        document.getElementById("browservalidate-text").innerHTML = ("Please select your browser connection");
        formValid = true;
    }
    else{
        document.getElementById("browservalidate-text").innerHTML = ("");
    }
    if (!(deviceRadios[0].checked || deviceRadios[1].checked || deviceRadios[2].checked)) {
        document.getElementById("devicevalidate-text").innerHTML = ("Please select your kind of device");
        formValid = true;
    }
    else{
        document.getElementById("devicevalidate-text").innerHTML = ("");
    }
    return formValid;
}
function changePage(page){
    if (page=="page2"){
        page2.style.display='block';
        page1.style.display='none';
        page3.style.display='none';
        page4.style.display='none';
        page5.style.display='none';
    }
    else if(page=="page3"){
        page1.style.display='none';
        page2.style.display='none';
        page3.style.display='block';
        page4.style.display='none';
        page5.style.display='none';
    }
    else if(page=="page4"){
        page1.style.display='none';
        page2.style.display='none';
        page3.style.display='none';
        page4.style.display='block';
        page5.style.display='none';
    }
    else if(page=="page5"){
        saveData();
        page1.style.display='none';
        page2.style.display='none';
        page3.style.display='none';
        page4.style.display='none';
        page5.style.display='block';
    }
}
//experiment timer start
function timerStart(){
    if(!flatdesignExperiment){
        startSkeumorphTimer = new Date().getTime();
    }
    else{
        startFlatdesignTimer = new Date().getTime();
    }
}
// change theme to flat or skeuomorphic
function changeTheme(){
    if(flatdesignExperiment==true){
        skeumorphTheme.style.display='none';
        flatdesignTheme.style.display='block';
        flatdesignExperiment=true;
    }
    else{
        skeumorphTheme.style.display='block';
        flatdesignTheme.style.display='none';
        flatdesignExperiment=false;
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
        var tempArray;
        if(!flatdesignExperiment){
            tempArray = SkeuomorphIconArray[i];
            SkeuomorphIconArray[i] = SkeuomorphIconArray[j];
            SkeuomorphIconArray[j] = tempArray;
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
        }
        else{
            tempArray = FlatIconArray[i];
            FlatIconArray[i] = FlatIconArray[j];
            FlatIconArray[j] = tempArray;
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
}
function startSkeuomorphExperiment(){
    flatdesignExperiment = false;
    changeTheme();
    myrng = new Math.seedrandom('myrandom');
    randomQuote();
    randomIcon();
    changePage('page3');
    timerStart();
}
function startFlatdesignExperiment(){
    flatdesignExperiment = true;
    changeTheme();
    myrng = new Math.seedrandom('myrandom');
    randomQuote();
    randomIcon();
    changePage('page3');
    timerStart();
}
function checkRightIcon(iconName){
    if(iconName == textQuote[rand]){
        if(!flatdesignExperiment){
            skeumorphRightClicks ++;
            if(skeumorphRightClicks >= 5){
                totalSkeumorphTime = new Date().getTime() - startSkeumorphTimer;
                skeumorphRightClicks = 0;
                numOfExperiment += 1;
                if(numOfExperiment == 2){
                    changePage('page5');
                }
                else{
                    changePage('page4');
                }
            }
            else{
                randomQuote();
                randomIcon();
            }
        }
        else{
            flatdesignRightClicks ++;
            if(flatdesignRightClicks >= 5){
                totalFlatdesignTime = new Date().getTime() - startFlatdesignTimer;
                flatdesignRightClicks = 0;
                numOfExperiment += 1;
                if(numOfExperiment == 2){
                    changePage('page5');
                }
                else{
                    changePage('page2');
                }
            }
            else{
                randomQuote();
                randomIcon();
            }
        }
    }
    else{
        if(!flatdesignExperiment){
            document.getElementById('wrongmessage').innerHTML = "Wrong icon try again!";
            skeumorphFails ++;
        }
        else{
            document.getElementById('wrongmessage').innerHTML = "Wrong icon try again!";
            flatdesignFails ++;
        }

    }
}
