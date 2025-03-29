import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Product  from './Component/Product.js';
import {createBrowserRouter, createRoutesFromElements, RouterProvider,Route} from 'react-router-dom';
import DashBoard from './Component/Dashboard.js';
import Cart from './Component/Cart.js';
import RootLayout from './Component/RootLayout.js';
function App() {
  //createRoutesFromElements this will gives you option to create the routes
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path = '/' element = {<RootLayout/>}>

      {/* and below 2 routes renders inside the outlet  */}
{/* index means this is the default page inside rootlayout,so when we are on / it shows dashboard inside rootlayout */}
      <Route index element = {<DashBoard/>}></Route>
      {/* when the url is /cart it loads the cart component inside rootlayout */}
      <Route path = '/cart' element = {<Cart/>}></Route>

    </Route>
  ))
  return (
    <div className='App'>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
