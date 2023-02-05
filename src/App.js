
import './App.css';
import Registrationform from './Pages/Registrationform';
import Employee_table from './Pages/Employee_table';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <Routes>
      <Route exact path ="/" element={<Registrationform/>}/>
      <Route exact path ="Employee_table" element={<Employee_table/>}/>
      
      </Routes>
    </Router>
  );
}

export default App;
