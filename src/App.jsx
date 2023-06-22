import {BrowserRouter,Routes,Route } from "react-router-dom"
import './App.css'
import Home from "./screens/home/Home-screen"
import Safety from "./screens/safety/Safety-page"
import Help from "./screens/help/Help-page"
function App() {
  

  return (
    <>
        
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="" element={<Home/> } />
            <Route path="/safety" element={<Safety/> } />
            <Route path="/help" element={<Help/> } />
           </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
