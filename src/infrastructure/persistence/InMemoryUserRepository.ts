import { UserRepository } from "../../domain/repositories/UserRepository";
import { User } from "../../domain/entities/User";

export class InMemoryUserRepository implements UserRepository {
  private users: User[] = [];

  async findById(id: string): Promise<User | null> {
    return this.users.find((user) => user.id === id) || null;
  }

  async save(user: User): Promise<void> {
    this.users.push(user);
  }

  async deleteById(id: string): Promise<void> {
    this.users = this.users.filter((user) => user.id !== id);
  }

  async exists(email: string): Promise<boolean> {
    return this.users.some((user) => user.email === email);
  }
}
