const { login } = require("./login");

describe("Login function", () => {

    test("Đăng nhập thành công với username và password đúng", () => {
        expect(login("admin", "123")).toBe(true);
    });

    test("Đăng nhập thất bại với password sai", () => {
        expect(login("admin", "456")).toBe(false);
    });

    test("Đăng nhập thất bại với username sai", () => {
        expect(login("user", "123")).toBe(false);
    });

});
