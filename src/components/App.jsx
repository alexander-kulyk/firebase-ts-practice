import { ref, uploadBytes, listAll, getDownloadURL } from '@firebase/storage';
//import { useRef } from 'react';
import { useEffect, useState } from 'react';
//import { v4 } from 'uuid';
import { storageFB } from '../firebase';
import '../service/api';
const img1 = '(162).JPEG';

export const App = () => {
  const [imageUload, setImegeUpload] = useState(null);
  const [imageList, setImageList] = useState([]);
  const [urlImg, setUrlImg] = useState('');

  const imagesListRef = ref(storageFB);

  useEffect(() => {
    listAll(imagesListRef).then(resp => setImageList(resp.items));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const uploadImg = e => {
    if (imageUload === null) return;
    const imageRef = ref(storageFB, imageUload.name);
    uploadBytes(imageRef, imageUload).then(() => {
      alert('img uloaded');
    });

    listAll(imagesListRef).then(resp => setImageList(resp.items));
  };

  const item = imageList?.find(item => item._location.path_ === img1);

  if (item === undefined) return;

  const getUrl = params => {
    getDownloadURL(item).then(url => setUrlImg(url));
  };

  getUrl();
  return (
    <div
      style={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <input type="file" onChange={e => setImegeUpload(e.target.files[0])} />
      <button onClick={uploadImg}>upload</button>
      <br />
      <br />
      <img src={urlImg} alt="" width="320" />
    </div>
  );
};

// listAll(imagesListRef).then(resp => {
//   resp.items.forEach(img =>
//     getDownloadURL(img).then(url => setImadeList(url))
//   );
// });
