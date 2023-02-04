const KEY_UID: string = 'uid';
const KEY_ID_IMG_USER = 'id-img-user';
const KEY_URL_IMG = 'url-img';

export const setUidInLocalStor = (id: string): void => {
  const uid = JSON.stringify(id);
  window.localStorage.setItem(KEY_UID, uid);
};

export const getUidFromLocalStor = (): string => {
  const uid = window.localStorage.getItem(KEY_UID);
  return JSON.parse(uid);
};

export const setIdImgUserInLocalStor = (id: string): void => {
  const imgId = JSON.stringify(id);
  window.localStorage.setItem(KEY_ID_IMG_USER, imgId);
};

export const setUrlImgInLocalStor = (url: string): void => {
  const urlImg = JSON.stringify(url);
  window.localStorage.setItem(KEY_URL_IMG, urlImg);
};

export const getUrlFromLocalStor = (): string => {
  const url = window.localStorage.getItem(KEY_URL_IMG);
  return JSON.parse(url);
};
