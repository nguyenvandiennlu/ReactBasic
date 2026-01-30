# Bài 10: Fetch API & JSON

## 1. Lý thuyết
**Fetch API** dùng để gửi yêu cầu HTTP (GET, POST...) đến server và nhận phản hồi.
- Kết quả của `fetch()` là một Promise.
- Dữ liệu nhận về thường ở dạng JSON.

Cú pháp cơ bản:
```javascript
fetch('https://api.example.com/data')
  .then(response => response.json()) // Chuyển đổi sang JSON
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

Hoặc dùng Async/Await (Khuyên dùng):
```javascript
const response = await fetch('url');
const data = await response.json();
```

## 2. Bài tập

### Yêu cầu: Lấy danh sách bài viết
Sử dụng API miễn phí: `https://jsonplaceholder.typicode.com/posts`
1. Viết hàm `getPosts()` để lấy dữ liệu từ API trên.
2. Hiển thị tiêu đề (`title`) của **5 bài viết đầu tiên** ra file `index.html`.
   - Tạo thẻ `ul` trong HTML.
   - Thêm các thẻ `li` chứa tiêu đề bài viết vào trong `ul`.

## 3. Chạy thử
Mở file `index.html` bằng trình duyệt.
