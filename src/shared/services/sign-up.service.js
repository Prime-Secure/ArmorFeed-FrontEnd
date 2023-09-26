import http from "./http-common";

class SignUpService {
    endPoint = "/customers/sign-up";
    create(createDto) {
        return http.post(this.endPoint, createDto);
    }
}

export default new SignUpService();
