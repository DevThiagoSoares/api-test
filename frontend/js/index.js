function fazerLogin() {
    const url = 'http://localhost:8080/login'; 
  
    const loginData = {
      Username: document.getElementById('id').value,
      Senha: document.getElementById('id').value
    };
     
    const requestOptions = {
      method: 'POST',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body:JSON.stringify(loginData)
    };
    
    $.ajax({
      url: url,
      method: "POST",
      headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      data: loginData
    })
      .done(function( data ) {
          console.log(data);
      
          if(data.code == '200'){
              alert('certo')
              location.href = "/html/userPage.html"
          }else{
              alert(data.mensage)
          }
      });
}
  
function fazerCadastro(){
    const url = 'http://localhost:8080/cadastro'; 
  
    const cadData = {
      Username: document.getElementById('userNameCadastroID').value,
      nome: document.getElementById('nomeCadastroID').value,
      Senha: document.getElementById('cadastroPassawordID').value
    };
       
    const requestOptions = {
      method: 'POST',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body:JSON.stringify(cadData)
    };

    
    $.ajax({
      url: url,
      method: "POST",
      headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      data: cadData
    })
      .done(function( data ) {
          console.log(data);
      
          if(data.code == '200'){
            location.href = "/html/userPage.html"
            //alert('certo')
          }else{
            alert(data.mensage)
          }
      });
}
     
function listar() {
  const url = 'http://localhost:8080/listar';
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao obter os dados da API');
      }
      return response.json();
    })
    .then(data => {
      exibirLista(data);
    })
    .catch(error => {
      console.error('Erro na requisição:', error);
    });
}

function exibirLista(data) {
  const listContainer = document.getElementById('list');
  listContainer.innerHTML = ''; // Limpa o conteúdo anterior

  if (Array.isArray(data)) {
    if (data.length === 0) {
      const emptyMessage = document.createElement('p');
      emptyMessage.textContent = 'Nenhum cadastro encontrado.';
      listContainer.appendChild(emptyMessage);
      return;
    }

    data.forEach(item => {
      const listItem = document.createElement('div');
      listItem.innerHTML = `
        <p>Nome: ${item.Nome}</p>
        <p>id: ${item.id}</p>
        <p>UserName: ${item.Username}</p>
        <button onclick="editarCadastro(${item.id})">Editar</button>
        <button onclick="excluirCadastro(${item.id})">Excluir</button>
        <hr>
      `;
      listContainer.appendChild(listItem);
    });
  } else {
    console.error('Os dados retornados não estão no formato de array.');
  }
}

function editarCadastro(id) {
  
  const novoCadastro = {
    "nome ":"Novo Nome",
    "Username": "Novo Username",
    "id": id,
    "senha": "Nova senha",
  };

  const url = `http://localhost:8080/editar`; 
  fetch(url, {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: JSON.stringify(novoCadastro)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao editar o cadastro');
      }
      return response.json();
    })
    .then(data => {

      console.log('Cadastro editado com sucesso:', data);
      location.href = "/html/editarCad.html"

    })
    .catch(error => {
      console.error('Erro na requisição de edição:', error);
    });
}

function excluirCadastro(id) {
  const url = `http://localhost:8080/deletar`; 
  $.ajax({
    url: url,
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    data: {
      "id": id
    }
  })
    .done(function( data ) {
        console.log(data);
    
        if(data.code == '200'){
            //alert('certo')
            location.href = "/html/userPage.html"
        }else{
            alert(data.mensage)
        }
    });
}









  
