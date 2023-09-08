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
            
            footer.style.display = "block";
        }
        else{
            pass.value = null;
        }
    }
})

// Declaring popup images
let popMainImg = document.getElementById("popMainImg");
let popKamenje = document.getElementById("popKamenje");
let popPera = document.getElementById("popPera");
let popPrsten = document.getElementById("popPrsten");
let popSkoljke = document.getElementById("popSkoljke");
let popKruska = document.getElementById("popKruska");

// Disables all popup images
function popImgNone(){
    popKamenje.style.display = "none";
    popKruska.style.display = "none";
    popMainImg.style.display = "none";
    popPera.style.display = "none";
    popSkoljke.style.display = "none";
    popPrsten.style.display = "none";
    GeneratedImg.style.display = "none";
    GenerateAgain.style.display = "none";

}

//Declaring popup boxes
let popup = document.getElementById("popup-txt");
let popupimg = document.getElementById("popup-img");

// Popup exits
let popupX = document.querySelectorAll(".popup-x");
function popupXF(){
    popup.style.display = "none";
    popupimg.style.display = "none";
    popImgNone();
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
        FirstsTxt.innerHTML = "Prvi put kad smo se zagrlili, hvala"
    }
}

drops.forEach(drop => {
    drop.addEventListener("click", CheckDrops);
})



//each img check
let img = document.querySelectorAll(".Img");
let imgDesc = document.getElementById("imgDesc");
img.forEach(imgg => {
    imgg.addEventListener("click", popupCheck)
})

function popupCheck(){
    popupIF();
    popImgNone();
    if (this.id == "mainImg"){
        popMainImg.style.display = "block";
        imgDesc.innerHTML = "Kolekcija svih predmeta :)";
    }
    else if (this.id == "prsten"){
        popPrsten.style.display = "block";
        imgDesc.innerHTML = "The one ring";
    }
    else if (this.id == "pera"){
        popPera.style.display = "block";
        imgDesc.innerHTML = "Pera od Rio, najbolje papige na svijetu";
    }
    else if (this.id == "skoljke"){
        popSkoljke.style.display = "block";
        imgDesc.innerHTML = "Sve školjkice koje si mi poklonila";
    }
    else if (this.id == "kamenje"){
        popKamenje.style.display = "block";
        imgDesc.innerHTML = "Svo random kamenje od pitaj boga kud";
    }
    else if (this.id == "kruska"){
        popKruska.style.display = "block";
        imgDesc.innerHTML = "Kruskica rararara??????";
    }
}

//Dropdown
let Drops = document.querySelectorAll(".Drops");
let DropFirsts = document.getElementById("DropFirsts");
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
        })
        active = 1
    }
}

DropFirsts.addEventListener("click", CheckActiveDrops)

let GenerateImgBtn = document.getElementById("GenerateImgBtn")
let GeneratedImg = document.getElementById("GeneratedImg")
let GenerateAgain = document.getElementById("GenerateAgain")
function GenerateImg(){
    popImgNone()
    popupIF()
    GenerateAgain.style.display = "block";
    GeneratedImg.style.display = "block";
    let rand = Math.floor(Math.random() * 3);
    if (rand == 0){
        GeneratedImg.src = "..\\Project500_Slike/mainImg.jpg";
    }
    else if(rand == 1){
        GeneratedImg.src = "..\\Project500_Slike/Prsten.jpg";
    }
    else if(rand == 2){
        GeneratedImg.src = "..\\Project500_Slike/Pera.jpg";
    }
}
GenerateImgBtn.addEventListener("click", GenerateImg)
GenerateAgain.addEventListener("click", GenerateImg)
