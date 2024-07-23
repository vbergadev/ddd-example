import { InMemoryUserRepository } from "../../../infrastructure/persistence/InMemoryUserRepository";
import { User } from "../../../domain/entities/User";

describe("InMemoryUserRepository", () => {
  it("should save and find a user by id", async () => {
    const userRepository = new InMemoryUserRepository();
    const user = new User("1", "John Doe", "john@example.com");
    await userRepository.save(user);

    const foundUser = await userRepository.findById("1");
    expect(foundUser).toEqual(user);
  });

  it("should return null for a non-existing user", async () => {
    const userRepository = new InMemoryUserRepository();
    const user = await userRepository.findById("non-existing-id");
    expect(user).toBeNull();
  });
});
