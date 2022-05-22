// Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCgO1v4Y9JJVb9iuxTQLAb1CLnTldBmM0s",
  authDomain: "portfolio-website-ec3d6.firebaseapp.com",
  databaseURL: "https://portfolio-website-ec3d6-default-rtdb.firebaseio.com",
  projectId: "portfolio-website-ec3d6",
  storageBucket: "portfolio-website-ec3d6.appspot.com",
  messagingSenderId: "224131634450",
  appId: "1:224131634450:web:124861744a043264560fcb",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Reference contactInfo collections
let contactInfo = firebase.database().ref("infos")


//Listen for a submit
document.querySelector('.contact__form').addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //Get input values
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;

  saveContactInfo(name, email, message);

  //Clear form input values
  document.querySelector('.contact__form').reset();
}

//Save infos to firebase
function saveContactInfo(name, email, message){
  let newContactInfo = contactInfo.push();
  newContactInfo.set({
    Name: name,
    Email: email,
    Message: message
  });
}



// 'Sent Message' Text
//const contactButton = document.querySelector('.contact__button');
const contactButton = document.querySelector('.contact-message');

function sentMessageClear() {
  //document.getElementById('sent-message-text').innerHTML = '';
  //contactButton.value = 'Send Message';
  contactButton.style.visibility = "hidden";
}

function sentMessage() {
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;

  if (name != '' && email != '' && message != '') {
    setTimeout('sentMessageClear()', 2000);
    //document.getElementById('sent-message-text').innerHTML = 'Thanks, your message is received!';
    //contactButton.value = 'Message sent';
    contactButton.style.visibility = 'visible';
  }
}