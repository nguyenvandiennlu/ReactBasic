# Bài 11: Mini Project - To-Do List

## 1. Mục tiêu
Kết hợp toàn bộ kiến thức JS đã học:
- DOM Manipulation (Thêm, xóa phần tử).
- Events (Click, Enter).
- Array Methods (map, filter - *tùy chọn*).
- **LocalStorage**: Lưu dữ liệu vào trình duyệt để không bị mất khi t reload trang.

## 2. API LocalStorage
- `localStorage.setItem('key', 'value')`: Lưu dữ liệu (chỉ lưu chuỗi).
- `localStorage.getItem('key')`: Lấy dữ liệu.
- `JSON.stringify(object)`: Chuyển object/array thành chuỗi để lưu.
- `JSON.parse(string)`: Chuyển chuỗi về object/array để sử dụng.

## 3. Chức năng yêu cầu
1. Nhập tên công việc vào ô input.
2. Bấm nút "Thêm" (hoặc Enter) -> Công việc hiện xuống danh sách bên dưới.
3. Mỗi công việc có nút "Xóa" bên cạnh. Bấm vào thì xóa dòng đó đi.
4. **Quan trọng**: Khi tải lại trang (F5), danh sách công việc cũ vẫn còn đó.

## 4. Hướng dẫn chạy
Mở file `index.html` bằng trình duyệt.
