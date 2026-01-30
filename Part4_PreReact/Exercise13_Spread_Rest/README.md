# Bài 13: Spread (...) & Rest Operator

## 1. Lý thuyết
Dấu ba chấm `...` trong JS có 2 tác dụng chính tùy vào ngữ cảnh.

### Spread Operator (Rải ra)
Dùng để "rải" các phần tử của mảng/object ra. Thường dùng để:
- Sao chép mảng/object (Copy).
- Gộp mảng/object (Merge).
```javascript
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]
```

### Rest Operator (Gom lại)
Dùng trong tham số hàm để gom các tham số dư thừa thành một mảng.
```javascript
function sum(...nums) {
  // nums là mảng chứa tất cả tham số truyền vào
}
```

## 2. Bài tập

### Yêu cầu 1: Gộp mảng (Spread)
Cho 2 mảng `array1 = [1, 2, 3]` và `array2 = [4, 5, 6]`. Tạo `array3` là gộp của 2 mảng trên.

### Yêu cầu 2: Copy Object (Spread)
Cho `user = { name: "A", age: 20 }`.
Tạo `userUpdate` là bản sao của `user` nhưng cập nhật `age` thành 21 và thêm thuộc tính `email: "a@gmail.com"`. *Không được dùng code mutation trực tiếp `user.age = 21`*.

### Yêu cầu 3: Hàm tính tổng n số (Rest)
Viết hàm `sumAll(...)` chấp nhận bất kỳ số lượng tham số nào truyền vào và trả về tổng của chúng.

## 3. Chạy thử
```bash
node solution.js
```
