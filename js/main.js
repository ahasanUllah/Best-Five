
let count = 0;
function selected(e){
    count++
    const playerName = e.parentNode.children[0].innerText
    const ol = document.getElementById('player-list')
    if(count <= 5){
        const li = document.createElement('li')
    li.innerText = playerName
    ol.appendChild(li)
    e.disabled = true;
    console.log(e);
    }
    else{
        return alert('You Cannot select more than 5 Players')
    }
}