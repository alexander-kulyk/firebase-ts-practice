import {
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
  getStorage,
} from '@firebase/storage';
import { setIdImgUserInLocalStor } from '../../hooks/useLocalStorage.ts';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addIdImgUser, addImgUser } from 'redux/userImage/sliceUserImg';
import { v4 } from 'uuid';

import '../../firebase';

export const UploudImgModal = () => {
  const [imageUload, setImegeUpload] = useState(null);
  const dispatch = useDispatch();
  //const [imageList, setImageList] = useState([]);
  //const [urlImg, setUrlImg] = useState('');

  const storageFB = getStorage();
  const imagesListRef = ref(storageFB);

  const uploadImg = async () => {
    if (imageUload === null) return;

    const imageRef = ref(storageFB, v4());
    await uploadBytes(imageRef, imageUload).then(resp => {
      dispatch(addIdImgUser(resp.metadata.name));
      setIdImgUserInLocalStor(resp.metadata.name);
    });

    await listAll(imagesListRef).then(resp => {
      dispatch(addImgUser(resp.items));
    });
  };

  // const item = imageList?.find(item => item._location.path_ === idImg);
  // console.log('item', item);

  // if (item === undefined) return;

  // const getUrl = () => {
  //   getDownloadURL(item).then(url => setUrlImg(url));
  // };

  // getUrl();

  return (
    <form>
      <input type="file" onChange={e => setImegeUpload(e.target.files[0])} />
      <button type="button" onClick={uploadImg}>
        upload
      </button>
    </form>
  );
};
//<img src={urlImg} alt="" width="320" />
