export const saveToLocal = (key, value) => {
  window.localStorage.setItem(key, value);
};

// Mire profe, está todo normal
//sí, está bien
//revisemos si el back nos está devolviendo el id
// /Profe,nosotros tenemos un back nuevo, este es el enlace:
// https://codesandbox.io/s/alto-voltaje-backend-db1bo?file=/routes/registro.js

export const getFromLocal = (key) => window.localStorage.getItem(key);

export const removeFromLocal = (key) => {
  window.localStorage.removeItem(key);
};
