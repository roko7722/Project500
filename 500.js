//Main
let pass = document.getElementById("pass"); //Password field
let login = document.getElementById("login");

let main = document.getElementById("mainTxt");
let imgL = document.getElementById("imgL");
let imgR = document.getElementById("imgR");

let hr = document.getElementById("hr");

let prsten = document.getElementById("prsten");
let Firsts = document.getElementById("FirstsBox");
let mainImg = document.getElementById("mainImg");

let hr2 = document.getElementById("hr2");

let future1 = document.getElementById("future1");
let future2 = document.getElementById("future2");
let future3 = document.getElementById("future3");

let footer = document.getElementById("footer");

//If correct password on Enter: hide login screen, display main screen
pass.addEventListener("keypress", function(event){
    if(event.key == "Enter"){
        if(pass.value == "0810"){
            login.style.display = "none";

            main.style.display = "block";
            imgL.style.display = "block";
            imgR.style.display = "block";

            hr.style.display = "block";

            prsten.style.display = "block";
            Firsts.style.display = "block";
            mainImg.style.display = "block";
            
            hr2.style.display = "block";

            future1.style.display = "block";
            future2.style.display = "block";
            future3.style.display = "block";

            footer.style.display = "block";
        }
        else{
            pass.value = null;
        }
    }
})

//Declaring popup boxes
let popup = document.getElementById("popup-txt");
let popupimg = document.getElementById("popup-img");

// Popup exits (back button)
let popupX = document.querySelectorAll(".popup-x");
function popupXF(){
    popup.style.display = "none";
    popupimg.style.display = "none";
}
popupX.forEach(popX => {
    popX.addEventListener("click", popupXF)
})

//Displays the popup boxes
function popupPF(){
    popup.style.display = "block";
    popup.style.zIndex = 1;
}
function popupIF(){
    GenerateAgain.style.display = "none";
    popupimg.style.display = "block";
    popupimg.style.zIndex = 1;
}

let drops = document.querySelectorAll(".Drops")
let FirstsTxt = document.getElementById("FirstsTxt")
function CheckDrops(){
    popupimg.style.display = "none";
    popupPF();
    if (this.id == "Hands"){
        FirstsTxt.innerHTML = "Porcijunkolovo 2022., prvi put kad smo se držali za ruke, hvala"
    }
    else if (this.id == "Kiss"){
        FirstsTxt.innerHTML = "11.12.2022. Ispred tvog stana, prvi put kad smo se poljubili, hvala"
    }
    else if (this.id == "Hug"){
        FirstsTxt.innerHTML = "Više niti neznam kad si me prvi put zagrlila, mislim da me to previše šokiralo, hvala"
    }
    else if (this.id == "QQ"){
        FirstsTxt.innerHTML = "Placeholder for a future first, I love you <3"
    }
}

drops.forEach(drop => {
    drop.addEventListener("click", CheckDrops);
})

//each img check
let img = document.querySelectorAll(".Img");
let imgDesc = document.getElementById("imgDesc");
let popImg = document.getElementById("popImg");
img.forEach(imgg => {
    imgg.addEventListener("click", popupCheck)
})

function popupCheck(){
    popupIF();
    hvala.innerHTML = "Hvala";
    if (this.id == "mainImg"){
        popImg.src = "Project500_Slike/mainImg.jpg";
        imgDesc.innerHTML = "Kolekcija svih predmeta :)";
    }
    else if (this.id == "prsten"){
        popImg.src = "Project500_Slike/Prsten.jpg";
        imgDesc.innerHTML = "Nadam se da ti jednog dana mogu vratiti ovaj prsten.";
    }
    else if (this.id == "pera"){
        popImg.src = "Project500_Slike/Pera.jpg";
        imgDesc.innerHTML = "Pera od Rio, najbolje papige na svijetu.";
    }
    else if (this.id == "skoljke"){
        popImg.src = "Project500_Slike/Skoljke.jpg";
        imgDesc.innerHTML = "Pokušaj stvaranja face od svih školjkica koje si mi poklonila lol";
    }
    else if (this.id == "kamenje"){
        popImg.src = "Project500_Slike/Kamenje.jpg";
        imgDesc.innerHTML = "Svo random kamenje od ko zna kud.";
    }
    else if (this.id == "kruska"){
        popImg.src = "Project500_Slike/Kruska.jpg";
        imgDesc.innerHTML = "Kruskica Rešeršer";
        //Hvala text
    }
    else if (this.id == "future1" || this.id == "future2" || this.id == "future3"){
        popImg.src = "Project500_Slike/Kamenje.jpg"
        imgDesc.innerHTML = "Mjesto ostavljeno za buduća sjećanja.";
    }
}

//Dropdown
let Drops = document.querySelectorAll(".Drops");
let DropFirsts = document.getElementById("DropFirsts");
let QQ = document.getElementById("QQ");
let active = 0;
function CheckActiveDrops(){
    if (active == 1){
        Drops.forEach(drop => {
            drop.style.display = "none";
        })
        active = 0
    }
    else{
        Drops.forEach(drop => {
            drop.style.display = "inline-block";
            QQ.style.display = "block";
        })
        active = 1
    }
}

DropFirsts.addEventListener("click", CheckActiveDrops)

let GenerateImgBtn = document.getElementById("GenerateImgBtn")
let GenerateAgain = document.getElementById("GenerateAgain")
let hvala = document.getElementById("hvala")
let next = 0;
function GenerateImg(){
    popupIF()
    hvala.innerHTML = "";
    GenerateAgain.style.display = "block";
    let rand = Math.floor(Math.random() * 4);
    if (next == 0){
        popImg.src = "Project500_Slike/Heart.jpg"; //Heart
        imgDesc.innerHTML = "I loveee youuuu <3";
    }
    else if(next == 1){
        popImg.src = ""; //Abs
        imgDesc.innerHTML = "Ovo je trebala biti kopija martinovih cringe slika u ogledalu ali je to previše za mene...";
    }
    else if(next == 2){
        popImg.src = "Project500_Slike/RealHeart.jpg"; // Heart 2
        imgDesc.innerHTML = "I reallyyyyy love you";
    }
    if (next < 2){
        next += 1;
    } else{
        next = 0;
    }
}
GenerateImgBtn.addEventListener("click", GenerateImg)
GenerateAgain.addEventListener("click", GenerateImg)
