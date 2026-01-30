// --- Yêu cầu 1: Kiểm tra số nguyên tố ---

function isPrime(n) {
    if (n < 2) return false; // Số nhỏ hơn 2 không phải SNT

    // Duyệt từ 2 đến căn bậc 2 của n
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false; // Nếu chia hết cho số khác => ko phải SNT
        }
    }
    return true;
}

// Test thử hàm isPrime
console.log("=== KIỂM TRA SỐ NGUYÊN TỐ ===");
let num1 = 17;
let num2 = 20;
console.log(num1 + " là SNT? " + isPrime(num1));
console.log(num2 + " là SNT? " + isPrime(num2));


// --- Yêu cầu 2: Giải phương trình bậc 1: ax + b = 0 ---

function solveEquation(a, b) {
    console.log("\nGiải phương trình: " + a + "x + " + b + " = 0");

    if (a === 0) {
        if (b === 0) {
            return "Phương trình có VÔ SỐ nghiệm.";
        } else {
            return "Phương trình VÔ NGHIỆM.";
        }
    } else {
        let x = -b / a;
        return "Nghiệm x = " + x;
    }
}

// Test thử hàm giải phương trình
console.log(solveEquation(0, 0));
console.log(solveEquation(0, 5));
console.log(solveEquation(2, -4)); // 2x - 4 = 0 => 2x = 4 => x = 2
