# Bài 15: Props & State

## 1. Props (Properties)
Props là dữ liệu truyền từ Component cha xuống Component con. Props là **read-only** (không được sửa đổi).

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
// Dùng: <Welcome name="Nam" />
```

## 2. State (Trạng thái)
State là dữ liệu nằm bên trong Component, có thể thay đổi theo thời gian (khi người dùng tương tác).
Khi State thay đổi, React sẽ tự động tạo lại (re-render) giao diện.

Dùng Hook `useState`:
```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // 0 là giá trị khởi tạo
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

## 3. Bài tập

### Yêu cầu 1: Props
Tạo Component `StudentCard` nhận vào props: `name`, `age`, `avatar` (link ảnh) và hiển thị thông tin sinh viên đẹp mắt (dùng thẻ Card).

### Yêu cầu 2: State (Counter)
Tạo Component `Counter` có 2 nút Tăng (+) và Giảm (-). Số không được giảm xuống dưới 0.

### Yêu cầu 3: State (Input)
Tạo Component `Greeting` có 1 ô input. Khi người dùng gõ tên vào, hiển thị dòng chữ `Xin chào, [Tên]` ngay bên dưới theo thời gian thực (onChange).

(Xem code giải mẫu trong file `Solution.jsx`).
