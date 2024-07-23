import { Email } from "../../../domain/value-objects/Email";

describe("Email Value Object", () => {
  it("should create a valid email", () => {
    const email = new Email("john@example.com");
    expect(email.getValue()).toBe("john@example.com");
  });

  it("should throw an error for an invalid email", () => {
    expect(() => new Email("invalid-email")).toThrowError("Invalid email");
  });
});
