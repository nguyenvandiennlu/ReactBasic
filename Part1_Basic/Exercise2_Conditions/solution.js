// --- Yêu cầu 1: Kiểm tra chẵn lẻ ---
let number = 15;

console.log("Số cần kiểm tra: " + number);

if (number % 2 === 0) {
    console.log(number + " là số CHẴN.");
} else {
    console.log(number + " là số LẺ.");
}

// --- Yêu cầu 2: Xếp loại học lực ---
let score = 7.5; // Điểm số

console.log("\nĐiểm tổng kết: " + score);
console.log("Xếp loại:");

if (score >= 8.0) {
    console.log("GIỎI");
} else if (score >= 6.5) {
    console.log("KHÁ");
} else if (score >= 5.0) {
    console.log("TRUNG BÌNH");
} else {
    console.log("YẾU");
}

// Thử thay đổi giá trị của biến 'number' và 'score' để xem kết quả khác nhau.
