const KEY_UID = 'uid';

export const setUidInLocalStor = id => {
  const uid = JSON.stringify(id);
  window.localStorage.setItem(KEY_UID, uid);
};

export const getUidFromLocalStor = () => {
  const uid = window.localStorage.getItem(KEY_UID);
  return JSON.parse(uid);
};
