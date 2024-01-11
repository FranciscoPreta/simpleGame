var cadet = document.querySelector('.cadet');
//left: 190px;
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

        cadet.src = 'resources/dead.png'
        
        clearInterval(abc);

    }

  }
  const loop = setInterval(abc, 10);



  document.addEventListener('keydown', jump);