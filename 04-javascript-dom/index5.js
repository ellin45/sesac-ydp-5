document.querySelector('#resultBtn').addEventListener('click', () => {
    const value1 = document.querySelector('#value1').value;
    const value2 = document.querySelector('#value2').value;
    const operator = document.querySelector('#operator').value;
    let result = 0;

 
    if (value1 === '' || value2 === '') {
        alert('값을 넣어주세요.');
        return; 
    }

  
    switch (operator) {
        case '+':
            result = Number(value1) + Number(value2);
            break;
        case '-':
            result = Number(value1) - Number(value2);
            break;
        case '*':
            result = Number(value1) * Number(value2);
            break;
        case '/':
            if (value2 === '0') {
                alert('0으로 나눌 수 없습니다.');
                return;
            }
            result = Number(value1) / Number(value2);
            break;
        case '':
            alert('연산자를 입력해주세요.');
            return;
        default:
            alert('입력 가능한 연산자는 +, -, /, * 입니다.');
            return;
    }

    document.querySelector('#result').value = result;
});

document.querySelector('#resetBtn').addEventListener('click', () => {
    document.querySelector('#value1').value = '';
    document.querySelector('#value2').value = '';
    document.querySelector('#operator').value = '';
    document.querySelector('#result').value = '';
});
