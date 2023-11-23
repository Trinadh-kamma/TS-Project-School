import  axios from "axios";
const BASE_URL = "http://localhost:8080/api/signup";

class LoginService {
  saveLoginCreds(loginCreds) {
    return axios.post(BASE_URL, loginCreds)
  }
  getLoginCreds() {
    return axios.get(BASE_URL);
  }
}


export default new LoginService();