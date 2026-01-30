# Bài 18: Project Cuối Khóa - Weather App

## 1. Mục tiêu
Xây dựng ứng dụng xem thời tiết hoàn chỉnh sử dụng React.
- **State**: Quản lý input tìm kiếm, dữ liệu thời tiết, trạng thái loading/error.
- **Effect**: Gọi API khi người dùng tìm kiếm.
- **Components**: Chia nhỏ giao diện.

## 2. API Thời tiết
Bạn có thể sử dụng OpenWeatherMap. Cần đăng ký tài khoản miễn phí để lấy API Key.
Hoặc dùng API miễn phí không cần key: `https://api.open-meteo.com/v1/forecast?latitude=21.02&longitude=105.83&current=temperature_2m,relative_humidity_2m,weather_code` (Ví dụ cho Hà Nội).

Nhưng để đơn giản cho bài tập này, chúng ta sẽ **giả lập API** (fake data) trong code để tập trung vào logic React trước.

## 3. Yêu cầu chức năng
1. Ô nhập tên thành phố.
2. Khi bấm "Tìm kiếm" -> Hiện Loading -> Sau 1s hiện kết quả.
3. Kết quả gồm: Tên thành phố, Nhiệt độ, Độ ẩm, Trạng thái (Nắng/Mưa).
4. Nếu nhập tên thành phố lạ -> Báo lỗi "Không tìm thấy".

(Xem code mẫu đầy đủ trong `WeatherApp.jsx`).
