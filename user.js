const usersDB = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

function getUserById(id) {
  const user = usersDB.find((user) => user.id === id);
  if (!user) {
    throw new Error("User not found");
  }
  return user;
}

module.exports = { getUserById };
