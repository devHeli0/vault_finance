import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Private } from './pages/Private';
import { RequireAuth } from './contexts/Auth/RequireAuth';

function App() {
  return (
    <div className="App">
      <header>
        Cadastro
        <nav>
          <Link to="/">Home</Link>
          <Link to="/private">Private</Link>
        </nav>
      </header>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/private"
          element={
            <RequireAuth>
              <Private />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
