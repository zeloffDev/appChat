export const setLocalStorageItem = (name: string, value: string) => {
  localStorage.setItem(name, value);
};

export const getLocalStorageItem = (name: string) => {
  if (!name) return null;
  return localStorage.getItem(name);
};

export const deleteLocalStorageItem = (name: string) => {
  localStorage.removeItem(name);
};

export const removeAllLocalStorage = () => localStorage.clear();
