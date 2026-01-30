import { useState, useEffect } from 'react';

// --- Yêu cầu 1: Đồng hồ điện tử ---
function DigitalClock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        // Thiết lập interval chạy mỗi giây
        const timerId = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
            console.log('Clock tick...'); // Để kiểm tra xem nó có chạy không
        }, 1000);

        // Dọn dẹp (Cleanup function)
        return () => {
            clearInterval(timerId);
            console.log('Clock stopped');
        };
    }, []); // [] rỗng => Chỉ chạy 1 lần khi mount

    return (
        <div style={{ fontSize: '2rem', fontWeight: 'bold', margin: '20px' }}>
            {time}
        </div>
    );
}

// --- Yêu cầu 2: Gọi API User ---
function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Gọi API
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data);
                setLoading(false); // Đã tải xong
            })
            .catch(err => console.error(err));
    }, []);

    if (loading) return <p>Đang tải danh sách user...</p>;

    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.name} - {user.email}</li>
            ))}
        </ul>
    );
}

export default function App() {
    const [showClock, setShowClock] = useState(true);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Bài 16: useEffect Hook</h1>

            <h2>1. Digital Clock</h2>
            <button onClick={() => setShowClock(!showClock)}>
                {showClock ? 'Ẩn đồng hồ' : 'Hiện đồng hồ'}
            </button>
            {showClock && <DigitalClock />}

            <hr />

            <h2>2. User List (API)</h2>
            <UserList />
        </div>
    );
}
