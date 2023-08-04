const db = require("../database/db.json");

exports.login = (req, res) => {
  const { username, password } = req.body;
  const user = db.users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    return res.json({ success: true, message: "Login bem sucedido" });
  } else {
    return res
      .status(401)
      .json({ success: false, message: "Credenciais inválidas" });
  }
};
