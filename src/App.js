import {BrowserRouter,Route,Routes} from "react-router-dom";
import Land from './Components/Land';
import Product from './Components/Product';
import Home from './Components/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Home/>
      <Routes>
        <Route path="/" element={<Land/>}></Route>
        <Route path="/product" element={<Product/>}></Route>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
