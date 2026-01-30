# Bài 4: Hàm (Functions)

## 1. Lý thuyết
Hàm là một khối lệnh được đặt tên, thực hiện một tác vụ cụ thể và có thể tái sử dụng.
```javascript
function tenHam(thamso1, thamso2) {
  // Code xử lý
  return ketQua;
}
```

## 2. Bài tập

### Yêu cầu 1: Kiểm tra số nguyên tố
Viết hàm `isPrime(n)` nhận vào một số nguyên `n`.
- Trả về `true` nếu là số nguyên tố (chỉ chia hết cho 1 và chính nó).
- Trả về `false` nếu không phải.
- *Lưu ý*: 1 không phải là số nguyên tố.

### Yêu cầu 2: Giải phương trình bậc 1
Viết hàm `solveEquation(a, b)` giải phương trình `ax + b = 0`.
- Nếu a = 0 và b = 0 => Vô số nghiệm.
- Nếu a = 0 và b != 0 => Vô nghiệm.
- Nếu a != 0 => x = -b/a.

## 3. Chạy thử
```bash
node solution.js
```
