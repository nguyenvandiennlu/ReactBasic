# Bài 9: Asynchronous JavaScript (Bất đồng bộ)

## 1. Lý thuyết
JavaScript chạy đơn luồng (single-threaded), nhưng có thể xử lý các tác vụ tốn thời gian (đọc file, gọi API) mà không bị chặn (blocking) nhờ cơ chế bất đồng bộ.

### Promise
Đại diện cho một giá trị chưa có ngay lập tức nhưng sẽ có trong tương lai (thành công hoặc thất bại).
```javascript
const myPromise = new Promise((resolve, reject) => {
  // Thực hiện tác vụ...
  if (thanhCong) resolve("OK");
  else reject("Lỗi");
});
```

### Async / Await
Cú pháp mới (ES8) giúp viết code bất đồng bộ trông giống như đồng bộ, dễ đọc hơn.
```javascript
async function getData() {
  try {
    const result = await myPromise;
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
```

## 2. Bài tập

### Yêu cầu 1: Giả lập tải dữ liệu
Viết hàm `downloadData()` trả về một Promise.
- Sau 2 giây (dùng `setTimeout`), Promise sẽ hoàn thành (resolve) với dòng chữ "Tải dữ liệu thành công!".

### Yêu cầu 2: Sử dụng Async/Await
Viết hàm `execute()` dùng `async/await` để gọi `downloadData`.
- In ra "Bắt đầu tải..."
- Chờ hàm tải xong thì in kết quả ra.
- In ra "Kết thúc".

## 3. Chạy thử
```bash
node solution.js
```
