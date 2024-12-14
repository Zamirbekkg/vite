import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './page/home';
import Abount from './Page/Abount';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/abount/:id" element={<Abount />} />
      </Routes>

      <nav>
        <Link to="/">Go Home</Link> 
      </nav>
    </BrowserRouter>
  );
}

export default App;
