import { useState } from 'react';

// --- Yêu cầu 1: Props ---
function StudentCard(props) {
    return (
        <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '10px', width: '200px', margin: '10px' }}>
            <img src={props.avatar} alt="Avatar" style={{ width: '100%', borderRadius: '50%' }} />
            <h3>{props.name}</h3>
            <p>Tuổi: {props.age}</p>
        </div>
    );
}

// --- Yêu cầu 2: State (Counter) ---
function Counter() {
    const [count, setCount] = useState(0);

    const handleDecrease = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div style={{ margin: '20px 0' }}>
            <h3>Counter App</h3>
            <button onClick={handleDecrease}>Giảm (-)</button>
            <span style={{ margin: '0 15px', fontSize: '20px', fontWeight: 'bold' }}>{count}</span>
            <button onClick={() => setCount(count + 1)}>Tăng (+)</button>
        </div>
    );
}

// --- Yêu cầu 3: State (Input) ---
function Greeting() {
    const [name, setName] = useState('');

    return (
        <div style={{ margin: '20px 0', padding: '20px', backgroundColor: '#f0f0f0' }}>
            <h3>Nhập tên của bạn:</h3>
            <input
                type="text"
                placeholder="Nhập tên..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ padding: '8px', width: '200px' }}
            />
            {name && <p style={{ color: 'blue', fontSize: '18px' }}>Xin chào, <strong>{name}</strong>!</p>}
        </div>
    );
}

// --- Component Chính để hiển thị tất cả bài tập ---
export default function App() {
    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <h1>Bài 15: Props & Stats</h1>

            <h2>1. Student Cards (Props)</h2>
            <div style={{ display: 'flex' }}>
                <StudentCard name="Nguyễn Văn A" age={20} avatar="https://via.placeholder.com/150" />
                <StudentCard name="Trần Thị B" age={22} avatar="https://via.placeholder.com/150" />
            </div>

            <hr />

            <h2>2. Counter (State)</h2>
            <Counter />

            <hr />

            <h2>3. Greeting (Input Handling)</h2>
            <Greeting />
        </div>
    );
}
