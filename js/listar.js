import { listInvestments } from './form.js'



// Função para adicionar a lista na tabela
function createTable() {
    // Seleciona o corpo da tabela
    const tabelaBody = document.querySelector('#tableInvestment tbody');
    listInvestments.forEach(investment => {
        const line = document.createElement('tr');

        const nameInvestment = document.createElement('td');
        nameInvestment.textContent = investment.nameInvestment;
console.log(nameInvestment.textContent)

        const typeInvestment = document.createElement('td');
        typeInvestment.textContent = investment.typeInvestment;

        const valueInvestment = document.createElement('td');
        valueInvestment.textContent = investment.valueInvestment;

        const dateInvestment = document.createElement('td');
        dateInvestment.textContent = investment.dateInvestment;

        line.appendChild(nameInvestment);
        line.appendChild(typeInvestment);
        line.appendChild(valueInvestment);
        line.appendChild(dateInvestment);

        tabelaBody.appendChild(line);
    });
}
window.onload = createTable;
