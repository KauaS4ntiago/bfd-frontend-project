// Carrega produtos do localStorage ou cria lista vazia
let produtos = JSON.parse(localStorage.getItem("produtos")) || [];

// Função para atualizar o localStorage sempre que a lista mudar
function salvarLocalStorage() {
    localStorage.setItem("produtos", JSON.stringify(produtos));
}

// Renderiza a tabela de produtos
function renderTabela() {
    const tbody = document.querySelector("#tabelaProdutos tbody");
    if (!tbody) return; // evita erro se não houver tabela nesta página
    tbody.innerHTML = "";
    produtos.forEach((produto, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${produto.nome}</td>
            <td>${produto.preco}</td>
            <td>${produto.categoria}</td>
            <td>${produto.origem}</td>
            <td>${produto.lote}</td>
            <td>${produto.validade}</td>
            <td>
                <button id="atualizar" onclick="atualizarProduto(${index})">Atualizar</button>
                <button id="remover" onclick="removerProduto(${index})">Remover</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// Adicionar produto
function adicionarProduto() {
    const nome = document.getElementById("nomeInput").value.trim();
    const preco = document.getElementById("precoInput").value.trim();
    const categoria = document.getElementById("categoriaInput").value.trim();
    const origem = document.getElementById("origemInput").value.trim();
    const lote = document.getElementById("loteInput").value.trim();
    const validade = document.getElementById("validadeInput").value.trim();

    if (nome && preco && categoria && origem && lote && validade) {
        produtos.push({ nome, preco, categoria, origem, lote, validade });
        salvarLocalStorage();
        renderTabela();

        // Limpa campos
        document.getElementById("nomeInput").value = "";
        document.getElementById("precoInput").value = "";
        document.getElementById("categoriaInput").value = "";
        document.getElementById("origemInput").value = "";
        document.getElementById("loteInput").value = "";
        document.getElementById("validadeInput").value = "";
    } else {
        alert("Preencha todos os campos!");
    }
}

// Remover produto
function removerProduto(index) {
    produtos.splice(index, 1);
    salvarLocalStorage();
    renderTabela();
}

// Atualizar produto
function atualizarProduto(index) {
    const aux = prompt("Digite qual campo deseja atualizar: (nome, preco, categoria, origem, lote, validade)").toLowerCase().trim();
    switch (aux) {
        case "nome":
            const novoNome = prompt("Digite o novo nome: ").trim();
            if (novoNome) produtos[index].nome = novoNome;
            renderTabela();
            break;
        case "preco":
            const novoPreco = prompt("Digite o novo preço: ").trim();
            if (novoPreco) produtos[index].preco = novoPreco;
            renderTabela();
            break;
        case "categoria":
            const novaCategoria = prompt("Digite a nova categoria: ").trim();
            if (novaCategoria) produtos[index].categoria = novaCategoria;
            renderTabela();
            break;
        case "origem":
            const novaOrigem = prompt("Digite a nova origem: ").trim();
            if (novaOrigem) produtos[index].origem = novaOrigem;
            renderTabela();
            break; 
        case "lote":
            const novoLote = prompt("Digite o novo lote: ").trim();
            if (novoLote) produtos[index].lote = novoLote;
            renderTabela();
            break; 
        case "validade":
            const novaValidade = prompt("Digite a nova validade: ").trim();
            if (novaValidade) produtos[index].validade = novaValidade;
            renderTabela();
            break;
        default:
            alert("Campo inválido!");
            return; 
    }
}

// Ordenar tabela
function ordenarLista() {
    produtos.sort((a, b) => {
        const nomeA = a.nome.toLowerCase();
        const nomeB = b.nome.toLowerCase();
        if (nomeA < nomeB) return -1;
        if (nomeA > nomeB) return 1;
        return 0;
    });
    salvarLocalStorage(); 
    renderTabela();       
}

// Procurar produto
function procurarProduto() {
    const termo = prompt("Digite o nome do produto: ").toLowerCase().trim();
    const tbody = document.querySelector("#tabelaProdutos tbody");
    if (!tbody) return;
    tbody.innerHTML = "";
    produtos.forEach((produto, index) => {
        if (produto.nome.toLowerCase().includes(termo) || produto.categoria.toLowerCase().includes(termo)) {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${index + 1}</td>
                <td>${produto.nome}</td>
                <td>${produto.preco}</td>
                <td>${produto.categoria}</td>
                <td>${produto.origem}</td>
                <td>${produto.lote}</td>    
                <td>${produto.validade}</td>
                <td>
                    <button id="atualizar" onclick="atualizarProduto(${index})">Atualizar</button>
                    <button id="remover" onclick="removerProduto(${index})">Remover</button>   
                    <button id="limpar" onclick="renderTabela()">Limpar Busca</button></tfooter>      
                </td>                              
            `;
            tbody.appendChild(tr);
        }   
    });
}

// Limpar lista
function limparLista() {
    if (confirm("Deseja limpar toda a lista de produtos?")) {
        produtos = [];
        salvarLocalStorage();
        renderTabela();
    }
}

// Inicializa tabela ao carregar a página
document.addEventListener("DOMContentLoaded", renderTabela);