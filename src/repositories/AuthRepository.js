// import { axios, API_ROUTES } from "@/config/index.js";
import { validationUserExist, validationPassowrd } from "../utils/validationAuth";
export default {
  // De esta forma realizo las peticiones a la api con axios, como voy a trabajar con el localStorage no usare axios.
  // let result = await axios.post(`${API_ROUTES.auth.login}`, data);
  async login(data) {
    let message = null;
    const user = validationUserExist(data.email);

    if (!user) {
      message = {
        text: "Email ó contraseña incorrectos",
        error: 401,
      };
      return message;
    }
   

    const password = validationPassowrd(data.password);

    if (!password) {
      message = {
        text: "Email ó contraseña incorrectos",
        error: 401,
      };
      return message;
    }

    message = {
      text: "Usuario logueado con exito",
      status: 200,
    };

    return message;
  },

  async register(data) {
    let message = null;
    let users = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];

    const user = validationUserExist(data.email);

    if (user) {
      message = {
        text: "Email ya se encuentra registrado",
        status: 419,
      };
      return message;
    }
    
    users.push(data);

    localStorage.setItem("users", JSON.stringify(users));
    message = {
      text: "Usuario registrado con exito",
      status: 200,
    };
    return message;
  },
}