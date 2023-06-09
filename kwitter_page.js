//YOUR FIREBASE LINKS
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
    room_name=localStorag.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h3>"+name+"<img src='tick.png' class='user_tick'></h3>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-primary' id= >"+firebase_message_id+"value="+like+"onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like-"+like+"</span>"+"</button>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;

//End code

      } });  }); }
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push(
            {
                  name:user_name,
                  message:msg,
                  like:0
            }
      );
      document.getElementById("msg").value="";
}
function updateLike(firebase_message_id){
console.log(message_id);
button_id=message_id;
likes=document.getElementById(button_id).value;
updateLikes=Number(likes)+1;
console.log(updateLikes);
firebase.database().ref(room_name).child(message_id).update({
      like:updateLikes
});
}