
let idx = 0;
const writer = document.getElementById('writer');
const context = document.getElementById('context');
const create = document.getElementById('submit');

document.querySelector('#submit').addEventListener('click',()=>{
    let year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    let day = new Date().getDate() + 1;
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    
    const newTr = document.createElement('tr')
    const newIdx  = document.createElement('td')
    const newWriter = document.createElement('td')
    const newContext = document.createElement('td')
    const newWriteDate = document.createElement('td')

    newIdx.innerHTML = idx + 1;
    idx++;
    newWriter.innerHTML = document.getElementById('writer').value;
    newContext.innerHTML = document.getElementById('context').value;
    newWriteDate.innerHTML = `${year}-${month}-${day}-${hour} : ${minute}`;

    newTr.append(newIdx, newWriter, newContext, newWriteDate);

    document.querySelector('table').append(newTr);

    document.querySelector('#writer').value = '';
    document.querySelector('#context').value = '';

});


