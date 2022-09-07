const ACCESS_TOKEN = "accessToken";

const getToken = () => localStorage.getItem(ACCESS_TOKEN);
const setToken = (token) => localStorage.setItem(ACCESS_TOKEN, token);
const deleteToken = () => localStorage.removeItem(ACCESS_TOKEN);

export { getToken, setToken, deleteToken };
