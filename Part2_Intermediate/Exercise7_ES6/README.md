# Bài 7: ES6+ Features

## 1. Lý thuyết
ES6 (2015) mang đến nhiều cú pháp mới mạnh mẽ.

### Arrow Function
Cú pháp ngắn gọn hơn cho hàm.
```javascript
const sum = (a, b) => a + b;
```

### Template Literals
Dùng dấu backtick `` ` `` để nội suy chuỗi.
```javascript
let name = "John";
console.log(`Hello, ${name}!`);
```

### Destructuring
Cách trích xuất dữ liệu từ mảng hoặc đối tượng.
```javascript
const user = { id: 1, name: "John" };
const { name } = user;
```

## 2. Bài tập

### Yêu cầu 1: Viết lại hàm
Chuyển đổi các hàm `isPrime` và `solveEquation` ở Bài 4 sang dạng **Arrow Function**.

### Yêu cầu 2: Template Literals
Viết hàm `introduce(person)` nhận vào object person (name, age) và trả về câu giới thiệu dùng Template Literals.

### Yêu cầu 3: Destructuring
Cho object `book = { title: "JS Basic", author: "F8", year: 2023 }`. Sử dụng destructuring để lấy ra `title` và `author` rồi in ra.

## 3. Chạy thử
```bash
node solution.js
```
