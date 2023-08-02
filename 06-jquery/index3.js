// console.log(document);
// console.log($(document));

// document.addEventListener('DOMContentLoaded', function() {
//     console.log('문서의 dom 트리가 완성되면 실행되는 이벤트');
// });

// //jquery
// $(document).ready(function() {
//     console.log('ready - 문서 dom 트리가 완성되면 실행되는 이벤트');
// });

// $(function() {
//     console.log('안녕?');
// });


// //2. Mouse Event
// $('.p-msg').click(function() {
//     $('.p-msg').css('color', 'red');
// })

// $('.num').click(function () {
//     $(this).css('color', 'blue');
// })

// $('.num').on('click', function() {
//     $(this).css('color','blue');
// });


//check in js
const nums = document.querySelectorAll('.num');
console.log('nums', nums);
for(let num of nums){
    // console.log('num',num);
    num.addEventListener('click', function() {
        console.log(this);
        this.style.color = 'blue';
    });
}

//mouseover(): 요소에 마우스를 올렷을때
$('.numbers').on('mouseover', function() {
    $(this).css('background-color', 'skyblue');
    $(this).append('<div>handler for .on() called!</div>')
})

$('.div-hover').hover(
    function() {
        $(this).addClass('hover');
    },
    function() {
        $(this).removeClass('hover');
    }
)

$('.div-hover').hover(function() {
    $(this).toggleClass('hover')
})


//scroll()
//윈도우 창을 스크롤할때
// in jquery
// $(window).scroll(function () {
//     console.log('scrolling!!!')
// });

$(window).scroll(function () {
        console.log('scrolling!!!')
    });



//in js
window.addEventListener('scroll', function () {
    console.log('scrolling with js!!!');
});

//3. key event

// 3. Key Event
$('.input-key').on('keydown', function (e) {
    // e: 이벤트 객체
    console.log(e);
    console.log(e.code); // 눌려진 키의 고유 코드
    console.log(e.key); // input에 입력된 값
  
    if (e.code === 'ArrowUp') {
      console.log('⬆');
    } else if (e.code === 'ArrowDown') {
      console.log('⬇');
    } else {
      console.log('others');
    }
  });

  //4. Form event
  $('#todo-form').on('submit', function (e) {
    console.log(e); // 이벤트 객체
    e.preventDefault(); // 이벤트의 기본동작을 막는 메서드
    // 지금 발생한 이벤트가 "submit"이기 때문에 submit 이벤트의 기본 동작인 "새로고침"을 막음
  
    // 퀴즈
    // 1. name 속성값이 todo인 요소를 선택하고 해당 요소의 value를 todo 변수에 저장
    const todo = $('[name="todo"]').val();
    console.log(todo, typeof todo);
    // 2. todos 클래스를 갖는 요소를 선택
    $('.todos').append(`<li>${todo}</li>`);
  
    //    -> li 요소에 todo 변수의 값을 텍스트로 갖게 한 후 todos 클래스 요소에 추가
    // 3. name 속성값이 todo인 요소의 value 초기화
    $('[name="todo"]').val('');
  });

  $('a#inactive').on('click',function(e) {
    e.preventDefault();
    $('#text').append('이링크는 동작하지 않음!');
  })
  
  const btns = document.querySelectorAll('.btn');
  const spans = document.querySelectorAll('.span');

  function setBgColor() {
    this.style.backgroundColor = 'royalblue';
  }

  function setBgColor2(elem, color) {
    elem.style.backgroundColor = color;
  }
  for (let btn of btns) {
    //   btn.addEventListener('click', function () {
    //     console.log(this);
    //     this.style.backgroundColor = 'royalblue';
    //   });
    //   btn.addEventListener('click', setBgColor);
    btn.addEventListener('click', function () {
      setBgColor2(this, 'purple');
    });
  }
  
  for (let span of spans) {
    //   span.addEventListener('click', function () {
    //     console.log(this);
    //     this.style.backgroundColor = 'royalblue';
    //   });
    //   span.addEventListener('click', setBgColor);
    span.addEventListener('click', function () {
      setBgColor2(this, 'yellow');
    });
  }
