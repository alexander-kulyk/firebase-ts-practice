import axios from 'axios';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { child, get, getDatabase, ref } from 'firebase/database';

const dbRef = ref(getDatabase());
const userId = 'jACLaH90gSMVZ6d4BOzFkExuQvu2';

axios.defaults.baseURL = 'https://phonebook-d4948-default-rtdb.firebaseio.com';

const getUsers = async () => {
  get(child(dbRef, `users/${userId}`))
    .then(snapshot => {
      console.log('snapshot.exists()', snapshot.val().number);
      console.log('typeof(', typeof snapshot.val().number);
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log('No data available');
      }
    })
    .catch(error => {
      console.error(error);
    });
  //   const resp = await axios.get(`/users/jACLaH90gSMVZ6d4BOzFkExuQvu2`);
  //   //const qwer = resp.header('Access-Control-Allow-Origin', '*');
  //   console.log('resp', resp);
};

getUsers();

const auth = getAuth();

const email = 'inegral@gmail.com';
const password = '1234554321';
//const name = 'Alex';

const userIsLogin = () => {
  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
      console.log('user', user);
      const uid = user.uid;
      console.log('uid', uid);
      // ...
    })
    .catch(error => {
      const errorCode = error.code;
      console.log('errorCode', errorCode);
      const errorMessage = error.message;
      console.log('errorMessage', errorMessage);
    });
};

userIsLogin();
