"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Email_1 = require("../../../domain/value-objects/Email");
describe("Email Value Object", () => {
    it("should create a valid email", () => {
        const email = new Email_1.Email("john@example.com");
        expect(email.getValue()).toBe("john@example.com");
    });
    it("should throw an error for an invalid email", () => {
        expect(() => new Email_1.Email("invalid-email")).toThrowError("Invalid email");
    });
});
