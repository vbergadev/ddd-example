"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../../../domain/entities/User");
describe("User Entity", () => {
    it("should create a user entity", () => {
        const user = new User_1.User("1", "John Doe", "john@example.com");
        expect(user.id).toBe("1");
        expect(user.name).toBe("John Doe");
        expect(user.email).toBe("john@example.com");
    });
});
