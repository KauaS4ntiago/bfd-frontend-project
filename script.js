let produtos = [];

        function renderTabela() {
            const tbody = document.querySelector("#tabelaProdutos tbody");
            tbody.innerHTML = "";

            produtos.forEach((produto, index) => {
                const tr = document.createElement("tr");

                tr.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${produto}</td>
                    <td>
                        <button onclick="atualizarProduto(${index})">Atualizar</button>
                        <button class="remove" onclick="removerProduto(${index})">Remover</button>
                    </td>
                `;
                tbody.appendChild(tr);
            });
        }

        function adicionarProduto() {
            const input = document.getElementById("produtoInput");
            const nome = input.value.trim();

            if (nome) {
                produtos.push(nome);
                input.value = "";
                renderTabela();
            } else {
                alert("Digite um nome válido para o produto!");
            }
        }

        function removerProduto(index) {
            produtos.splice(index, 1);
            renderTabela();
        }

        function atualizarProduto(index) {
            const novoNome = prompt("Digite o novo nome do produto:", produtos[index]);
            if (novoNome && novoNome.trim() !== "") {
                produtos[index] = novoNome.trim();
                renderTabela();
            }
        }

        function ordenarLista() {
            produtos.sort();
            renderTabela();
        }

        function procurarProduto() {
            const nome = prompt("Digite o nome do produto que deseja procurar:");
            if (nome) {
                const index = produtos.findIndex(p => p.toLowerCase() === nome.toLowerCase());
                if (index !== -1) {
                    alert(`Produto encontrado na posição ${index + 1}: ${produtos[index]}`);
                } else {
                    alert("Produto não encontrado!");
                }
            }
        }

        function limparLista() {
            if (confirm("Tem certeza que deseja limpar toda a lista?")) {
                produtos = [];
                renderTabela();
            }
        }