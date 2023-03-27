
const firebaseConfig = {
  apiKey: "AIzaSyDiRfXxjyctg337DJtt--LYs5dPT--YvM8",
  authDomain: "capstone-project-df45e.firebaseapp.com",
  projectId: "capstone-project-df45e",
  storageBucket: "capstone-project-df45e.appspot.com",
  messagingSenderId: "300114807768",
  appId: "1:300114807768:web:acbeac137b2ee8d5e000ad"
};

firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML///"+user_name+"!";

function addRoom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose:"adding room name"
  });
  localStorage.setItem("room_name",room_name);
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
       document.getElementById("output").innerHTML += row;
       
      
      //End code
      });});}
getData();
function redirectToRoomName(name) {
   console.log(name); 
   localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html"; }


    function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      localStorage.removeItem("email_address");
      window.location="index.html";
}

