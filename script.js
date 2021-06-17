var presupuestoGl = document.getElementById('presupuesto-value')
var presupuestoSemanalInicial = document.getElementById('presupuesto-mensual-container-id')
var restoPresupuestoShow = document.getElementById('resto-container-id')

var restoActual = 0
var presupuestoValue = 0

var showE = () =>{
  presupuestoValue = presupuestoGl.value
  restoActual = presupuestoValue
  presupuestoSemanalInicial.innerHTML = `<span>$ ${presupuestoValue}</span>`
  presupuestoSemanalInicial.setAttribute('class','alert alert-primary')
  restoPresupuestoShow.innerHTML = `<span>$ ${presupuestoValue}</span>`
  restoPresupuestoShow.setAttribute('class', 'alert alert-success')
}

var getOption = () =>{
  let option = document.getElementById('option-id').value
  let optionCost = document.getElementById('option-cost-id').value
  let tableCost = document.getElementById('table-cost-id')
  tableCost.innerHTML += `
  <tr>
    <td>${option}</td>
    <td>$ ${optionCost}</td>
  </tr>`
  restoActual = restoActual -optionCost
  restoPresupuestoShow.innerHTML = `<span>$ ${restoActual}</span>`
  if(restoActual > presupuestoValue*0.5)restoPresupuestoShow.setAttribute('class', 'alert alert-success')
  else if(restoActual <= presupuestoValue*0.5 && restoActual >= presupuestoValue*0.3)restoPresupuestoShow.setAttribute('class', 'alert alert-warning')
  else if(restoActual < presupuestoValue*0.3 && restoActual >= presupuestoValue*0.01)restoPresupuestoShow.setAttribute('class', 'alert alert-danger')
  else{
    alert('Ya no tienes varooooo')
  }
}
