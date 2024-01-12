var cadet = document.querySelector('.cadet');
var fridge = document.querySelector('.fridge');


function jump(event) {
    
    if (event.keyCode === 32 || event.key === ' ') {

      cadet.classList.add('jump')

      setTimeout(function () {
        cadet.classList.remove('jump');
    }, 600);
      
    }
  }

  function abc(){

    var fridgePos = fridge.offsetLeft;
    var cadetPos = +window.getComputedStyle(cadet).bottom.replace('px', '');

    

    if (fridgePos <= 10 && fridgePos > 0 && cadetPos < 145  ){
        
        fridge.style.animation = 'none';
        fridge.style.left = `${fridgePos}px`

        cadet.style.animation = 'none';
        cadet.style.bottom = `${fridgePos}px`

        cadet.src = 'resources/Cadet_Cabaco.png'
        
        clearInterval(loop);

        var gameoverDiv = document.createElement('div');
        gameoverDiv.className = 'gameover';
        gameoverDiv.textContent = 'Yum took the game home and ended the party.... again';

        document.body.appendChild(gameoverDiv);

        var yumGif = document.createElement('img');
        yumGif.src = 'resources/yum.webp';
        yumGif.alt = 'Image Description';

        gameoverDiv.appendChild(yumGif);

        var restartButton = document.createElement('button');
        restartButton.textContent = 'Restart';
        restartButton.addEventListener('click', function () {
            
            location.reload();
        });

        gameoverDiv.appendChild(restartButton);

    }

  }
  const loop = setInterval(abc, 10);



  document.addEventListener('keydown', jump);

  restartButton.addEventListener('click', function () {
    // Reset the game state and hide the gameover container
    document.querySelector('.gameover-container').style.display = 'none';
    restartButton.style.display = 'none'; // Hide the restart button
    cadet.src = 'resources/alive.png'; // Reset the cadet image source
    // Add any additional reset logic as needed
    loop = setInterval(abc, 10); // Restart the game loop
});