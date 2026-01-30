# Bài 12: ES6 Modules (Import / Export)

## 1. Lý thuyết
Trong các dự án lớn (như React), chúng ta không viết tất cả code trong 1 file. Chúng ta chia nhỏ ra thành nhiều file (module) và kết nối chúng lại.

### Export (Xuất khẩu)
- `export default`: Xuất mặc định (mỗi file chỉ có 1 cái).
- `export const`: Xuất theo tên (có thể có nhiều cái).

### Import (Nhập khẩu)
- `import Name from './file.js'`: Nhập export default.
- `import { name1, name2 } from './file.js'`: Nhập export theo tên.

## 2. Bài tập
1. Tạo file `math.js`:
   - Export hàm tính tổng `sum(a, b)`.
   - Export hàm tính hiệu `subtract(a, b)`.
2. Tạo file `main.js`:
   - Import 2 hàm trên vào.
   - Sử dụng và in kết quả ra màn hình.

## 3. Lưu ý chạy code
Để chạy Modules trong môi trường Node.js thuần, bạn cần tạo file `package.json` có dòng `"type": "module"` (Đã tạo sẵn trong folder này).
Sau đó chạy:
```bash
node main.js
```
