# Bài 14: React Components (Functional Component)

## 1. Giới thiệu & Cài đặt Môi trường
Để chạy code React, bạn cần cài đặt môi trường. Cách nhanh nhất là dùng [Vite](https://vitejs.dev/).

### Bước 1: Tạo dự án
Mở terminal tại thư mục `js-react-course\Part5_ReactBasic` (hoặc thư mục cha) và chạy:
```bash
npm create vite@latest
```
- Đặt tên project: `my-react-app`
- Chọn Framework: `React`
- Chọn Variant: `JavaScript`

### Bước 2: Chạy dự án
```bash
cd my-react-app
npm install
npm run dev
```

## 2. Lý thuyết: Component
Component là các khối xây dựng nên giao diện React (giống như Lego).
- Tên Component **bắt buộc phải viết hoa chữ cái đầu** (ví dụ: `Header`, `Footer`).
- Component trả về JSX (trông giống HTML).

```jsx
function Welcome() {
  return <h1>Hello, React!</h1>;
}
```

## 3. Bài tập
**Yêu cầu**: Hãy tạo 3 file component trong thư mục `src` của dự án bạn vừa tạo:
1. `Header.jsx`: Chứa nội dung `<h1>Đây là Header</h1>`.
2. `Footer.jsx`: Chứa nội dung `<p>Copyright 2024</p>`.
3. `Content.jsx`: Chứa một đoạn văn giới thiệu bản thân.
4. Sửa file `App.jsx` để import và hiển thị 3 component trên theo thứ tự: Header -> Content -> Footer.

(Xem code mẫu trong file `App.jsx` và các file component đi kèm trong thư mục này).
