// les cartes slide
 var cardSlide = document.querySelectorAll('.cardBox')
 for(let i = 0; i < cardSlide.length; i++) {
     var card = cardSlide[i]
     var slide = function () {
         this.classList.add(showCard())
     }
     card.addEventListener('click', slide)
 }

 
let cardToShow = document.querySelectorAll('.boxhidden');
    for(let i = 0; i < cardSlide.length; i++){
        function showCard() {
            cardToShow[i].style.display = 'block';
    }
    cardToShow[i].addEventListener('click', showCard)
 }