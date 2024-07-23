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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const InMemoryUserRepository_1 = require("../persistence/InMemoryUserRepository");
const UserService_1 = require("../../application/services/UserService");
const app = (0, express_1.default)();
exports.app = app;
const userRepository = new InMemoryUserRepository_1.InMemoryUserRepository();
const userService = new UserService_1.UserService(userRepository);
app.get("/user/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield userService.getUserById(req.params.id);
    if (user) {
        res.json(user);
    }
    else {
        res.status(404).send("User not found");
    }
}));
