# Bài 8: Array Methods (Map, Filter, Reduce)

## 1. Lý thuyết
Đây là 3 phương thức quan trọng bậc nhất khi làm việc với React.

### `map()`
Duyệt qua từng phần tử và trả về một mảng mới với các phần tử đã được biến đổi.
```javascript
const nums = [1, 2];
const doubled = nums.map(n => n * 2); // [2, 4]
```

### `filter()`
Lọc các phần tử thỏa mãn điều kiện và trả về mảng mới.
```javascript
const nums = [1, 2, 3, 4];
const evens = nums.filter(n => n % 2 === 0); // [2, 4]
```

### `reduce()`
Duyệt qua mảng và tính toán để trả về một giá trị duy nhất (tổng, tích...).
```javascript
const nums = [1, 2, 3];
const sum = nums.reduce((acc, curr) => acc + curr, 0); // 6
```

## 2. Bài tập

### Yêu cầu 1: Map
Cho mảng số `[1, 2, 3, 4, 5]`. Tạo mảng mới `squaredNumbers` chứa bình phương của các số đó.

### Yêu cầu 2: Filter
Cho danh sách sản phẩm (có id, name, price). Lọc ra các sản phẩm có giá > 100.000 VNĐ.

### Yêu cầu 3: Reduce
Tính tổng tiền của giỏ hàng (danh sách sản phẩm ở trên).

## 3. Chạy thử
```bash
node solution.js
```
