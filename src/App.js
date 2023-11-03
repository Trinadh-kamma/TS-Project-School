import './App.css';

import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Login from './Pages/Login/Login';
import About from './Pages/About/About';

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import { Children } from 'react';
import Home from './Pages/Home/Home';


const Layout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element : <Layout/>,

    children : [
    {
      path:"/",
      element: <Home/>
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/about",
      element : <About/>
    }
  ]
  }, 
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
