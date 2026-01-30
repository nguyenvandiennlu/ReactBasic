// --- Yêu cầu 1: Giới thiệu bản thân ---

// Khai báo biến
let name = "Nguyễn Văn A";
let age = 20;
const address = "Hà Nội"; // Địa chỉ ít thay đổi nên dùng const hoặc let đều được
let hobby = "Lập trình";

// In ra console
// Sử dụng dấu + để nối chuỗi
console.log("=== THÔNG TIN CÁ NHÂN ===");
console.log("Xin chào, tôi là " + name + ".");
console.log("Năm nay tôi " + age + " tuổi.");
console.log("Tôi sống tại " + address + " và sở thích của tôi là " + hobby + ".");

// --- Yêu cầu 2: Tính chỉ số BMI ---

// Số liệu giả định
let weight = 70; // kg
let height = 1.75; // met

// Tính toán
// Math.pow(a, b) là hàm tính lũy thừa a^b
let bmi = weight / (height * height);

// Làm tròn 2 chữ số thập phân bằng .toFixed(2)
console.log("\n=== CHỈ SỐ BMI ===");
console.log("Cân nặng: " + weight + "kg");
console.log("Chiều cao: " + height + "m");
console.log("Chỉ số BMI của bạn là: " + bmi.toFixed(2));
