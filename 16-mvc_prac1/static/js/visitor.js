// front js

// tbody 요소, button-group 요소를 선택
const tbody = document.querySelector('tbody');
const buttonGroup = document.querySelector('#button-group');

//폼의 [등록] 버튼 클릭시 테이블에 방문데이터 추가
// : 버튼 클릭시 axios로 POST / visitor 요청 날려서 db에 데이터 insert 하기
function createVisitor() {
    const form = document.forms['visitor-form']

    axios({
        method: 'post',
        url:'/visitor',
        data: {
            name: form.name.value,
            comment: form.comment.value,
        }
    }).then((res) => {
        console.log('post/ visitor 요청에 대한 응답', res.data);
        const{ id, name, comment} = res.data; 
        const newVisitor = `
        <tr id="tr_${id}">
        <td>${id}</td>
        <td>${name}</td>
        <td>${comment}</td>
        <td>
          <button type="button">수정</button>
        </td>
        <td>
          <button type="button">삭제</button>
        </td>
      </tr>
      `
      // res: id, name, comment
      //jquery
      // $('tbody').append(newVisitor);
  
  
      //js
      tbody.insertAdjacentHTML('beforeend', newVisitor);
    })
}
