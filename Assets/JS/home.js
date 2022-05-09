// effet hover sur le background des 2 boutons au premier page
let btn = document.querySelectorAll('.btn button');
for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener('mouseover', function (){
        btn[i].style.background = 'linear-gradient(90deg, rgba(248,247,246,0.6) 0%, rgba(235,50,33,0.7) 66%, rgba(232,14,14,0.33209033613445376) 100%)';
    })
    btn[i].addEventListener('mouseout', function(){
        btn[i].style.background = 'linear-gradient(90deg, rgba(248, 247, 246, 0.411) 0%, rgba(235, 50, 33, 0.5) 66%, rgba(232,14,14,0.13209033613445376) 100%)';
    })
} 


// effet de surbrillance sur les vidéos
let videos = document.querySelectorAll('iframe');
for(let i = 0; i < videos.length; i++){
    let video = videos[i];
    video.addEventListener('mouseover', function(){
        video.style.boxShadow = '0px 0px 30px var(--white-ad-color)';
    })
    video.addEventListener('mouseout', function(){
        video.style.boxShadow = 'none';
    })
}


// effet hover sur les 3 boutons dans le formulaire
let btnGroup = document.querySelectorAll('.btn-group button');
for(let i = 0; i < btnGroup.length; i++){
    btnGroup[i].addEventListener('mouseover', function(){
        btnGroup[i].style.background = 'linear-gradient(to right, #716752c5,#498fb8c0, #19587db6)';
    })
    btnGroup[i].addEventListener('mouseout', function(){
        btnGroup[i].style.background = 'none';
    })
}


// effet hover sur le bouton confirmer sur le formulaire
let btnConfirm = document.querySelector('input[type=button]');
function onConfirm () {
    btnConfirm.style.background = 'linear-gradient(90deg, rgba(248, 247, 246, 0.411) 0%, rgba(235, 50, 33, 0.555) 66%, rgba(232, 14, 14, 0.644) 100%)';
}
btnConfirm.addEventListener('mouseover', onConfirm);
function offConfirm () {
    btnConfirm.style.background = 'linear-gradient(90deg, rgba(248, 247, 246, 0.247) 0%, rgba(235, 50, 33, 0.418) 66%, rgba(232, 14, 14, 0.493) 100%)';
}
btnConfirm.addEventListener('mouseout', offConfirm);

