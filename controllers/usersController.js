import users from "../data/users.js";

const getAllUsers = (req, res) => {
  if (!users.length)
    return res.status(404).json({ message: "Users not found" });
  res.status(200).json({ message: "success", users });
};

const getUser = (req, res) => {
  const { id } = req.params;
  if (!users[id]) return res.status(404).json({ message: "User not found" });
  res.status(200).json({ message: "success", user: users[id] });
};

const updateUser = (req, res) => {
  const { id } = req.params;
  const updatedUser = req.body;
  let existingUser = users[id];
  if (!existingUser) return res.status(404).json({ message: "User not found" });
  users[id] = updatedUser;
  res.status(200).json({ message: "success", user: users[id] });
};

export { getAllUsers, getUser, updateUser };
