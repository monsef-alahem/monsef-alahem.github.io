//<!-- TODO: Add SDKs for Firebase products that you want to use 
//https://firebase.google.com/docs/web/setup#available-libraries -->

{
                                sleep(1000);
                                  refs.on('value', snap => {
                                  var x = snap.val();
                                  x++;
                                  document.getElementById('views_counter').innerHTML = x;
                                  var views = parseInt(document.getElementById('views_counter').innerHTML);
                                  alert(x + '' + views);
                                  refs.set(x);

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD_6_ENPnJpY5j3UQfuEf1pWinaI-NQXuk",
    authDomain: "monsef-alahem.firebaseapp.com",
    databaseURL: "https://monsef-alahem.firebaseio.com",
    projectId: "monsef-alahem",
    storageBucket: "monsef-alahem.appspot.com",
    messagingSenderId: "438113761415",
    appId: "1:438113761415:web:236f057fc7550146e32022"
  };
                         
        ref.once('value').then(function(data) {
        var temp = {v: 0};
        temp.v = data.val();
        data.v = data.val();
        temp.v++;
        alert(temp.v);
      });

//write
  function increase(temp) { //increase
    //database.ref('vue').set(temp.v);
  }


  //===========================================================================
  //===========================================================================

audio = new Audio('CSI_Open.wav');
document.addEventListener('DOMContentLoaded', function() { 
    audio.play()
    printview()
})

function printview() {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function number(value) {
    this.v = value;
  }

  var data = new number(0);
  var refs = firebase.database().ref('vue_index');

  //read
  sleep(100);
  refs.once('value', snap => {
  var x = snap.val();
  x++;
  document.getElementById('views_counter').innerHTML = x;
  var views = parseInt(document.getElementById('views_counter').innerHTML);
  refs.set(x);
  document.getElementById('views_counter').innerHTML = (x + " views");
 
  printWelcome();
}

function printWelcome() {
    var welcomemsg = new Typed('.welcomemsg', {
        strings : ['Welcome'],
        stringsElement: null, 
        typeSpeed: 20, 
        backSpeed: -1,
        showCursor: true,
        cursorChar: '\u2588',
        autoInsertCss: true,
        onComplete: (self) => {
           $('.typed-cursor').hide()
           audio.play()
            printpar()
        }
    });
}

function printpar() {
    var par1 = new Typed('.par1', {
        strings : ['Hello !<br>This is monsef, I present you on this website some studies of some of my programs, as well as some programming tricks that I needed while working on projects, who knows these notes might be useful to a programmer, a linuxian or simply a computer lover.'],
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

function sleep(millis) {
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while(curDate-date < millis);
}
