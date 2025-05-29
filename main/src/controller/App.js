const form = document.querySelector('#formInvestment');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector('#nameInvestment').value;
  const type = document.querySelector('input[name="typeInvestment"]:checked').value;
  const value = parseFloat(document.querySelector('#valueInvestment').value);
  const date = document.querySelector('#dateInvestment').value;

  if (!name || !type || isNaN(value) || !date) {
    alert("Por favor, preencha todos os campos corretamente.");
    return;
  } else{
      const investment = {
        nameInvestment: name,
        typeInvestment: type,
        valueInvestment: value,
        dateInvestment: date
      }
      console.log(investment);

      fetch("http://localhost:3000", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(investment)
      })
  }
});

const btnList = document.querySelector('#btnList');
btnList.addEventListener("click", () => {
  window.location.href = "Listagem.html";
});