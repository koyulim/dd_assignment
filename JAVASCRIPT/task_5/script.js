// HTML 기초 학습 미션으로 만들었던 개인 소개 웹페이지에 div, p, button 요소를 자바스크립트로 선택하고, innerText나 style 속성을 사용하여 텍스트와 색상을 변경합니다. 
// 예를 들어, 버튼을 클릭하면 문장의 색상이 변경되도록 이벤트 리스너를 추가합니다. 
// 결과물로 웹 페이지의 브라우저 콘솔창에서 코드를 실행한 결과가 나오게 캡처하여 스크린샷을 제출합니다.

var chack = true;
var button = document.querySelector('.colorChange');
var background = document.getElementById('blueChange');
var aside = document.querySelector('.aside');
var sections = document.querySelectorAll('.section-title');
var articles = document.querySelectorAll('.article h4');
var footer = document.querySelector('.footer');

button.addEventListener('click', () => {

    if (chack) {
        background.style.backgroundColor = '#85b0ff';
        background.style.borderColor = '#85b0ff';
        aside.style.backgroundColor = '#85b0ff';
        aside.style.color = '#fff';
        footer.style.backgroundColor = '#85b0ff';
        sections.forEach((section) => {
            section.style.color = '#85b0ff';
            section.style.borderColor = '#85b0ff';
        });

        articles.forEach((article) => {
            article.style.color = '#85b0ff';
        });

        button.innerText = "색상 복구";
        chack = false;

    } else {
        background.style.backgroundColor = '#333';
        background.style.borderColor = '#333';
        aside.style.backgroundColor = '#fff';
        aside.style.color = '#333';
        footer.style.backgroundColor = '#333';
        sections.forEach((section) => {
            section.style.color = '#333';
            section.style.borderColor = '#333';
        });

        articles.forEach((article) => {
            article.style.color = '#333';
        });

        button.innerText = "색상 복구";
        chack = true;
    }
});

