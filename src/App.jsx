import Home from './Home';
import Sidebar from './Sidebar';
import { Link, Outlet } from 'react-router-dom';

const Product = () => {
  return (
    <>
      <Home />
      <Sidebar />
      
            <Outlet />

    </>
  );
};
export default Product;
