const list = document.getElementById('list');
const createBtn = document.getElementById('create-btn');

let todos = [];

createBtn.addEventListener('click', createNewTodo);

// 새로운 투두 생성성
function createNewTodo() {
    // 새로운 아이템 객체 생성하기
    const item = {
        id : new Date().getTime(), 
        text : '', 
        complete : false
    };

    // 배열 처음에 새로운 아이템을 추가
    addTodo(item);

    // 요소 생성하기
    const {itemEl, inputEl} = createTodoElement(item);

    // 리스트 요소 안에 방금 생성한 아이템 요소 추가
    list.prepend(itemEl);
    inputEl.removeAttribute('disabled');
    inputEl.focus();
}

// 데이터를를 배열과 로컬 스토리지에 추가
function addTodo(item) {
    todos.unshift(item);
    saveToLocalStorage();
}

// 데이터 삭제 함수
function removeTodo(id) {
    todos = todos.filter(t => t.id !== id);
    saveToLocalStorage();
}

// 데이터 요소 업데이트 함수
function updateTotoUI(itemEl, checkboxEl, item) {
    if (item.complete) {
        itemEl.classList.add('complete');
    } else {
        itemEl.classList.remove('complete');
    }
    checkboxEl.checked = item.complete;
}

// 이벤트 함수
function addEventListeners({itemEl, inputEl, checkboxEl, editBtnEl, removeBtnEl}, item) {
    checkboxEl.addEventListener('change', () => {
        item.complete = checkboxEl.checked;
        updateTotoUI(itemEl, checkboxEl, item);
        saveToLocalStorage();
    });

    inputEl.addEventListener('blur', () => {
        inputEl.setAttribute('disabled', '');
        saveToLocalStorage();
    });

    inputEl.addEventListener('input', () => {
        item.text = inputEl.value;
    });

    editBtnEl.addEventListener('click', () => {
        inputEl.removeAttribute('disabled');
        inputEl.focus();
    });

    removeBtnEl.addEventListener('click', () => {
        removeTodo(item.id);
        itemEl.remove();

    });
}

// 요소 생성 함수
function createTodoElement(item) {
    const itemEl = document.createElement('div');
    itemEl.classList.add('item');
    
    const checkboxEl = document.createElement('input');
    checkboxEl.type = 'checkbox';

    const inputEl = document.createElement('input');
    inputEl.type = 'text';
    inputEl.value = item.text;
    inputEl.setAttribute('disabled', '');

    const actionsEl = document.createElement('div');
    actionsEl.classList.add('actions');

    const editBtnEl = document.createElement('button');
    editBtnEl.classList.add('material-icons');
    editBtnEl.innerText = 'edit';

    const removeBtnEl = document.createElement('button');
    removeBtnEl.classList.add('material-icons', 'remove-btn');
    removeBtnEl.innerText = 'remove_circles';

    actionsEl.append(editBtnEl);
    actionsEl.append(removeBtnEl);
    itemEl.append(checkboxEl);
    itemEl.append(inputEl);
    itemEl.append(actionsEl);

    updateTotoUI(itemEl, checkboxEl, item);
    addEventListeners({itemEl, inputEl, checkboxEl, editBtnEl, removeBtnEl}, item);

    return {itemEl, inputEl, editBtnEl, removeBtnEl};
}

// 데이터를 로컬 스토리지에 저장하는 함수
function saveToLocalStorage() {
    const data = JSON.stringify(todos);
    window.localStorage.setItem('my_todos', data);
}

// 로컬 스토리지에 있는 데이터 가져오는 함수
function loadFromLocalStorage() {
    const data = localStorage.getItem('my_todos');
    
    if (data) {
        todos = JSON.parse(data);
    }
}

// 데이터를 가져와서 요소로 만들어주는 함수
function displayTodos() {
    loadFromLocalStorage();
    for (let i = 0; i < todos.length; i++) {
        const item = todos[i];
        const {itemEl} = createTodoElement(item);
        list.append(itemEl);
    }
}

createBtn.addEventListener('click', createNewTodo);
displayTodos();