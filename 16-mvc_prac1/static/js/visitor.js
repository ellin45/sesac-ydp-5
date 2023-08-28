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
          <button type="button" onclick="deleteVisitor(this, ${id})">삭제</button>
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

    function deleteVisitor(obj, id){
        console.log(obj, id);   
        if(!confirm ('정말로 삭제하나요?')){
            // !false => true
             return ;
        }
       //confirm 창에서 확인 눌면 visitor 데이터 삭제
       // axios 로 delete/ visitor 요청 날려서 db에 데이터 delete 삭제
       axios({
        method: 'delete',
        url: '/visitor',
        data: {
          id: id,
        },
      }).then((res) => {
        console.log('delete /visitor 요청에 대한 응답', res.data);

        alert('삭제 성공!');
        obj.parentElement.parentElement.remove();
      });
    }
