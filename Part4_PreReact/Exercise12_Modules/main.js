// Import Named Export (phải đúng tên, có trong ngoặc nhọn)
import { sum, subtract } from './math.js';

// Import Default Export (tên tùy ý, không có ngoặc nhọn)
import PI_NUMBER from './math.js';

console.log("Tổng 5 + 3 =", sum(5, 3));
console.log("Hiệu 10 - 4 =", subtract(10, 4));
console.log("Số PI =", PI_NUMBER);
