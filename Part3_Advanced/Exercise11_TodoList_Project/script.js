const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// 1. Tải danh sách từ LocalStorage khi trang vừa load
let todos = JSON.parse(localStorage.getItem('myTodos')) || []; // Nếu chưa có thì là mảng rỗng
renderTodos(); // Hiển thị ra màn hình

// 2. Hàm lưu vào LocalStorage
function saveToStorage() {
    localStorage.setItem('myTodos', JSON.stringify(todos));
}

// 3. Hàm hiển thị (Render)
function renderTodos() {
    todoList.innerHTML = ''; // Xóa hết danh sách cũ để render lại

    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${todo}</span>
            <button class="delete-btn" onclick="deleteTodo(${index})">Xóa</button>
        `;
        todoList.appendChild(li);
    });
}

// 4. Hàm thêm công việc
function addTodo() {
    const text = input.value.trim(); // Lấy nội dung và xóa khoảng trắng thừa
    if (text === '') return; // Nếu rỗng thì không làm gì

    todos.push(text); // Thêm vào mảng
    saveToStorage(); // Lưu lại
    renderTodos(); // Vẽ lại giao diện
    input.value = ''; // Xóa trắng ô input
    input.focus(); // Focus lại vào ô input
}

// 5. Hàm xóa công việc
// Cần gán vào window object để gọi được từ attribute onclick trong HTML
window.deleteTodo = function (index) {
    todos.splice(index, 1); // Xóa 1 phần tử tại vị trí index
    saveToStorage();
    renderTodos();
}

// Lắng nghe sự kiện click thêm
addBtn.addEventListener('click', addTodo);

// Lắng nghe phím Enter
input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTodo();
    }
});
