const fs = require("fs");
const path = require("path");
const dbPath = path.join(__dirname, "../database/db.json");

exports.createUser = (newUser) => {
  // Ler o conteúdo do arquivo JSON
  const rawData = fs.readFileSync(dbPath);
  const db = JSON.parse(rawData);

  // Verificar se todos os campos necessários estão presentes
  if (!newUser.name || !newUser.username || !newUser.password) {
    return {
      status: 400,
      message: "Todos os campos do usuário são obrigatórios.",
    };
  }

  // Verificar se o username já está sendo usado por outro usuário
  const usernameExists = db.users.some(
    (user) => user.username === newUser.username
  );
  if (usernameExists) {
    return {
      success: false,
      status: 400,
      message: "O username informado já está em uso. Escolha outro username.",
    };
  }

  // Gerar um novo ID para o usuário
  const lastUserId = db.users.length > 0 ? db.users[db.users.length - 1].id : 0;
  const newUserId = lastUserId + 1;

  // Criar o objeto do novo usuário com o ID gerado
  const user = {
    id: newUserId,
    ...newUser,
  };

  // Adicionar o novo usuário ao banco de dados
  db.users.push(user);

  // Escrever o novo conteúdo no arquivo JSON
  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));

  return {
    status: 201,
    message: "Usuário criado com sucesso.",
    data: user,
  };
};

exports.listUsers = () => {
  try {
    // Ler o conteúdo do arquivo JSON
    const rawData = fs.readFileSync(dbPath);
    console.log(rawData);
    const db = JSON.parse(rawData);

    // Cria uma cópia dos usuários excluindo a senha
    const usersWithoutPassword = db.users.map(({ id, username, name }) => ({
      id,
      username,
      name,
    }));

    return usersWithoutPassword; // Retorna a lista de usuários sem a senha
  } catch (error) {
    console.error("Erro ao listar usuários:", error);
    throw error;
  }
};

exports.updateUser = (userId, updatedUser) => {
  // Ler o conteúdo do arquivo JSON
  const rawData = fs.readFileSync(dbPath);
  const db = JSON.parse(rawData);

  // Encontrar o usuário pelo ID
  const userIndex = db.users.findIndex((user) => user.id === userId);

  if (userIndex === -1) {
    return { success: false, message: "Usuário não encontrado" };
  }

  // Verificar se o username está sendo atualizado
  if (updatedUser.username) {
    const usernameExists = db.users.some(
      (user) => user.username === updatedUser.username
    );
    if (usernameExists) {
      return {
        success: false,
        message: "O username informado já está em uso. Escolha outro username.",
      };
    }
  }

  // Atualizar os dados do usuário
  db.users[userIndex] = { ...db.users[userIndex], ...updatedUser };

  // Escrever o novo conteúdo no arquivo JSON
  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));

  // Retorna o usuário atualizado
  return { success: true, user: db.users[userIndex] };
};

exports.deleteUser = (userId) => {
  // Ler o conteúdo do arquivo JSON
  const rawData = fs.readFileSync(dbPath);
  const db = JSON.parse(rawData);

  // Encontrar o índice do usuário pelo ID
  const userIndex = db.users.findIndex((user) => user.id === userId);

  if (userIndex === -1) {
    return null; // Retorna null caso o usuário não seja encontrado
  }

  // Remover o usuário da lista
  const deletedUser = db.users.splice(userIndex, 1)[0];

  // Escrever o novo conteúdo no arquivo JSON
  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));

  return deletedUser; // Retorna o usuário excluído
};
