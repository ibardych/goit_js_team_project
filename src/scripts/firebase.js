// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { getDatabase, ref, set, remove, onValue } from 'firebase/database';
import {
  getUserAreaPattern,
  getAddedMessagePattern,
  loaderPattern,
} from './common/patterns';
import { checkWindowWidth } from './common/modals';

const refs = {
  userAreaEl: document.querySelector('[data-user-area]'),
  modalAuthentication: document.querySelector('[data-modal-authentication]'),
  modalSuccessfull: document.querySelector('[data-modal-successfull]'),
  loginBtn: document.querySelector('[data-modal-login-button]'),
  joinBtn: document.querySelector('[data-modal-join-button]'),
  loginForm: document.querySelector('[data-login-form]'),
  joinForm: document.querySelector('[data-join-form]'),
  wellcomeEl: document.querySelector('[data-wellcome]'),
  modalLoader: document.querySelector('[data-modal-authentication-loader]'),
  modalSuccessfullContent: document.querySelector(
    '[data-modal-successfull-content]'
  ),
};

refs.userAreaEl.addEventListener('click', e => {
  if (e.target.hasAttribute('data-logout-button')) {
    logout();
  }
  if (e.target.hasAttribute('data-login-button')) {
    login();
  }
});

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

    refs.userAreaEl.innerHTML = getUserAreaPattern({
      email: user.email,
      authorized: true,
    });

    document
      .querySelector('[data-logout-button]')
      .addEventListener('click', () => {
        logout();
      });

    //console.log('Signed in user:', uid, email);
  } else {
    refs.userAreaEl.innerHTML = getUserAreaPattern({});
    // No user is signed in
    //console.log('No user is signed in.');
  }
});

// Retrieve data from the node once
const nodeRef = ref(db, 'coctails');

onValue(nodeRef, snapshot => {
  const data = snapshot.val();

  for (key in data) {
    const v = data[key][1];
    //console.log(v);
  }

  //console.log(data);
  //updateStarCount(postElement, data);
});

var saveBtn = document.getElementById('save-btn');
var deleteBtn = document.getElementById('delete-btn');
var emailInput = document.getElementById('email');
var passwordInput = document.getElementById('password');
var emailInput1 = document.getElementById('email1');
var passwordInput1 = document.getElementById('password1');

refs.joinBtn.addEventListener('click', function () {
  refs.modalLoader.innerHTML = loaderPattern;
  refs.modalLoader.classList.toggle('visually-hidden');

  const email = refs.joinForm.elements.email.value;
  const password = refs.joinForm.elements.password.value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // User account created successfully
      const user = userCredential.user;
      console.log('User account created:', user.uid);

      refs.wellcomeEl.classList.toggle('visually-hidden');
      refs.joinForm.classList.toggle('visually-hidden');
    })
    .catch(error => {
      // An error occurred while creating user account
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error creating user account:', errorMessage);
      console.error('errorCode:', errorCode);
    })
    .finally(refs.modalLoader.classList.toggle('visually-hidden'));
});

refs.loginBtn.addEventListener('click', function () {
  refs.modalLoader.innerHTML = loaderPattern;
  refs.modalLoader.classList.toggle('visually-hidden');

  const email = refs.loginForm.elements.email.value;
  const password = refs.loginForm.elements.password.value;

  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // User signed in successfully
      const user = userCredential.user;
      console.log('User signed in:', user.uid);

      refs.wellcomeEl.classList.toggle('visually-hidden');
      refs.loginForm.classList.toggle('visually-hidden');
    })
    .catch(error => {
      // An error occurred while signing in
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error signing in:', errorMessage);
    })
    .finally(refs.modalLoader.classList.toggle('visually-hidden'));
});

saveBtn.addEventListener('click', function () {
  const user = auth.currentUser;

  console.log(user);

  const taskRef = ref(db, `coctails/${user.uid}/3`);
  set(taskRef, {
    title: 'Margarita3',
    description: 'Text3іввіа',
    assignedUser: user.uid,
  });
  console.log('Data added to database!');
});

deleteBtn.addEventListener('click', function () {
  const user = auth.currentUser;

  const taskRef = ref(db, `coctails/${user.uid}/3`);

  remove(taskRef);
  console.log('Data removed from database!');
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

function login() {
  refs.joinForm.classList.add('visually-hidden');
  refs.loginForm.classList.remove('visually-hidden');
  refs.modalAuthentication.classList.toggle('is-hidden');

  checkWindowWidth();
}

function logout() {
  signOut(auth)
    .then(() => {
      refs.userAreaEl.innterHTML = getUserAreaPattern({});
    })
    .catch(error => {
      // An error occurred while signing out
      console.error('Error signing out:', error);
    });
}

function addDataToFirebase({
  elementType,
  elementTitle,
  cocktailId,
  ingredietId,
  elementData,
}) {
  auth.onAuthStateChanged(user => {
    const cocktailname = 'Test';
    if (user) {
      refs.modalSuccessfullContent.innerHTML = getAddedMessagePattern({
        type: elementType,
        name: elementTitle,
      });
      refs.modalSuccessfull.classList.toggle('is-hidden');
    } else {
      refs.modalAuthentication.classList.toggle('is-hidden');
    }
  });
}

export { addDataToFirebase };
