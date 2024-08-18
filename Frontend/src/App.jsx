import { BrowserRouter as Router , Route, Routes } from "react-router-dom"
import ProductDetails from "./pages/ProductDetails"
import AllProducts from "./pages/AllProducts"
const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<AllProducts/>} path="/products"/>
        <Route element={<ProductDetails/>} path="/product/:id"/>
      </Routes>
    </Router>
  )
}

export default App