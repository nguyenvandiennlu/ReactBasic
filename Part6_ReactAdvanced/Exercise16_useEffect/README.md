# Bài 16: useEffect Hook

## 1. Lý thuyết
`useEffect` dùng để xử lý các "side effects" (tác dụng phụ) trong Component, như:
- Gọi API lấy dữ liệu.
- Tương tác trực tiếp với DOM.
- Đặt hẹn giờ (`setTimeout`, `setInterval`).

Cú pháp:
```jsx
useEffect(() => {
  // Code chạy sau khi render
  return () => {
    // Code dọn dẹp (cleanup) chạy trước khi component bị hủy (unmount)
  }
}, [dependencies]); // Mảng phụ thuộc
```

- Không có deps `[]`: Chạy 1 lần duy nhất sau khi mount.
- Có deps `[count]`: Chạy mỗi khi biến `count` thay đổi.

## 2. Bài tập

### Yêu cầu 1: Đồng hồ điện tử
Tạo Component `DigitalClock` hiển thị giờ:phút:giây hiện tại.
- Cập nhật mỗi giây.
- Nhớ dọn dẹp `setInterval` khi component unmount để tránh rò rỉ bộ nhớ.

### Yêu cầu 2: Gọi API User
Tạo Component `UserList` gọi API: `https://jsonplaceholder.typicode.com/users`.
- Hiển thị danh sách tên user.
- Trước khi có dữ liệu hiển thị "Đang tải...", sau khi có thì hiển thị list.

(Xem code mẫu trong `Solution.jsx`).
