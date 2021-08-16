//<!-- TODO: Add SDKs for Firebase products that you want to use 
//https://firebase.google.com/docs/web/setup#available-libraries -->

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
                          /*  // Initialize Firebase
                            firebase.initializeApp(firebaseConfig);

                            function number(value) {
                              this.v = value;
                            }

                            var data = new number(0);

                            var refs = firebase.database().ref('vue');


                            //read
                              //window.onload = function() {
                                sleep(1000);
                                  refs.on('value', snap => {
                                  var x = snap.val();
                                  x++;
                                  document.getElementById('views_counter').innerHTML = x;
                                  var views = parseInt(document.getElementById('views_counter').innerHTML);
                                  alert(x + '' + views);
                                  refs.set(x);
                                  //var temp = {v: 0};
                                  //refs.set(temp.v);
                                  });//snap.val()*/
   // }
        //innerHTML
        //innerText
/*
        ref.once('value').then(function(data) {
        var temp = {v: 0};
        temp.v = data.val();
        data.v = data.val();
        temp.v++;
        alert(temp.v);
      });
*/
    //alert("data"+data.v);
      //read
/*    window.onload = function() {
        var temp = {v: 11};
        refs.set(document.getElementById('views_counter').innerHTML);
        //refs.set(111);
        alert(document.getElementById('views_counter').innerHTML);
    }*/



  //write
  function increase(temp) { //increase
    //database.ref('vue').set(temp.v);
  }

  //increase(data);

/*  starCountRef.on('value', function(snapshot) {
    updateStarCount(postElement, snapshot.val());
  });*/

/*  function get_vue(firebase) {
    var userId = firebase.auth().currentUser.uid;
    return firebase.database().ref('vue').once('value').then(function(snapshot) {
      var username = (snapshot.val);
    });
  }*/

    //var data = dataSnapshot.node_.children_.root_.value.value_;
    //alert("consulté " + data + " fois.");
    // handle read data.
  
  //alert(get_vue());








  //===========================================================================
  //===========================================================================

audio = new Audio('CSI_Open.wav');
document.addEventListener('DOMContentLoaded', function() { 
    audio.play()
    printview()
})


/*audio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
})*/

/*window.addEventListener('resize', resizeCanvas, false)*/

function printview() {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function number(value) {
    this.v = value;
  }

  var data = new number(0);

  var refs = firebase.database().ref('vue_index');


  //read
    //window.onload = function() {
        sleep(100);
        refs.once('value', snap => {
        var x = snap.val();
        x++;
        document.getElementById('views_counter').innerHTML = x;
        var views = parseInt(document.getElementById('views_counter').innerHTML);
        //alert(x + '' + views);
        refs.set(x);
        document.getElementById('views_counter').innerHTML = ("consulté " + x + " fois");
        //var temp = {v: 0};
        //refs.set(temp.v);
        });//snap.val()
   // }

  // var welcomemsg = new Typed('.views_counter', {
  //       strings : ['consulté ' + data.v + ' fois'],
  //       stringsElement: null, 
  //       typeSpeed: 20, 
  //       backSpeed: -1,
  //       showCursor: true,
  //       cursorChar: '\u2588',
  //       autoInsertCss: true,
  //       onComplete: (self) => {
  //          $('.typed-cursor').hide()
  //           /*/sleep(2000)*/
           audio.play();
            printWelcome();
    //     }
    // });
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
            /*/sleep(2000)*/
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

function sleep(millis)
{
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while(curDate-date < millis);
}
