import { useState } from 'react';

// --- Mock Data (Giả lập Server trả về) ---
const MOCK_WEATHER_DATA = {
    'hanoi': { temp: 25, humidity: 70, condition: 'Mưa nhẹ', icon: '🌧' },
    'hochiminh': { temp: 32, humidity: 60, condition: 'Nắng nóng', icon: '☀️' },
    'danang': { temp: 28, humidity: 65, condition: 'Có mây', icon: '☁️' },
    'london': { temp: 15, humidity: 80, condition: 'Sương mù', icon: '🌫' },
    'tokyo': { temp: 20, humidity: 50, condition: 'Trong xanh', icon: '🌤' },
};

function WeatherInfo({ data, city }) {
    return (
        <div style={{ marginTop: '20px', padding: '20px', border: '1px solid #ddd', borderRadius: '10px', background: '#e0f7fa' }}>
            <h2>{city.toUpperCase()}</h2>
            <div style={{ fontSize: '4rem' }}>{data.icon}</div>
            <p style={{ fontSize: '2rem', margin: '10px 0' }}>{data.temp}°C</p>
            <p>Độ ẩm: {data.humidity}%</p>
            <p>Trạng thái: <strong>{data.condition}</strong></p>
        </div>
    );
}

export default function WeatherApp() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSearch = () => {
        if (!city) return;

        setLoading(true);
        setError('');
        setWeather(null);

        // Giả lập gọi API mất 1 giây
        setTimeout(() => {
            const key = city.toLowerCase().replace(/\s/g, ''); // xóa khoảng trắng, đưa về chữ thường
            const data = MOCK_WEATHER_DATA[key];

            if (data) {
                setWeather(data);
            } else {
                setError('Không tìm thấy thành phố này! (Thử: hanoi, hochiminh, danang, london...)');
            }
            setLoading(false);
        }, 1000);
    };

    return (
        <div style={{ maxWidth: '400px', margin: '50px auto', textAlign: 'center', fontFamily: 'Arial' }}>
            <h1 style={{ color: '#0288d1' }}>Ứng Dụng Thời Tiết</h1>

            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                <input
                    type="text"
                    placeholder="Nhập tên thành phố..."
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    style={{ padding: '10px', width: '70%', borderRadius: '5px', border: '1px solid #ccc' }}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
                <button
                    onClick={handleSearch}
                    style={{ padding: '10px 20px', backgroundColor: '#0288d1', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                >
                    Tìm
                </button>
            </div>

            {loading && <p style={{ marginTop: '20px', color: 'gray' }}>Đang tải dữ liệu...</p>}

            {error && <p style={{ marginTop: '20px', color: 'red' }}>{error}</p>}

            {weather && <WeatherInfo data={weather} city={city} />}
        </div>
    );
}
