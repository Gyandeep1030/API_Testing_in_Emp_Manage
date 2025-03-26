import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashbord from './Components/Dashbord';
import ViewEmp from './Components/ViewEmp';
import CreatEmp from './Components/CreatEmp';
import { ViewSingle } from './Components/ViewSingle';

function App() {

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashbord />}>
           <Route path="ViewEmp" element={<ViewEmp />} />
           <Route path="CreatEmp" element={<CreatEmp />} />
           <Route path="ViewSingle/:id" element={<ViewSingle/>} />

        </Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
