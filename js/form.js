import { Investment } from './classes/Investimento.js'

const form = document.querySelector('#formInvestment')
let listInvestments = [];
let countInvestments = 0;

if(localStorage.getItem('listInvestments')) {
  let investimentsStoraged = JSON.parse(localStorage.getItem('listInvestments'));
  listInvestments = investimentsStoraged
  countInvestments = investimentsStoraged.length
}

/*evento disparado quando botao do formulario é clicado*/
if(form && form != null){
  form.addEventListener('submit',function(ev){

    /*removendo comportamento padrao do formulario*/ 
    ev.preventDefault()
    
    let idInvestment = countInvestments + 1
    let nameInvestment = document.querySelector('#nameInvestment').value
    let typeInvestment = document.querySelector('input[name="typeInvestment"]:checked').value
    let valueInvestment = parseFloat(document.querySelector('#valueInvestment').value)
    let dateInvestment = document.querySelector('#dateInvestment').value    

    const investment = new Investment(idInvestment,nameInvestment,typeInvestment,valueInvestment,dateInvestment)
    listInvestments.push(investment)
  
    localStorage.setItem('listInvestments', JSON.stringify(listInvestments));
    window.location.href = "telaListar.html";
  })
}
