import Header from './Header'; // Nhớ import
import Footer from './Footer';

function Content() {
    return (
        <div className="content">
            <h2>Nội dung chính</h2>
            <p>Hôm nay tôi bắt đầu học ReactJS. Component giúp chia nhỏ giao diện.</p>
        </div>
    );
}

function App() {
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <Header />
            <Content />
            <Footer />
        </div>
    );
}

export default App;
