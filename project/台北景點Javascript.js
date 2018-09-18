$(document).ready(function(){
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyAUnA_8r0-qHb6bCTMi0SCzHcUlc07Qbdk",
    authDomain: "jia618-d8042.firebaseapp.com",
    databaseURL: "https://jia618-d8042.firebaseio.com",
    projectId: "jia618-d8042",
    storageBucket: "jia618-d8042.appspot.com",
    messagingSenderId: "157048895266"
  };
 firebase.initializeApp(config);
  

var pre = document.getElementById('object');
  var a = 0;
  for(var i = 0;i<8;i++){
    var db = firebase.database().ref("ig/-LIWy32AxN6FGNhWkRmT/景點/1/1/"+i+"/1/0");
  db.on('value',function(snapshot){
    var test = snapshot.val();
    a++;
    var image = document.getElementById("p"+a);
    image.style.backgroundImage = "url("+test+")";
 });
  }
  ;})
