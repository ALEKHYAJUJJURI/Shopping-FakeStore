
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { Home } from './components/home';
import { PreviewProduct } from './components/previewProduct';
import { CartProducts } from './components/cart';

function App() {
 
  return (
    <BrowserRouter>
    <div className="">
     <header className=''>
      <nav className='d-flex p-2 justify-content-between'>
        <h2 className='head'>Shopping.</h2>
        <div className='d-flex align-items-center'>
          <div className='input-group'><input type='search' className='form-control'/><button className='btn btn-warning bi bi-search input-label'></button></div>
          <div className='mx-2'><Link to="/cart" className='btn btn-warning bi bi-cart-fill'></Link></div>
          <div><button className='btn btn-light rounded-circle bi bi-person-fill'></button></div>
        </div>
      </nav>
     </header>
     <main>

      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product/:id' element={<PreviewProduct/>}/>
          <Route path='/cart' element={<CartProducts/>}/>
        </Routes>
      </div>
     </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
