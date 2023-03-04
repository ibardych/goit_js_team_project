// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { getDatabase, ref, set, onValue } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCTBJG-qoCxnqY0kLartne6JuIMgO3rCtI',
  authDomain: 'exo-code.firebaseapp.com',
  projectId: 'exo-code',
  storageBucket: 'exo-code.appspot.com',
  messagingSenderId: '1058079447675',
  appId: '1:1058079447675:web:a8a6c524a829fb1f4160de',
  databaseURL:
    'https://exo-code-default-rtdb.europe-west1.firebasedatabase.app',
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getDatabase(app);

auth.onAuthStateChanged(user => {
  if (user) {
    // User is signed in
    const uid = user.uid;
    const email = user.email;
    const displayName = user.displayName;
    const photoURL = user.photoURL;

    console.log('Signed in user:', uid, email);
  } else {
    // No user is signed in
    console.log('No user is signed in.');
  }
});

// Retrieve data from the node once
const nodeRef = ref(db, 'coctails/id1');

onValue(nodeRef, snapshot => {
  const data = snapshot.val();
  console.log(data);
  //updateStarCount(postElement, data);
});

var dataForm = document.getElementById('data-form');
var dataList = document.getElementById('data-list');
var loginForm = document.getElementById('login-form');
var createBtn = document.getElementById('create-btn');
var loginBtn = document.getElementById('login-btn');
var logoutBtn = document.getElementById('logout-btn');
var saveBtn = document.getElementById('save-btn');
var dataInput = document.getElementById('data-input');
var emailInput = document.getElementById('email');
var passwordInput = document.getElementById('password');
var emailInput1 = document.getElementById('email1');
var passwordInput1 = document.getElementById('password1');
var errorMessage = document.getElementById('error-message');

createBtn.addEventListener('click', function () {
  const email = emailInput1.value;
  const password = passwordInput1.value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // User account created successfully
      const user = userCredential.user;
      console.log('User account created:', user.uid);
    })
    .catch(error => {
      // An error occurred while creating user account
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error creating user account:', errorMessage);
      console.error('errorCode:', errorCode);
    });
});

loginBtn.addEventListener('click', function () {
  var email = emailInput.value;
  var password = passwordInput.value;

  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // User signed in successfully
      const user = userCredential.user;
      console.log('User signed in:', user.uid);
    })
    .catch(error => {
      // An error occurred while signing in
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error signing in:', errorMessage);
    });
});

logoutBtn.addEventListener('click', function () {
  signOut(auth)
    .then(() => {
      // User signed out successfully
      console.log('User signed out!');
    })
    .catch(error => {
      // An error occurred while signing out
      console.error('Error signing out:', error);
    });
});

saveBtn.addEventListener('click', function () {
  const user = auth.currentUser;

  console.log(user);

  const taskRef = ref(db, 'coctails/id1');
  set(taskRef, {
    title: 'Margarita',
    description: 'Text',
    assignedUser: user.uid,
  });
  console.log('Data added to database!');
});

() => {
  onAuthStateChanged(auth, user => {
    if (user) {
      const uid = user.uid;
    } else {
      // User is signed out
      // ...
    }
  });
};

// var taskRef = firebase.database().ref('tasks/task1');

// taskRef.remove()
//   .then(function() {
//     console.log('Node removed successfully!');
//   })
//   .catch(function(error) {
//     console.error('Error removing node:', error);
//   });

// Check if the node exists
// taskRef.once('value')
//   .then(function(snapshot) {
//     if (snapshot.exists()) {
//       console.log('Node exists!');
//     } else {
//       console.log('Node does not exist!');
//     }
//   })
//   .catch(function(error) {
//     console.error('Error checking node:', error);
//   });
