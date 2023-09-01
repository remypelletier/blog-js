import { axios } from "axios";

const login = (login, password) => {
  axios
    .post("", {
      login: login,
      password: password,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export { login };
