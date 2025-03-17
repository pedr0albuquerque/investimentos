


// Função para adicionar a lista na tabela
function createTable() {
    // Seleciona o corpo da tabela
    const tabelaBody = document.querySelector('#tableInvestment tbody');
    const listInvestments = JSON.parse(localStorage.getItem('listInvestments')) || [];
    console.log(listInvestments)

    listInvestments.forEach(investment => {
        const line = document.createElement('tr');

        const idInvestment = document.createElement('td');
        idInvestment.textContent = investment.idInvestment;

        const nameInvestment = document.createElement('td');
        nameInvestment.textContent = investment.nameInvestment;

        const typeInvestment = document.createElement('td');
        typeInvestment.textContent = investment.typeInvestment;

        const valueInvestment = document.createElement('td');
        valueInvestment.textContent = investment.valueInvestment;

        const dateInvestment = document.createElement('td');
        dateInvestment.textContent = investment.dateInvestment;

        const btnEdit = document.createElement('button');
        btnEdit.id = "btnEdit"
        btnEdit.innerText = "Editar"

        const btnDelete = document.createElement('button');
        btnDelete.id = "btnDelete"
        btnDelete.innerText = "Deletar"

        const actions = document.createElement('td');
        actions.appendChild(btnEdit)
        actions.appendChild(btnDelete)

        line.appendChild(idInvestment);
        line.appendChild(nameInvestment);
        line.appendChild(typeInvestment);
        line.appendChild(valueInvestment);
        line.appendChild(dateInvestment);
        line.appendChild(actions)

        tabelaBody.appendChild(line);
    });
}
window.onload = createTable;
