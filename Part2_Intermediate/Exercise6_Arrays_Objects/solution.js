// --- Yêu cầu 1: Tạo danh sách sinh viên ---
let students = [
    { id: 1, name: "Nguyen Van A", age: 20, score: 8.5 },
    { id: 2, name: "Tran Thi B", age: 19, score: 9.2 },
    { id: 3, name: "Le Van C", age: 21, score: 6.5 },
    { id: 4, name: "Pham Thi D", age: 20, score: 7.8 },
    { id: 5, name: "Hoang Van E", age: 22, score: 9.2 } // Điểm bằng bạn B
];

console.log("Danh sách sinh viên ban đầu:");
console.log(students);

// --- Yêu cầu 2: Tìm sinh viên điểm cao nhất ---
function findBestStudent(list) {
    if (list.length === 0) return null;

    let bestStudent = list[0];
    for (let i = 1; i < list.length; i++) {
        if (list[i].score > bestStudent.score) {
            bestStudent = list[i];
        }
    }
    return bestStudent;
}

let best = findBestStudent(students);
console.log("\nSinh viên có điểm cao nhất:");
console.log(best);

// --- Yêu cầu 3: Sắp xếp theo tên ---
function sortStudentsByName(list) {
    // Sử dụng slice() để tạo bản sao mảng, tránh thay đổi mảng gốc
    // sort() nhận vào hàm so sánh (a, b)
    return list.slice().sort((a, b) => {
        // Tách tên ra để so sánh chính xác hơn (ví dụ chỉ lấy tên cuối)
        // Nhưng ở mức cơ bản, ta so sánh cả chuỗi họ tên
        return a.name.localeCompare(b.name);
    });
}

let sortedList = sortStudentsByName(students);
console.log("\nDanh sách sau khi sắp xếp tên A-Z:");
console.log(sortedList);
