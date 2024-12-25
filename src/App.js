import logo from './logo.svg';
import './App.css';
import UserRoute from './routes/userRoute';
import { Routes,Route, BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path='/*' element={<UserRoute/>}/>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
