export const getDataLocalStorage = () => JSON.parse(localStorage.getItem('APIData'));

export const setDataLocalStorage = (data) => {
  localStorage.setItem('APIData', JSON.stringify(data));
};
