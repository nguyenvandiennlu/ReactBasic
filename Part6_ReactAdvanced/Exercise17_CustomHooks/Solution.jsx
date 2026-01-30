import { useState, useEffect } from 'react';

// --- Khai báo Custom Hook ---
function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        // Hàm xử lý
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        // Lắng nghe sự kiện resize
        window.addEventListener('resize', handleResize);

        // Cleanup: gỡ bỏ sự kiện khi component hủy
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
}

// --- Sử dụng trong Component ---
export default function App() {
    const size = useWindowSize();

    return (
        <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0' }}>
            <div style={{ padding: '40px', background: 'white', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                <h1>Bài 17: Custom Hook</h1>
                <p style={{ fontSize: '1.5rem' }}>
                    Chiều rộng: <strong>{size.width}px</strong>
                </p>
                <p style={{ fontSize: '1.5rem' }}>
                    Chiều cao: <strong>{size.height}px</strong>
                </p>
                <p>Thử co giãn cửa sổ trình duyệt để xem kết quả!</p>
            </div>
        </div>
    );
}
