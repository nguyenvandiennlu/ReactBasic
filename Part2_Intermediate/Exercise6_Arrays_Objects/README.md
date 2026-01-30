# Bài 6: Mảng (Arrays) và Đối tượng (Objects)

## 1. Lý thuyết
### Mảng (Array)
Mảng là một danh sách chứa nhiều giá trị.
```javascript
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]); // Apple
```

### Đối tượng (Object)
Đối tượng chứa các cặp khóa-giá trị (key-value), mô tả thuộc tính của một thực thể.
```javascript
let person = {
  name: "John",
  age: 30
};
console.log(person.name); // John
```

## 2. Bài tập

### Yêu cầu 1: Quản lý sinh viên
Tạo một danh sách sinh viên (mảng chứa các object). Mỗi sinh viên có: `id`, `name`, `age`, `score`.

### Yêu cầu 2: Tìm kiếm
Viết hàm `findBestStudent(students)` trả về sinh viên có điểm số cao nhất.

### Yêu cầu 3: Sắp xếp
Viết hàm `sortStudentsByName(students)` để sắp xếp danh sách sinh viên theo tên (A-Z).
*Gợi ý*: Sử dụng phương thức `sort()` và so sánh chuỗi bằng `localeCompare`.

## 3. Chạy thử
```bash
node solution.js
```
