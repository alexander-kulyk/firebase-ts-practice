//import axios from 'axios';
//import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
//import { child, get, getDatabase, ref, set } from 'firebase/database';
import { createAsyncThunk } from '@reduxjs/toolkit';

//const dbRef = ref(getDatabase());

// const userId = 'jACLaH90gSMVZ6d4BOzFkExuQvu2';

// //axios.defaults.baseURL = 'https://phonebook-d4948-default-rtdb.firebaseio.com';

// // const getUsers = async () => {
// //   get(child(dbRef, `users/${userId}`))
// //     .then(snapshot => {
// //       console.log('snapshot.exists()', snapshot.val().number);
// //       console.log('typeof(', typeof snapshot.val().number);
// //       if (snapshot.exists()) {
// //         console.log(snapshot.val());
// //       } else {
// //         console.log('No data available');
// //       }
// //     })
// //     .catch(error => {
// //       console.error(error);
// //     });
// //   //   const resp = await axios.get(`/users/jACLaH90gSMVZ6d4BOzFkExuQvu2`);
// //   //   //const qwer = resp.header('Access-Control-Allow-Origin', '*');
// //   //   console.log('resp', resp);
// // };

// // getUsers();

// const email = 'inegral@gmail.com';
// const password = '1234554321';
export const registerUser = createAsyncThunk(
  'auth/register',
  async (userDetails, thunkAPI) => {
    const { auth, name, email, password } = userDetails;
    try {
      await createUserWithEmailAndPassword(auth, email, password).catch(e =>
        console.log('e', e)
      );

      await updateProfile(auth.currentUser, { displayName: name }).catch(e =>
        console.log('e', e)
      );

      const nameU = auth.currentUser.displayName;
      const emailU = auth.currentUser.email;
      const uid = auth.currentUser.uid;
      const token = auth.currentUser.accessToken;

      return { name: nameU, email: emailU, uid, token };
    } catch (e) {
      console.log('e.message', e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const userIsLogin = createAsyncThunk(
  'auth/login',
  async (userDetails, thunkAPI) => {
    const { auth, email, password } = userDetails;
    try {
      signInWithEmailAndPassword(auth, email, password).catch(e =>
        console.log('e.message', e.message)
      );
    } catch (e) {
      console.log('e.message', e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// export const userIsLogin = (auth, email, password) => {
//   console.log('auth', auth);
//   console.log('email', email);
//   console.log('password', password);

//   const qwerty = signInWithEmailAndPassword(auth, email, password)
//     .then(userCredential => {
//       // Signed in
//       return userCredential.user;
//       // console.log('user', user);
//       // const uid = user.uid;
//       // console.log('uid', uid);
//       // ...
//     })
//     .catch(error => {
//       const errorCode = error.code;
//       console.log('errorCode', errorCode);
//       const errorMessage = error.message;
//       console.log('errorMessage', errorMessage);
//     });

//   console.log('qwerty', qwerty);
// };

// export const registerUser = async (auth, name, email, password) => {
//   try {
//     await createUserWithEmailAndPassword(auth, email, password).catch(e =>
//       console.log('e', e)
//     );

//     await updateProfile(auth.currentUser, { displayName: name }).catch(e =>
//       console.log('e', e)
//     );
//   } catch (error) {}
// };

// createUserWithEmailAndPassword(auth, email, password)
//     .then(userCredential => {
//       // Signed in
//       console.log('userCredential', userCredential);
//       const user = userCredential.user;
//       console.log('user', user);
//       set(ref(getDatabase(), 'users/' + user.uid), {
//         username: name,
//         email: email,
//       });
//       // ...
//     })
//     .catch(error => {
//       const errorCode = error.code;
//       console.log('errorCode', errorCode);
//       const errorMessage = error.message;
//       console.log('errorMessage', errorMessage);
//       // ..
//     });
