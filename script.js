function toggleLetter() {



  var loveLetter = document.getElementById('love-letter');



  loveLetter.classList.toggle('open');



  var openButton = document.querySelector('.open-button');

  openButton.innerText = loveLetter.classList.contains('open') ? 'Close Letter' : 'Open Letter';

}

