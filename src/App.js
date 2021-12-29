import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Routes, Route} from 'react-router-dom'
// import Timer from './pages/Timer'
import Timer from './pages/Timer'
import Name from './pages/Name'
import Counter from './pages/Counter'
import Resource from './pages/Resource'
import Windows from './pages/Windows'
// import FormTest from './pages/FormTest'
import NavBar from './components/NavBar'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <div className="App">
      <NavBar></NavBar>
     <Routes>
     <Route path="/Timer" element={<Timer/>}></Route>
     <Route path="/Name" element={<Name/>}></Route>
     <Route path="/Counter" element={<Counter/>}></Route>
     <Route path="/Windows" element={<Windows/>}></Route>
     <Route path="/Resource" element={<Resource/>}></Route>
     {/* 
     <Route path="/Resource" element={<Resource/>}></Route>
     <Route path="/FormTest" element={<FormTest/>}></Route> */}
      
     </Routes>
    </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
