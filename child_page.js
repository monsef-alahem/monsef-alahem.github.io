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

document.addEventListener('DOMContentLoaded', function() { 
    printview()
})
function get_reference (val) {
    if (val == "linux") {
        return "vue_linux"
    } else if (val == "mes programmes") {
        return "vue_prog"
    } else if (val == "autoit") {
        return "vue_autoit"
    } else if (val == "C") {
        return "vue_c"
    } else if (val == "C++") {
        return "vue_c++"
    } else if (val == "batch") {
        return "vue_batch"
    } else if (val == "problèmes & solutions") {
        return "vue_prosol"
    } else if (val == "python") {
        return "vue_python"
    } else if (val == "Accueil") {
        return "vue_choaib"
    } else if (val == "articles scientifiques") {
        return "vue_scien"
    }
}

function printview() {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var refs = firebase.database().ref(get_reference(document.title));

        //read
        sleep(100);
        refs.once('value', snap => {
        var x = snap.val();
        x++;
        //write
        document.getElementById('views_counter').innerHTML = x;
        var views = parseInt(document.getElementById('views_counter').innerHTML);
        refs.set(x);
        document.getElementById('views_counter').innerHTML = ("consulté " + x + " fois");
        });
}

function sleep(millis)
{
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while(curDate-date < millis);
}