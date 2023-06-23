import './index.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import { useParams } from "react-router-dom";
import CategoryPage from './pages/CategoryPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import FavoritesPage from './pages/FavoritesPage';


function App() {
  const catName = useParams();
  return (
    <Router>
      <Routes >
        <Route path="/register" element={<RegisterPage />} />
        <Route exact path="/login" element={<LoginPage />}/>
        <Route exact path="/" element={<Home />}/>
        <Route
            path="/cat/:categoryName"
            element={<CategoryPage />}
          />
        <Route path="/products/:id" element={<ProductDetailPage />}></Route>
        <Route path="/cartPage" element={<CartPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
