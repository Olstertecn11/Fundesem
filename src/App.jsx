import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./components/Layout"
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exec element={<Layout Component={Home} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
