const userService = require("../service/userService");

exports.listUsers = (req, res) => {
  const users = userService.listUsers();
  return res.json({ success: true, users });
};

exports.updateUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const updatedUser = req.body;

  const result = userService.updateUser(userId, updatedUser);

  if (result.success) {
    return res.json({ success: true, user: result.user });
  } else {
    return res.status(404).json({ success: false, message: result.message });
  }
};

exports.createUser = (req, res) => {
  const { username, password, name, email } = req.body;

  const newUser = {
    username,
    password,
    name,
  };

  const result = userService.createUser(newUser);

  if (result.success) {
    return res.status(201).json({ success: true, user: result.data });
  } else {
    return res
      .status(result.status)
      .json({ success: false, message: result.message });
  }
};

exports.deleteUser = (req, res) => {
  const userId = parseInt(req.params.id);

  const deletedUser = userService.deleteUser(userId);

  if (deletedUser === null) {
    return res
      .status(404)
      .json({ success: false, message: "Usuário não encontrado" });
  }

  return res.json({ success: true, user: deletedUser });
};
