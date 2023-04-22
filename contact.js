const firebaseConfig = {
    apiKey: "AIzaSyDjO-6M8KHDrfH6B0eJmrxF6I2w1uSkFt8",
    authDomain: "oneshot-13735.firebaseapp.com",
    databaseURL: "https://oneshot-13735-default-rtdb.firebaseio.com",
    projectId: "oneshot-13735",
    storageBucket: "oneshot-13735.appspot.com",
    messagingSenderId: "425810739670",
    appId: "1:425810739670:web:a58aaa54573db2ef88e477"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

//db nameing reference to db
var contactFormDB = firebase.database().ref("oneshot-contactForm");
document.getElementById("contactform").addEventListener("submit", submitForm);


function submitForm(e){
    e.preventDefault();
    var name = getElementVal("name");
    var email = getElementVal("email");
    var msgContent = getElementVal("msgContent");

    saveMessages(name, email, msgContent);

  //   enable alert
    document.querySelector(".alert").style.display = "block";
  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();    
}

const saveMessages = (name, email, msgContent) => {
    var newContactForm = contactFormDB.push();
    newContactForm.set({
        name: name,
        email: email,
        msgContent: msgContent,
      });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
