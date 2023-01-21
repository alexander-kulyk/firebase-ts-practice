//import { ref, uploadBytes, listAll, getDownloadURL } from '@firebase/storage';
import { Login } from 'pages/Login/Login';
import { Registration } from 'pages/Registration/Registration';
import { UserProfile } from 'pages/UserProfile/UserProfile';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
//import { useRef } from 'react';
//import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
//import { v4 } from 'uuid';
//import { storageFB } from '../firebase';
import '../redux/auth/api';
import { refreshUser } from '../redux/auth/api';
import { Layout } from './Layout/Layout';
//const img1 = '(162).JPEG';

export const App = () => {
  //const [imageUload, setImegeUpload] = useState(null);
  //const [imageList, setImageList] = useState([]);
  //const [urlImg, setUrlImg] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

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
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<div>Home</div>} />
        <Route path="user" element={<UserProfile />} />
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
      </Route>
    </Routes>
  );
};

// listAll(imagesListRef).then(resp => {
//   resp.items.forEach(img =>
//     getDownloadURL(img).then(url => setImadeList(url))
//   );
// });

// {
//   /* <input type="file" onChange={e => setImegeUpload(e.target.files[0])} />
//       <button onClick={uploadImg}>upload</button>
//       <br />
//       <br />
//       <img src={urlImg} alt="" width="320" /> */
// }
