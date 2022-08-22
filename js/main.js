
let count = 0;
function selected(e){
    count++
    const playerName = e.parentNode.children[0].innerText
    const ol = document.getElementById('player-list')
    if(count <= 5){
    const li = document.createElement('li')
    li.innerText = playerName
    li.style.margin = '12px 0'
    ol.appendChild(li)
    e.disabled = true;
    }
    else{
        return alert('You Cannot select more than 5 Players')
    }
}
function getInutValue(id){
    const inputField = document.getElementById(id)
    const inputFieldString = inputField.value;
    const inputValue = parseInt(inputFieldString)
    return inputValue
}
document.getElementById('calculate-btn').addEventListener('click', function(){
    
    const currentPerPlayer = getInutValue('per-player')

    const liLength = document.querySelectorAll('#player-list li').length
    if(liLength === 0){
        return alert('please select some player')
    }
    else if(isNaN(currentPerPlayer)){
        return alert('please put some number')
    }
    const totalPlayerExp = currentPerPlayer * liLength
    
    const playerExpenseText = document.getElementById('player-expense');
    playerExpenseText.innerText = totalPlayerExp

})
document.getElementById('calculate-total-btn').addEventListener('click', function(){
   const managerSalary = getInutValue('manager')
   const coachSalary = getInutValue('coach')
   const totalField = document.getElementById('total')
   const playerExpenseString = document.getElementById('player-expense').innerText
   const playerExpense = parseInt(playerExpenseString)
   if(isNaN(managerSalary) || isNaN(coachSalary)){
    return alert('put some number ')
   }
   const total = managerSalary + coachSalary + playerExpense
   totalField.innerText = total
    
})