// --- Yêu cầu 1: Đổi màu nền ---

const btnChangeColor = document.getElementById('btn-change-color');

// Hàm tạo màu Hex ngẫu nhiên
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Lắng nghe sự kiện click
btnChangeColor.addEventListener('click', function () {
    const newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
});


// --- Yêu cầu 2: Counter App ---

const counterElement = document.getElementById('counter');
const btnDecrease = document.getElementById('btn-decrease');
const btnIncrease = document.getElementById('btn-increase');

// Biến lưu giá trị hiện tại
let count = 0;

// Xử lý nút Giảm
btnDecrease.addEventListener('click', function () {
    count--; // Giảm 1
    counterElement.textContent = count; // Cập nhật giao diện
});

// Xử lý nút Tăng
btnIncrease.addEventListener('click', function () {
    count++; // Tăng 1
    counterElement.textContent = count; // Cập nhật giao diện
});
