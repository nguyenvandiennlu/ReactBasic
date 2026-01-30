# Bài 5: DOM Manipulation & Events

## 1. Lý thuyết
**DOM (Document Object Model)** là mô hình các đối tượng trong trang web. JS dùng DOM để thay đổi nội dung, cấu trúc và kiểu dáng của trang web.

### Các phương thức phổ biến:
- `document.getElementById('id')`: Lấy phần tử theo ID.
- `document.querySelector('selector')`: Lấy phần tử theo CSS selector.
- `element.innerHTML = '...'`: Thay đổi nội dung HTML.
- `element.style.color = '...'`: Thay đổi CSS.
- `element.addEventListener('click', function)`: Lắng nghe sự kiện (click, change, submit...).

## 2. Bài tập

### Yêu cầu 1: Đổi màu nền ngẫu nhiên
Tạo một file HTML có 1 nút bấm (Button). Khi click vào nút này, màu nền của trang web sẽ đổi sang một màu ngẫu nhiên.

### Yêu cầu 2: Counter App đơn giản
Tạo giao diện gồm:
- Một số hiển thị giá trị đếm (ban đầu là 0).
- Nút "Giảm" (-).
- Nút "Tăng" (+).
Khi bấm nút, số hiển thị phải thay đổi tương ứng.

## 3. Hướng dẫn chạy
Mở file `index.html` bằng trình duyệt (Chrome, Edge...) để xem kết quả.
