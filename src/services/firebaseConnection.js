import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
  apiKey: 'AIzaSyBEZBli67sTvrPS-lwiz3gdCVJOoT6Pirs',

  authDomain: 'tarefas-f744f.firebaseapp.com',

  projectId: 'tarefas-f744f',

  storageBucket: 'tarefas-f744f.appspot.com',

  messagingSenderId: '572923064874',

  appId: '1:572923064874:web:8baa872eb96feb9c9a0953',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
