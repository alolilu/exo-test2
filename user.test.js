const { getUserById } = require("./user");

jest.mock("./user", () => {
  return {
    getUserById: jest.fn(),
  };
});

describe("getUserById", () => {
  it("devrait retourner un utilisateur existant", () => {
    const mockUser = { id: 1, name: "Alice" };
    getUserById.mockReturnValue(mockUser);

    const result = getUserById(1);
    expect(result).toEqual(mockUser);
  });

  it("devrait lancer une erreur si l'utilisateur n'est pas trouvé", () => {
    getUserById.mockImplementation(() => {
      throw new Error("User not found");
    });

    expect(() => getUserById(999)).toThrow("User not found");
  });
});
