$(document).ready(function(){
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA_kne7aJeA7b6DtX5H_mYHaqwyfQHNWjQ",
    authDomain: "cocinaeconomica-d9f45.firebaseapp.com",
    databaseURL: "https://cocinaeconomica-d9f45.firebaseio.com",
    projectId: "cocinaeconomica-d9f45",
    storageBucket: "cocinaeconomica-d9f45.appspot.com",
    messagingSenderId: "377479323339",
    appId: "1:377479323339:web:a77bb85109552d55fec54e"
  };
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

});

function agregar() {

    firebase.database().ref('comidas').push({
            nombre: $("#nombre").val(),
            precio: $("#precio").val(),
            tipo: $("#tipo").val()
        },
        function (error) {
            if (error) {
                alert(error);
            } else {
                window.location.href = "index.html";
            }
        }
    );
}
