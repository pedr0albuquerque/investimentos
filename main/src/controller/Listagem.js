function loadTable(listInvestments) {
    const tabelaBody = document.querySelector('#tableInvestment tbody');
    tabelaBody.innerHTML = '';

    if(Array.isArray(listInvestments)){
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
        btnEdit.addEventListener('click', () => showFormEdit(investment));
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
}

const getInv = async() => await fetch("http://localhost:3000/investimentos")
.then(response => response.json())
.then(data => {loadTable(data)});

getInv();

let idInvestment = null

function showFormEdit(investment) {
  console.log(investment);
  // Preencher o formulário com os dados do investimento selecionado
  const inputEditName = document.querySelector('#editNameInvestment');
  const inputEditType = document.querySelector('#editTypeInvestment');  
  const inputEditValue = document.querySelector('#editValueInvestment');
  const inputEditDate = document.querySelector('#editDateInvestment');

  inputEditName.value = investment.nameInvestment;
  inputEditType.value = investment.typeInvestment;
  inputEditValue.value = investment.valueInvestment;
  inputEditDate.value = investment.dateInvestment;

  //Passa o id do investimento para a variável global
  idInvestment = investment.idInvestment;

  // Mostrar o formulário de edição
  document.querySelector('#editForm').style.display = 'block';
}

document.querySelector('#editForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const inputEditName = document.querySelector('#editNameInvestment').value;
  const inputEditType = document.querySelector('#editTypeInvestment').value;  
  const inputEditValue = document.querySelector('#editValueInvestment').value;
  const inputEditDate = document.querySelector('#editDateInvestment').value;

  if (!inputEditName || !inputEditType || isNaN(inputEditValue) || !inputEditDate) {
    alert("Por favor, preencha todos os campos corretamente.");
    return;
  }else{
      fetch(`http://localhost:3000/investimentos/atualizar/${idInvestment}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nameInvestment: inputEditName,
          typeInvestment: inputEditType,
          valueInvestment: inputEditValue,
          dateInvestment: inputEditDate
        })
      })
      .then(response => {
        if(response.status === 200){
          alert("Investimento atualizado com sucesso")
          getInv();
        }else{
          alert("Falha ao atualizar investimento");
        }
        document.querySelector('#editForm').style.display = 'none';
      })
    }
});

function deleteInvestment(idInvestment) {
  fetch(`http://localhost:3000/investimentos/deletar/${idInvestment}`, {
    method: 'DELETE'
  })
  .then(response => {
    if(response.status === 200){
      alert("Investimento deletado com sucesso")
      getInv();
    }else{
      alert("Falha ao deletar investimento");
    }
  })
}

window.onload = loadTable;
