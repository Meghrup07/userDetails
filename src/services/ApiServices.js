import axios from "axios";

const apiUrl = " http://localhost:3005";

export const getUsers = async () => {
  return await axios.get(apiUrl + "/userInfo");
};

export const addUser = async (user) => {
  return await axios.post(apiUrl + "/userInfo", user);
};

export const deleteUser = async (id) => {
  return await axios.delete(`${apiUrl + "/userInfo"}/${id}`);
};

export const editUser = async (id, user) => {
  return await axios.put(`${apiUrl + "/userInfo"}/${id}`, user);
};

export const singleUser = async (id) => {
  return await axios.get(`${apiUrl + "/userInfo"}/${id}`);
};
