import http from "./http-common";

class SignInService {
    endPoint = "/customers/sign-in";
    login(loginResource) {
        return http.post(this.endPoint, loginResource);
    }
}

export default new SignInService();
