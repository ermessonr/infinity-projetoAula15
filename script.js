let contatos = [
    {
        "nome": "Ana",
        "sobrenome": "Silva",
        "telefone": "(11) 98765-4321",
        "email": "ana.silva@example.com"
    },
    {
        "nome": "Carlos",
        "sobrenome": "Santos",
        "telefone": "(21) 91234-5678",
        "email": "carlos.santos@example.com"
    },
    {
        "nome": "Mariana",
        "sobrenome": "Oliveira",
        "telefone": "(31) 99876-5432",
        "email": "mariana.oliveira@example.com"
    },
    {
        "nome": "Ricardo",
        "sobrenome": "Ferreira",
        "telefone": "(41) 92345-6789",
        "email": "ricardo.ferreira@example.com"
    }
]

let listaContatos = document.querySelector('.listaContatos tbody')
let containerContatos = document.querySelector('.containerContatos')
let indiceEdicaoAtual = null;

function listarContatos() {
    try {
        listaContatos.innerHTML = ''
        containerContatos.style.display = 'flex'
        contatos.forEach((elemento, indice) => {
            listaContatos.innerHTML += `
            <tr>
                <th scope="row">${indice + 1}</th>
                <td>${elemento.nome}</td>
                <td>${elemento.sobrenome}</td>
                <td>${elemento.telefone}</td>
                <td>${elemento.email}</td>
                <td><i class="bi bi-pencil" onclick="editarContato(${indice})" data-bs-toggle="modal" data-bs-target="#exampleModal"></i></td>
                <td><i class="bi bi-trash" onclick="removerContato(${indice})"></i></td>
            </tr>
            `
        });
    } catch (error) {
        console.error('Erro ao listar contatos:', error);
        alert('Ocorreu um erro ao listar os contatos. Por favor, tente novamente.');
    }
}

function adicionarContato() {
    try {
        let nome = document.getElementById('modalNome').value
        let sobrenome = document.getElementById('modalSobrenome').value
        let telefone = document.getElementById('modalTelefone').value
        let email = document.getElementById('modalEmail').value

        if (!nome || !sobrenome || !telefone || !email) {
            alert('Todos os campos são obrigatórios.');
            return;
        }

        contatos.push({'nome': nome, 'sobrenome': sobrenome, 'telefone': telefone, 'email': email})
        listarContatos()
        
        document.getElementById('modalNome').value = ''
        document.getElementById('modalSobrenome').value = ''
        document.getElementById('modalTelefone').value = ''
        document.getElementById('modalEmail').value = ''
    } catch (error) {
        console.error('Erro ao adicionar contato:', error);
        alert('Ocorreu um erro ao adicionar o contato. Por favor, tente novamente.');
    }
}

function removerContato(indice) {
    try {
        contatos.splice(indice, 1);
        listarContatos();
    } catch (error) {
        console.error('Erro ao remover contato:', error);
        alert('Ocorreu um erro ao remover o contato. Por favor, tente novamente.');
    }
}

function editarContato(indice) {
    try {
        indiceEdicaoAtual = indice;
        document.getElementById('modalNome').value = contatos[indice].nome;
        document.getElementById('modalSobrenome').value = contatos[indice].sobrenome;
        document.getElementById('modalTelefone').value = contatos[indice].telefone;
        document.getElementById('modalEmail').value = contatos[indice].email;
        document.getElementById('modalActionButton').innerText = 'Salvar';
        document.getElementById('modalActionButton').setAttribute('onclick', 'salvarContatoEditado()');
    } catch (error) {
        console.error('Erro ao editar contato:', error);
        alert('Ocorreu um erro ao editar o contato. Por favor, tente novamente.');
    }
}

function salvarContatoEditado() {
    try {
        let nome = document.getElementById('modalNome').value
        let sobrenome = document.getElementById('modalSobrenome').value
        let telefone = document.getElementById('modalTelefone').value
        let email = document.getElementById('modalEmail').value

        if (!nome || !sobrenome || !telefone || !email) {
            alert('Todos os campos são obrigatórios.');
            return;
        }

        contatos[indiceEdicaoAtual] = {'nome': nome, 'sobrenome': sobrenome, 'telefone': telefone, 'email': email}
        listarContatos()
        
        document.getElementById('modalNome').value = ''
        document.getElementById('modalSobrenome').value = ''
        document.getElementById('modalTelefone').value = ''
        document.getElementById('modalEmail').value = ''
        indiceEdicaoAtual = null;
        
        document.getElementById('modalActionButton').innerText = 'Adicionar';
        document.getElementById('modalActionButton').setAttribute('onclick', 'adicionarContato()');
    } catch (error) {
        console.error('Erro ao salvar contato editado:', error);
        alert('Ocorreu um erro ao salvar o contato editado. Por favor, tente novamente.');
    }
}

function prepararAdicionarContato() {
    try {
        document.getElementById('modalNome').value = '';
        document.getElementById('modalSobrenome').value = '';
        document.getElementById('modalTelefone').value = '';
        document.getElementById('modalEmail').value = '';
        document.getElementById('modalActionButton').innerText = 'Adicionar';
        document.getElementById('modalActionButton').setAttribute('onclick', 'adicionarContato()');
    } catch (error) {
        console.error('Erro ao preparar modal para adicionar contato:', error);
        alert('Ocorreu um erro ao preparar o modal para adicionar contato. Por favor, tente novamente.');
    }
}
