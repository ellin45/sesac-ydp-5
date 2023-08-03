$(document).ready(function() {
    let td;

    // td를 클릭하면 날짜를 .date 요소에 표시하고, td를 td 변수에 저장합니다.
    $('td').on('click', function() {
        const date = this.innerText;
        $('.date').val(date);
        td = $(this);
    });

    // .submit 버튼을 클릭하면 content를 td에 추가합니다.
    $('.submit').on('click', function(e) {
        e.preventDefault();

        if (td === undefined) {
            alert('날짜를 선택하세요.');
        } else {
            const content = $('.content').val().trim();
            if (content === '') {
                alert('내용을 입력하세요');
            } else {
                td.append(`<div>${content}</div>`);
                $('.content').val('');
            }
        }
    });
});
