function createTable() {
    // Seleciona o corpo da tabela
    const tabelaBody = document.querySelector('#tableInvestment tbody');
    tabelaBody.innerHTML = ''; // Limpa a tabela antes de adicionar os novos dados

    const listInvestments = JSON.parse(localStorage.getItem('listInvestments')) || [];

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
        btnEdit.id = "btnEdit";
        btnEdit.innerText = "Editar";
        btnEdit.addEventListener('click', () => editInvestment(investment));
        btnEdit.style.backgroundColor = 'green';
        btnEdit.style.color = 'white';
        btnEdit.style.borderRadius = '8px';
        btnEdit.style.fontSize = '16px';
        btnEdit.style.cursor = 'pointer';  
        btnEdit.style.border = 'none';
        btnEdit.style.padding = '6px'

        const btnDelete = document.createElement('button');
        btnDelete.id = "btnDelete";
        btnDelete.innerText = "Deletar";
        btnDelete.addEventListener('click', () => deleteInvestment(investment.idInvestment));
        btnDelete.style.backgroundColor = 'red';
        btnDelete.style.color = 'white';
        btnDelete.style.borderRadius = '8px';
        btnDelete.style.fontSize = '16px';
        btnDelete.style.cursor = 'pointer'; 
        btnDelete.style.border = 'none';
        btnEdit.style.padding = '6px'

        const actions = document.createElement('td');
        actions.appendChild(btnEdit);
        actions.appendChild(btnDelete);

        line.appendChild(idInvestment);
        line.appendChild(nameInvestment);
        line.appendChild(typeInvestment);
        line.appendChild(valueInvestment);
        line.appendChild(dateInvestment);
        line.appendChild(actions);

        tabelaBody.appendChild(line);
    });
}

function editInvestment(investment) {
    // Preencher o formulário com os dados do investimento selecionado
    document.querySelector('#editIdInvestment').value = investment.idInvestment;
    document.querySelector('#editNameInvestment').value = investment.nameInvestment;
    document.querySelector('#editTypeInvestment').value = investment.typeInvestment;
    document.querySelector('#editValueInvestment').value = investment.valueInvestment;
    document.querySelector('#editDateInvestment').value = investment.dateInvestment;
  
    // Mostrar o formulário de edição
    document.querySelector('#editForm').style.display = 'block';
  
    // Submeter o formulário para salvar as alterações
    document.querySelector('#formEditInvestment').onsubmit = function(event) {
      event.preventDefault();
      saveInvestmentChanges();
    };
}

function saveInvestmentChanges() {
    const idInvestment = document.querySelector('#editIdInvestment').value;
    const nameInvestment = document.querySelector('#editNameInvestment').value;
    const typeInvestment = document.querySelector('#editTypeInvestment').value;
    const valueInvestment = document.querySelector('#editValueInvestment').value;
    const dateInvestment = document.querySelector('#editDateInvestment').value;
  
    
    // Buscar o investimento na lista e atualizar seus valores
    const listInvestments = JSON.parse(localStorage.getItem('listInvestments')) || [];
    const investmentIndex = listInvestments.findIndex(inv => inv.idInvestment == idInvestment);
    console.log(investmentIndex)

      listInvestments[investmentIndex] = {
        idInvestment,
        nameInvestment,
        typeInvestment,
        valueInvestment,
        dateInvestment
      };
  
      // Salvar de volta no localStorage
      localStorage.setItem('listInvestments', JSON.stringify(listInvestments));
      
      // Recarregar a tabela com os dados atualizados
      createTable();
  
      // Ocultar o formulário de edição após salvar
      document.querySelector('#editForm').style.display = 'none';
}

function deleteInvestment(idInvestment) {
    const listInvestments = JSON.parse(localStorage.getItem('listInvestments')) || [];
    const updatedList = listInvestments.filter(investment => investment.idInvestment !== idInvestment);
    
    // Salvar a lista atualizada no localStorage
    localStorage.setItem('listInvestments', JSON.stringify(updatedList));
  
    // Recarregar a tabela com a lista atualizada
    createTable();
}

window.onload = createTable;
