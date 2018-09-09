const localStorageProvider =  {
  get: (key) => {
    window.localStorage.getItem(key);
  },
  set: (key, value) => {
    window.localStorage.setItem(key, value);
  },
};

export default localStorageProvider;