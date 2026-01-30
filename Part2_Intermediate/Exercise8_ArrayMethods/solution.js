// --- Yêu cầu 1: Map (Bình phương) ---
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num);

console.log("Mảng gốc:", numbers);
console.log("Mảng bình phương:", squaredNumbers);


// --- Dữ liệu chung cho Yêu cầu 2 & 3 ---
const products = [
    { id: 1, name: "Áo thun", price: 80000 },
    { id: 2, name: "Quần Jean", price: 250000 },
    { id: 3, name: "Giày Sneaker", price: 1500000 },
    { id: 4, name: "Mũ lưỡi trai", price: 50000 },
    { id: 5, name: "Balo", price: 300000 }
];


// --- Yêu cầu 2: Filter (Lọc giá > 100k) ---
const expensiveProducts = products.filter(product => product.price > 100000);

console.log("\nCác sản phẩm có giá trên 100.000:");
console.log(expensiveProducts);


// --- Yêu cầu 3: Reduce (Tính tổng tiền) ---
// acc (accumulator): biến tích lũy
// curr (current): phần tử hiện tại đang duyệt
const totalMoney = products.reduce((acc, curr) => {
    return acc + curr.price;
}, 0); // 0 là giá trị khởi tạo ban đầu của acc

console.log("\nTổng giá trị đơn hàng:", totalMoney);

// Định dạng tiền tệ VNĐ cho đẹp
const formattedTotal = totalMoney.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
console.log("Tổng tiền (định dạng):", formattedTotal);
