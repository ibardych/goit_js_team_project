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
  getRemovedMessagePattern,
  loaderPattern,
  getFavoriteIngredientPattern,
} from './common/patterns';
import {
  outputPaginationFirebase,
  outputPaginationIngredients,
} from './common/general';

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
  errorSection: document.querySelector('[data-error-section]'),
  galleryList: document.querySelector('.gallery-list'),
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

    refs.galleryList.innerHTML = '';
    refs.errorSection.classList.toggle('visually-hidden');
    // No user is signed in
    //console.log('No user is signed in.');
  }
});

// Retrieve data from the node once

const nodeRef = ref(db, `favorites`);

onValue(nodeRef, snapshot => {
  const user = auth.currentUser;
  const data = snapshot.val();
  const markupData = [];

  for (uid in data) {
    if (user.uid == uid) {
      if (window.location.pathname == '/favorite-cocktails.html') {
        const cocktails = data[uid].cocktails;
        if (cocktails) {
          for (const cocktailid in cocktails) {
            markupData.push(cocktails[cocktailid].data);
          }
        }

        outputPaginationFirebase(markupData);

        //refs.galleryList.innerHTML = markupData.join('');

        const allButtons = document.querySelectorAll(
          '[data-add-remove-favorite]'
        );
        allButtons.forEach(btn => {
          btn.firstElementChild.textContent = 'Remove';
          btn.setAttribute('data-action', 'delete');
        });
      }

      if (window.location.pathname == '/favorite-ingredients.html') {
        const ingredients = data[uid].ingredients;
        if (ingredients) {
          for (const ingredientid in ingredients) {
            const ingredientData = {
              id: ingredientid,
              title: ingredients[ingredientid].title,
              subtitle: ingredients[ingredientid].subtitle,
            };

            //const markup = getFavoriteIngredientPattern(ingredientData);

            markupData.push(ingredientData);
          }
        }

        outputPaginationIngredients(markupData);

        // refs.galleryList.innerHTML = markupData.join('');
      }
    }
  }
});

const getFirebaseDataByUser = () => {
  let favorites = [];

  const nodeRef = ref(db, `favorites`);

  onValue(nodeRef, snapshot => {
    const user = auth.currentUser;
    const data = snapshot.val();

    for (uid in data) {
      if (user.uid == uid) {
        const cocktails = data[uid].cocktails;
        if (cocktails) favorites['cocktails'] = cocktails;

        const ingredients = data[uid].ingredients;
        if (ingredients) favorites['ingredients'] = ingredients;
      }
    }
  });

  return favorites;
};

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

async function updateDataInFirebase({
  action,
  elementType,
  elementTitle,
  elementSubtitle,
  elementId,
  elementData,
  targetElement,
}) {
  const user = auth.currentUser;

  if (user) {
    const taskRef = ref(
      db,
      `favorites/${user.uid}/${elementType}s/${elementId}`
    );

    try {
      if (action == 'add') {
        await set(taskRef, {
          title: elementTitle,
          subtitle: elementSubtitle || '',
          data: elementData || '',
        });

        refs.modalSuccessfullContent.innerHTML = getAddedMessagePattern({
          type: elementType,
          name: elementTitle,
        });

        if (targetElement.firstElementChild) {
          targetElement.firstElementChild.innerHTML = 'Remove';
        } else {
          targetElement.innerHTML = 'Remove from favorite';
        }

        targetElement.setAttribute('data-action', 'delete');

        console.log('Data successfully written to Firestore!');
      }

      if (action == 'delete') {
        await remove(taskRef);

        refs.modalSuccessfullContent.innerHTML = getRemovedMessagePattern({
          type: elementType,
          name: elementTitle,
        });

        if (targetElement.firstElementChild) {
          targetElement.firstElementChild.innerHTML = 'Add to';
        } else {
          targetElement.innerHTML = 'Add to favorite';
        }
        targetElement.setAttribute('data-action', 'ad');

        console.log('Data successfully removed from Firestore1!');
      }
    } catch (error) {
      console.error('Error writing document: ', error);
    }

    refs.modalSuccessfull.classList.toggle('is-hidden');
  } else {
    refs.modalAuthentication.classList.toggle('is-hidden');
  }
}

export { updateDataInFirebase, getFirebaseDataByUser };
