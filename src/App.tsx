import Home from "./pages/home/Home"
import NavBar from "./components/navbar/NavBar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/footer/Footer"

function App() {


  return (
    <>
      <BrowserRouter>

        <NavBar />

        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>

        <Footer />
        
      </BrowserRouter>
    </>
  )
}

export default App
