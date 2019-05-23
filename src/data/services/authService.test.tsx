import AuthService from "./authService";

describe("authService", () => {
    const authService = new AuthService();

    describe("isLogin method", () => {

        it("should return false for not login user", () => {
            expect(authService.isLogin()).toBe(false);
        });

        it("should return true for login user", () => {
            authService.user = { name: 'John' };

            expect(authService.isLogin()).toBe(true);
        });
    });
});

