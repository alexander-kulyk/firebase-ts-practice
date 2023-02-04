//import { ref, uploadBytes, listAll, getDownloadURL } from '@firebase/storage';
import { Login } from 'pages/Login/Login.tsx';
import { Registration } from 'pages/Registration/Registration.tsx';
import { UserProfile } from 'pages/UserProfile/UserProfile';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from 'Routes/RestrictedRoute/RestrictedRoute';
import { refreshUser } from '../redux/auth/api';
import { Layout } from './Layout/Layout';
import { PrivateRoute } from 'Routes/PrivateRoute/PrivateRoute';
import { ToDo } from 'pages/ToDo/ToDo.tsx';

import '../redux/auth/api';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<div>Home</div>} />
        <Route
          path="user"
          element={
            <PrivateRoute component={<UserProfile />} redirectTo={'/login'} />
          }
        />
        <Route
          path="todo"
          element={<PrivateRoute component={<ToDo />} redirectTo={'/login'} />}
        />
        <Route
          path="login"
          element={
            <RestrictedRoute component={<Login />} ridirectTo={'/user'} />
          }
        />
        <Route
          path="registration"
          element={
            <RestrictedRoute
              component={<Registration />}
              ridirectTo={'/user'}
            />
          }
        />
      </Route>
    </Routes>
  );
};

// listAll(imagesListRef).then(resp => {
//   resp.items.forEach(img =>
//     getDownloadURL(img).then(url => setImadeList(url))
//   );
// });

//const imagesListRef = ref(storageFB);

// useEffect(() => {
//   listAll(imagesListRef).then(resp => setImageList(resp.items));
//   // eslint-disable-next-line react-hooks/exhaustive-deps
// }, []);

// const uploadImg = e => {
//   if (imageUload === null) return;
//   const imageRef = ref(storageFB, imageUload.name);
//   uploadBytes(imageRef, imageUload).then(() => {
//     alert('img uloaded');
//   });

//   listAll(imagesListRef).then(resp => setImageList(resp.items));
// };

// const item = imageList?.find(item => item._location.path_ === img1);

// if (item === undefined) return;

// const getUrl = params => {
//   getDownloadURL(item).then(url => setUrlImg(url));
// };

// getUrl();
