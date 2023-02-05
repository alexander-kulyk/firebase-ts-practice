//import axios from 'axios';
import '../../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { child, get, getDatabase, ref, set } from 'firebase/database';
import {
  getUidFromLocalStor,
  setUidInLocalStor,
} from 'hooks/useLocalStorage.ts';
import { createAsyncThunk } from '@reduxjs/toolkit';

//const dbRef = ref(getDatabase());

// //axios.defaults.baseURL = 'https://phonebook-d4948-default-rtdb.firebaseio.com';

// const getUsers = async () => {
//   await get(child(dbRef, `users/${userId}`))
//     .then(snapshot => {
//       console.log('snapshot', snapshot);
//       console.log('snapshot.exists()', snapshot.exists());
//       if (snapshot.exists()) {
//         const qwery = snapshot.val();
//         console.log(qwery.number[0].name);

//         const auth = getAuth();
//         console.log('auth', auth.currentUser);
//       } else {
//         console.log('No data available');
//       }
//     })
//     .catch(error => {
//       console.error(error);
//     });
//   //   const resp = await axios.get(`/users/jACLaH90gSMVZ6d4BOzFkExuQvu2`);
//   //   //const qwer = resp.header('Access-Control-Allow-Origin', '*');
//   //   console.log('resp', resp);
// };

// getUsers();

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

      console.log('auth.currentUser', auth.currentUser);
      const nameU = auth.currentUser.displayName;
      const emailU = auth.currentUser.email;
      const uid = auth.currentUser.uid;
      const token = auth.currentUser.accessToken;

      await set(ref(getDatabase(), 'users/' + uid), {
        name,
        email,
        uid,
        todo: '[]',
        numbers: '[]',
      });

      setUidInLocalStor(uid);

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
    console.log('auth', auth);
    try {
      await signInWithEmailAndPassword(auth, email, password).catch(e =>
        console.log('e.message', e.message)
      );
      console.log('auth.currentUser', auth.currentUser);
      const { displayName: name, email: emailU, uid } = auth.currentUser;
      const token = auth.currentUser.accessToken;

      // signInWithCustomToken(auth, token).then(userCredential => {
      //   // Signed in
      //   const user = userCredential.user;
      //   console.log('user', user);
      //   // ...
      // });
      setUidInLocalStor(uid);

      return { name, email: emailU, uid, token };
    } catch (e) {
      console.log('e.message', e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// .then(userCredential => {
//   // Signed in
//   const user = userCredential.user;
//   console.log('user', user);
//   const uid = user.uid;
// })

export const userLogout = createAsyncThunk(
  'auth/logout',
  async (auth, thunkAPI) => {
    try {
      await signOut(auth);
      console.log('auth.currentUser', auth.currentUser);
      const uid = null;
      setUidInLocalStor(uid);
    } catch (error) {}
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const dbRef = ref(getDatabase());
    const uid = getUidFromLocalStor();

    if (uid === null) return thunkAPI.rejectWithValue('Unable to fetch user');

    try {
      const resp = await get(child(dbRef, `users/${uid}`)).then(snapshot =>
        snapshot.val()
      );
      return resp;
    } catch (e) {
      console.log('e.message', e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
refreshUser();

// const refresh = async () => {
//   const dbRef = ref(getDatabase());

//   const resp = await get(child(dbRef, `users/${userId}`)).then(snapshot =>
//     snapshot.val()
//   );
//   console.log('resp', resp);
// .then(snapshot => {
//   console.log('snapshot', snapshot.val());
//   if (snapshot.exists()) {
//     console.log('snapshot.exists()', snapshot.exists());
//   } else {
//     console.log('No data available');
//   }
// })
// .catch(error => {
//   console.error(error);
// });
// };

// refresh();

// const ACCESS_TOKEN = "eyJhbGciOiJSUzI1NiIsImtpZCI6ImQwNTU5YzU5MDgzZDc3YWI2NDUxOThiNTIxZmM4ZmVmZmVlZmJkNjIiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoibXVtdSIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9waG9uZWJvb2stZDQ5NDgiLCJhdWQiOiJwaG9uZWJvb2stZDQ5NDgiLCJhdXRoX3RpbWUiOjE2NzQyNDI4MDEsInVzZXJfaWQiOiJHMEZOYk9vQUpmVlFBeG1Nam9VZW9XeG0yYnoxIiwic3ViIjoiRzBGTmJPb0FKZlZRQXhtTWpvVWVvV3htMmJ6MSIsImlhdCI6MTY3NDI0MjgwMSwiZXhwIjoxNjc0MjQ2NDAxLCJlbWFpbCI6Im11bXVAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm11bXVAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.ANqUQ_63D5o8t7mkrZ-BuvpPuAOhbt1EJp2iPT_10n7HT1hpNN58ZWzuyMGeQNn-Ys7ViMAlKNJFXRj3vYfp6YlQchQ0B20W3Gjv1-Od2yVFxx-j3weti0RgiyaMgDi5hCc4BTElA5hQzVkuZCP_oyQGnllqKpmcoti_2qiNeIop0iYYQ7rGourL8_vaipqRqH6510ce56JgMOf5g_bE297o0XOxkiitn5SieVdnINKxysoE1pFKph4bTNZvZW2LN_H3DSGAhp08pdDHuAXBYGKSQj4GuE-yybSP7qWelHcqqShaIjF1k0WxiyIlmLoBpC1NYwWa7pt-cQTM_lt2ww"

// const url = `https://phonebook-d4948-default-rtdb.firebaseio.com/users`;
// export const authWithToken = async () => {
//   try {
//     await signInWithCustomToken(auth, ACCESS_TOKEN).then(resp =>
//       console.log('resp', resp)
//     );
//     // const config = {
//     //   url,
//     //   headers: {
//     //     'Access-Control-Allow-Origin':
//     //       'http://localhost:3003/firebase-ts-practice',
//     //   },
//     // };
//     // const resp = await axios.get(config);
//   } catch (error) {}
// };

// authWithToken();
