
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router';
import Login from './Login';
function App() {
  return (
    <Router>
     <Routes>
      <Route path="/" element={<Login/>}></Route>
      
     </Routes>

    </Router>
     
  
  );
}

export default App;
