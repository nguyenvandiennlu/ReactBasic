// --- Yêu cầu 1: In số từ 1 đến 10 ---
console.log("=== CÁC SỐ TỪ 1 ĐẾN 10 ===");
for (let i = 1; i <= 10; i++) {
    // In ra cùng 1 dòng cho gọn (process.stdout.write chỉ dùng trong NodeJs, console.log dùng trình duyệt)
    // Ở đây dùng console.log đơn giản
    console.log("Số: " + i);
}

// --- Yêu cầu 2: Tính tổng từ 1 đến n ---
let n = 20;
let sum = 0;

for (let i = 1; i <= n; i++) {
    sum += i; // Cộng dồn i vào sum
    // Tương đương: sum = sum + i
}
console.log("\n=== TỔNG ===");
console.log("Tổng các số từ 1 đến " + n + " là: " + sum);


// --- Yêu cầu 3: Bảng cửu chương ---
let m = 7;
console.log("\n=== BẢNG CỬU CHƯƠNG " + m + " ===");

for (let i = 1; i <= 10; i++) {
    let result = m * i;
    console.log(m + " x " + i + " = " + result);
}
