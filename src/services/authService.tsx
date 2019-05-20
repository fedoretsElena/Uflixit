import IUser from "../models/User";

class AuthService {
    user: IUser = {};

    isLogin(): boolean {
        return !!this.user;
    }
}

export default AuthService;
