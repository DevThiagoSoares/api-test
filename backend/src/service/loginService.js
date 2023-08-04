const db = require("../database/db.json");

exports.authenticateUser = (username, password) => {
  const user = db.users.find(
    (user) => user.username === username && user.password === password
  );

  return user; // Retorna o usuário encontrado ou undefined se não houver correspondência
};
