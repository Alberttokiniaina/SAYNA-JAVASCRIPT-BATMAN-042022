// le hover pour les rubriques du header
var header = document.querySelectorAll('#navbar .navlist a'); //récupérez les éléments rubriques du header
for(let i = 0; i < header.length; i++){    //ajoutez du boucle pour parcourir tous les éléments récupérés
    function headerOn () {
        header[i].style.borderBottom = "2px solid var(--white-ad-color)";
        header[i].style.fontWeight = "bold";
    }
    header[i].addEventListener('mouseover', headerOn);   //le mouseover utilisé pour le hover au survol du souris

    function headerOff () {
        header[i].style.borderBottom = "";
        header[i].style.fontWeight = "";
    }
    header[i].addEventListener('mouseout', headerOff);
}

// le changement du couleur des logos 
// pour le logo batman en haut de la page
function onImg () {
    this.setAttribute("src","./Logos/logohomehover.png")
}

function outImg () {
    this.setAttribute("src", "./Logos/logohome.png")
}

// pour le logo batman sous forme de flèche haut
function upImg () {
    this.setAttribute("src","./Logos/logo_bat_flèchehover.png")
}

function upToImg () {
    this.setAttribute("src", "./Logos/logo_bat_flèche.png")
}

// pour le logo de batman sous forme de flèche bas
function downImg () {
    this.setAttribute("src","./Logos/logo_bat_flèche_2hover.png")
}

function downToImg () {
    this.setAttribute("src", "./Logos/logo_bat_flèche_2.png")
}

// pour le logo facebook
function onFb () {
    this.setAttribute("src","../Assets/Logos/icon_facebookhover.png")
}

function outFb () {
    this.setAttribute("src", "../Assets/Logos/icon_facebook.png")
}

// pour le logo instagram
function onIg () {
    this.setAttribute("src","../Assets/Logos/icon_ig.png")
}

function outIg () {
    this.setAttribute("src", "../Assets/Logos/icon_ighove.png")
}

// pour le logo twitter
function onTw () {
    this.setAttribute("src","../Assets/Logos/icon_twhover.png")
}

function outTw () {
    this.setAttribute("src", "../Assets/Logos/icon_tw.png")
}

// Pour le logo Sayna
function onSayna () {
    this.setAttribute("src","../Assets/Logos/logo_sayna_whitehover.png")
}

function outSayna () {
    this.setAttribute("src", "../Assets/Logos/logo_sayna_white.png")
}

// Pour le logo DC
function onDc () {
    this.setAttribute("src","../Assets/Logos/icon_DChover.png")
}

function outDc () {
    this.setAttribute("src", "../Assets/Logos/icon_DC.png")
}




