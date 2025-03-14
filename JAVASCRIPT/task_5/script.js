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

