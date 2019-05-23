import IUser from "../../models/User";

class AuthService {
    user: IUser | null = null;

    isLogin(): boolean {
        return !!this.user;
    }
}

export default AuthService;
