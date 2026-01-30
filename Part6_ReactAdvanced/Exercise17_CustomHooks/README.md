# Bài 17: Custom Hooks

## 1. Lý thuyết
Custom Hook là hàm JS bình thường nhưng có gọi các Hook khác (như `useState`, `useEffect`) bên trong.
Tên Custom Hook bắt buộc bắt đầu bằng `use` (ví dụ: `useWindowSize`, `useFetch`).

Mục đích: Tách logic ra khỏi UI để tái sử dụng ở nhiều component khác nhau.

## 2. Bài tập

### Yêu cầu: useWindowSize
Viết một hook trả về chiều rộng và chiều cao hiện tại của cửa sổ trình duyệt.
- Lắng nghe sự kiện `resize`.
- Cập nhật state mỗi khi kích thước thay đổi.

Sử dụng hook đó trong Component để hiển thị: "Kích thước màn hình: 1920 x 1080".

(Xem code mẫu trong `Solution.jsx`).
