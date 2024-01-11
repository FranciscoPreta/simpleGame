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
    console.log(fridgePos)

    if (fridgePos <= 120){
        
        fridge.style.animation = 'none';
        fridge.style.left = `${fridgePos}px`

    }

  }
  const loop = setInterval(abc, 10);



  document.addEventListener('keydown', jump);