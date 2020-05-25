
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

      var database = firebase.database();

      var comidas = firebase.database().ref().child('comidas');

      comidas.on('child_added', (snap, key) => {
          var id = snap.key;
          var nombre = snap.child('nombre').val();
          var precio = snap.child('precio').val();
          var tipo = snap.child('tipo').val();
          $("#table_body").append("<tr><td>"+id+"</td><td>"+nombre+"</td><td>"+precio+"</td><td>"+tipo+"</td><td><a class='btn btn-info' href='edit.html?id="+id+"'>Update</a> <button class='btn btn-danger' onClick='eliminar("+'"'+id+'"'+")'>Delete</button></td></tr>");

      });
  });

  function eliminar(id) {
      firebase.database().ref('comidas/' + id).remove();
      window.location.href = "index.html";

  }
