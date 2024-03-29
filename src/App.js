import './App.css';
import VendingMachine from './VendingMachine';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Snack1 from './Snack1';
import Snack2 from './Snack2';
import Snack3 from './Snack3';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<VendingMachine />}/>
          <Route path='/snack1' element={<Snack1/>}/>
          <Route path='/snack2' element={<Snack2/>}/>
          <Route path='/snack3' element={<Snack3/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
