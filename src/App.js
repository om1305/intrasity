import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import URLPage from './Pages/URLPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<URLPage />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
