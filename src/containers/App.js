
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import ProductListing from './ProductListing';
import ProductDetail from './ProductDetail';

function App() {
  return (
    <div>
      <Header/>
      <Router>
      <Routes>
        <Route path='/' element={<ProductListing/>}/>
        <Route path='/product/:productId' element={<ProductDetail/>}/>
        <Route>404 not found</Route>
      </Routes>

      </Router>
        
        
    </div>
  );
}

export default App;
