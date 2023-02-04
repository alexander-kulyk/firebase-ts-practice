import { useDispatch, useSelector } from 'react-redux';
import css from './userProfile.module.css';
import img from '../../pictures/no-photo.png';
import { UploudImgModal } from 'components/UploudImgModal/UploudImgModal';
import { useEffect, useState } from 'react';
import { getDownloadURL, getStorage, listAll, ref } from 'firebase/storage';
import {
  setUrlImgInLocalStor,
  getUrlFromLocalStor,
} from 'hooks/useLocalStorage.ts';
import { addImgUser } from 'redux/userImage/sliceUserImg';

export const UserProfile = () => {
  const [urlImg, setUrlImg] = useState('');
  const dispatch = useDispatch();
  const storageFB = getStorage();
  const imagesListRef = ref(storageFB);

  const user = useSelector(state => state.auth.user);
  const imageList = useSelector(state => state.imgUser.imgList);
  const idImgUser = useSelector(state => state.imgUser.idImgUser);

  useEffect(() => {
    const ls = getUrlFromLocalStor();

    console.log('idImgUser', idImgUser === '');
    if (idImgUser === '' && ls !== null) {
      console.log('first');
      setUrlImg(ls);
      return;
    }

    console.log('second');
    const url = async () => {
      await listAll(imagesListRef).then(resp => {
        dispatch(addImgUser(resp.items));
      });
      const item = imageList?.find(item => item._location.path_ === idImgUser);
      console.log('item', item);
      const getUrl = () => {
        getDownloadURL(item).then(url => {
          console.log('url', url);
          setUrlImg(url);
          setUrlImgInLocalStor(url);
        });
      };
      getUrl();
    };
    url();
  }, [dispatch, idImgUser, imageList, imagesListRef, urlImg]);

  return (
    <div className={css.wrapper}>
      <img src={urlImg} alt="user" width="300" />
      <p>Full Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <br />
      <br />
      <br />
      <UploudImgModal />
    </div>
  );
};
