audio = new Audio('CSI_Open.wav');
document.addEventListener('DOMContentLoaded', function() { 
    audio.play()
    printWelcome()
})


/*audio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
})*/

/*window.addEventListener('resize', resizeCanvas, false)*/

function printWelcome() {
  var welcomemsg = new Typed('.welcomemsg', {
        strings : ['Bienvenu'],
        stringsElement: null, 
        typeSpeed: 20, 
        backSpeed: -1,
        showCursor: true,
        cursorChar: '\u2588',
        autoInsertCss: true,
        onComplete: (self) => {
           $('.typed-cursor').hide()
            /*/sleep(2000)*/
           audio.play()
            printpar()
        }
    });
}

function printpar() {
    var par1 = new Typed('.par1', {
        strings : ['salut !<br>c\'est monsef, ce site s\'addresse au programmeurs et utilisateurs de linux,<br>parmi la liste vous trouverez plusieurs astuces concernants chaque disipline.'],
        stringsElement: null, 
        typeSpeed: 1, 
        backSpeed: -1,
        showCursor: true,
        cursorChar: '\u2588',
        autoInsertCss: true,
        onComplete: (self) => {
            /*$('.typed-cursor').hide()
            sleep(1000)*/
            /*printNext()*/
        }
    });  
}
/*
function sleep(millis)
{
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while(curDate-date < millis);
}*/