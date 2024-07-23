import { UserService } from "../../../application/services/UserService";
import { InMemoryUserRepository } from "../../../infrastructure/persistence/InMemoryUserRepository";
import { User } from "../../../domain/entities/User";

describe("UserService", () => {
  it("should get a user by id", async () => {
    const userRepository = new InMemoryUserRepository();
    const userService = new UserService(userRepository);
    const user = new User("1", "John Doe", "john@example.com");
    await userRepository.save(user);

    const foundUser = await userService.getUserById("1");
    expect(foundUser).toEqual(user);
  });

  it("should return null for a non-existing user", async () => {
    const userRepository = new InMemoryUserRepository();
    const userService = new UserService(userRepository);

    const user = await userService.getUserById("non-existing-id");
    expect(user).toBeNull();
  });
});
