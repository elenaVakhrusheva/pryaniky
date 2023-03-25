import logo from './logo.svg';
import './App.css';
import LoginForm from './components/Login/LoginForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from '../NotFound/NotFound'; 

function App() {
  const isAlreadyAuthenticated = this.isAuthenticated();
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>            
          <Route path="/" element={isAlreadyAuthenticated ? <LoginForm /> : <NotFound />} />
         {/*  <Route path="/test" element={<Test />} />
          <Route path="*" element={<Navigate to="/" replace />}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;