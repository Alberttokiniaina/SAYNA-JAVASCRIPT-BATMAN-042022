// le hover pour les rubriques du header
var header = document.querySelectorAll('#navbar .navlist a'); //récupérez les éléments rubriques du header
for(let i = 0; i < header.length; i++){    //ajoutez du boucle pour parcourir tous les éléments récupérés
    function headerOn () {
        header[i].style.borderBottom = "2px solid var(--white-ad-color)";
    }
    header[i].addEventListener('mouseover', headerOn);   //le mouseover utilisé pour le hover au survol du souris

    function headerOff () {
        header[i].style.borderBottom = "";
    }
    header[i].addEventListener('mouseout', headerOff);
}




