
const firebaseConfig = {
    apiKey: "AIzaSyBWbtgmtGHStYogBtd4B6w7HelVr-OoZEE",
    authDomain: "piousbrothers-c5e99.firebaseapp.com",
    projectId: "piousbrothers-c5e99",
    storageBucket: "piousbrothers-c5e99.firebasestorage.app",
    messagingSenderId: "988225455952",
    appId: "1:988225455952:web:088c919b1b537caa3e8e55",
    measurementId: "G-5GYBVCJY9P"
  };
  
  firebase.initializeApp(firebaseConfig);
    const db = firebase.database();
        const auth = firebase.auth();
    
        auth.onAuthStateChanged(user => {
    if (user) {
      // User is logged in, now fetch their username
      db.ref('users/' + user.uid).once('value')
        .then(snapshot => {
          const username = snapshot.val().username;
          document.getElementById("welcomeMessage").innerText = `Welcome, ${username}!`;
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      window.location.href = "/login.html"; // Not logged in, redirect
    }
  });
  
  function logout() {
    auth.signOut().then(() => {
      window.location.href = "/login.html";
    });
  }