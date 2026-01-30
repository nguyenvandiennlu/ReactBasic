// --- Yêu cầu 1: Arrow Function ---

// Hàm kiểm tra SNT (dạng rút gọn)
const isPrime = (n) => {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
};

// Hàm giải phương trình bậc 1
const solveEquation = (a, b) => {
    if (a === 0) return b === 0 ? "Vô số nghiệm" : "Vô nghiệm";
    return `Nghiệm x = ${-b / a}`;
};

console.log("Kiểm tra SNT (17):", isPrime(17));
console.log("Giải phương trình (2x - 4 = 0):", solveEquation(2, -4));


// --- Yêu cầu 2: Template Literals ---
const person = { name: "Minh", age: 25 };

const introduce = (p) => {
    return `Xin chào, mình là ${p.name}, năm nay ${p.age} tuổi.`;
};

console.log(introduce(person));


// --- Yêu cầu 3: Destructuring ---
const book = { title: "Lập trình JavaScript", author: "Nguyen Van A", year: 2024 };

// Lấy title và author từ object book
const { title, author } = book;

console.log("Thông tin sách:");
console.log(`Tên sách: ${title}`);
console.log(`Tác giả: ${author}`);
