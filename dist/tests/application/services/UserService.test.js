"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserService_1 = require("../../../application/services/UserService");
const InMemoryUserRepository_1 = require("../../../infrastructure/persistence/InMemoryUserRepository");
const User_1 = require("../../../domain/entities/User");
describe("UserService", () => {
    it("should get a user by id", () => __awaiter(void 0, void 0, void 0, function* () {
        const userRepository = new InMemoryUserRepository_1.InMemoryUserRepository();
        const userService = new UserService_1.UserService(userRepository);
        const user = new User_1.User("1", "John Doe", "john@example.com");
        yield userRepository.save(user);
        const foundUser = yield userService.getUserById("1");
        expect(foundUser).toEqual(user);
    }));
    it("should return null for a non-existing user", () => __awaiter(void 0, void 0, void 0, function* () {
        const userRepository = new InMemoryUserRepository_1.InMemoryUserRepository();
        const userService = new UserService_1.UserService(userRepository);
        const user = yield userService.getUserById("non-existing-id");
        expect(user).toBeNull();
    }));
});
