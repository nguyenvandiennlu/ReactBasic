// --- Yêu cầu 1: Gộp mảng (Spread) ---
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// Rải array1 và array2 vào trong array3
const array3 = [...array1, ...array2];

console.log("Mảng 1:", array1);
console.log("Mảng 2:", array2);
console.log("Mảng gộp:", array3);


// --- Yêu cầu 2: Copy và Update Object (Spread) ---
const user = { name: "Nguyen Van A", age: 20 };

// Tạo object mới, rải thuộc tính của user cũ vào, sau đó ghi đè age và thêm email
const userUpdate = {
    ...user,
    age: 21,
    email: "a@gmail.com"
};

console.log("\nUser cũ:", user);
console.log("User mới (đã update):", userUpdate);


// --- Yêu cầu 3: Hàm tính tổng n số (Rest) ---
function sumAll(...numbers) {
    // numbers bây giờ là một mảng chứa tất cả các tham số
    // Dùng reduce để tính tổng
    return numbers.reduce((total, current) => total + current, 0);
}

console.log("\nTổng (1, 2, 3):", sumAll(1, 2, 3));
console.log("Tổng (10, 20, 30, 40, 50):", sumAll(10, 20, 30, 40, 50));
