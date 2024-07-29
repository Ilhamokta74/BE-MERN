import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./component/ProductList";
import AddProduct from "./component/AddProduct";
function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path='/add' element={<AddProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
