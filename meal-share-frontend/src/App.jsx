import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import './App.css';

function App() {
    return (
        <div className="app-container"> {/* Single parent div wrapping everything */}


            <Navbar /> {/* Displays a navigation bar */}

            <div className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
