"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
class Email {
    constructor(email) {
        if (!this.validate(email)) {
            throw new Error("Invalid email");
        }
        this.value = email;
    }
    validate(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(email);
        return isValid;
    }
    getValue() {
        return this.value;
    }
}
exports.Email = Email;
