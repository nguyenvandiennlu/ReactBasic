// --- Yêu cầu 1: Hàm giả lập tải dữ liệu (trả về Promise) ---
function downloadData() {
    return new Promise((resolve, reject) => {
        // setTimeout nhận vào một hàm callback và thời gian chờ (ms)
        setTimeout(() => {
            resolve("Tải dữ liệu thành công!");
        }, 2000); // 2 giây
    });
}


// --- Yêu cầu 2: Sử dụng Async/Await ---
async function execute() {
    console.log("1. Bắt đầu tải...");

    try {
        // await chỉ dùng được trong hàm async
        // Nó sẽ dừng code tại đây cho đến khi Promise hoàn thành
        const result = await downloadData();

        console.log("2. " + result);
    } catch (error) {
        console.log("Có lỗi xảy ra:", error);
    }

    console.log("3. Kết thúc quá trình.");
}

// Gọi hàm
execute();

// Lưu ý: Nếu không dùng await, dòng "Kết thúc" sẽ chạy trước khi tải xong.
// Bạn có thể thử bỏ từ khóa await để xem sự khác biệt.
