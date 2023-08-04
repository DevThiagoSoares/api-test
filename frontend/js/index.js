function fazerLogin() {
  const url = "http://localhost:3333/login";

  const loginData = {
    username: document.getElementById("usernameId").value,
    password: document.getElementById("passwordId").value,
  };

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData), // Convert loginData to JSON and set it as the body
  };

  $.ajax({
    url: url,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(loginData), // Send the JSON data here
  }).done(function (data) {
    console.log(data);

    if (data.success == true) {
      location.href = "../html/userPage.html";
      alert("certo");
    } else {
      alert(data.message);
    }
  });
}

function fazerCadastro() {
  const url = "http://localhost:3333/users";

  const cadData = {
    username: document.getElementById("userNameCadastroID").value,
    name: document.getElementById("nomeCadastroID").value,
    password: document.getElementById("cadastroPassawordID").value,
  };

  $.ajax({
    url: url,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(cadData), // Send the JSON data here
  }).done(function (data) {
    console.log(data);

    if (data.success) {
      location.href = "../html/userPage.html";
      alert("Cadastro feito com sucesso.");
    } else {
      location.href = "../html/userPage.html";
      alert("Erro ao fazer o cadastro.");
    }
  });
}

function listar() {
  const url = "http://localhost:3333/users";
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao obter os dados da API");
      }
      return response.json();
    })
    .then((data) => {
      if (data.success) {
        exibirLista(data.users);
      } else {
        throw new Error("Erro na resposta da API");
      }
    })
    .catch((error) => {
      console.error("Erro na requisição:", error);
    });
}

function exibirLista(data) {
  const listContainer = document.getElementById("list");
  listContainer.innerHTML = ""; // Limpa o conteúdo anterior

  if (Array.isArray(data)) {
    if (data.length === 0) {
      const emptyMessage = document.createElement("p");
      emptyMessage.textContent = "Nenhum cadastro encontrado.";
      listContainer.appendChild(emptyMessage);
      return;
    }

    data.forEach((item) => {
      const listItem = document.createElement("div");
      listItem.innerHTML = `
      <p>id: ${item.id}</p>
        <p>Nome: ${item.name}</p>
        <p>UserName: ${item.username}</p>
        <button onclick="editarCadastro(${item.id})">Editar</button>
        <button onclick="excluirCadastro(${item.id})">Excluir</button>
        <hr>
      `;
      listContainer.appendChild(listItem);
    });
  } else {
    console.error("Os dados retornados não estão no formato de array.");
  }
}

function editarCadastro(id) {
  const updateData = {
    username: document.getElementById("userNameCadastroID")?.value,
    name: document.getElementById("nomeCadastroID")?.value,
    password: document.getElementById("cadastroPassawordID")?.value,
  };

  const url = `http://localhost:3333/users/${id}`;
  fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao editar o cadastro");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Cadastro editado com sucesso:", data.success);
      // Redirecionar somente se a resposta do servidor indicar sucesso
      if (data.success == true) {
        location.href = "../html/editarCad.html";
        // alert("Cadastro editado com sucesso.");
      } else {
        location.href = "../html/listar.html";
        alert("Erro ao editar o cadastro.");
      }
    })
    .catch((error) => {
      console.error("Erro na requisição de edição:", error);
    });
}

const editForm = document.getElementById("editForm");
if (editForm) {
  editForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    const id = document.getElementById("id").value; // Get the id value from the form input
    editarCadastro(id);
  });
}

function excluirCadastro(id) {
  const url = `http://localhost:3333/users/${id}`;
  $.ajax({
    url: url,
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .done(function (data) {
      console.log(data);

      if (data.success == true) {
        location.href = "../html/userPage.html";
        alert("certo");
      } else {
        alert(data.mensage);
      }
    })
    .fail(function (error) {
      console.error("Erro na requisição:", error);
    });
}
