const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
const postList = document.getElementById('post-list');

async function getPosts() {
    try {
        // Xóa nội dung cũ đang có (nếu muốn)
        postList.innerHTML = 'Đang tải...';

        // Gọi API
        const response = await fetch(apiUrl);

        // Kiểm tra nếu lỗi mạng (status không phải 200-299)
        if (!response.ok) {
            throw new Error(`Lỗi HTTP! Status: ${response.status}`);
        }

        // Chuyển dữ liệu sang JSON
        const posts = await response.json();

        // Xóa chữ "Đang tải..."
        postList.innerHTML = '';

        // Lấy 5 bài đầu tiên
        // slice(0, 5) lấy từ index 0 đến 4
        const first5Posts = posts.slice(0, 5);

        // Duyệt qua và hiển thị
        first5Posts.forEach(post => {
            const li = document.createElement('li');
            li.textContent = post.title;
            // Thêm style cho đẹp
            li.style.marginBottom = '10px';
            li.style.fontWeight = 'bold';

            postList.appendChild(li);
        });

    } catch (error) {
        console.error('Lỗi khi tải dữ liệu:', error);
        postList.innerHTML = 'Không thể tải dữ liệu. Xem console để biết chi tiết.';
    }
}
