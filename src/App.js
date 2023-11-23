import './App.css';
import Login from './Pages/Login/Login';
import About from './Pages/About/About';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Pages/Home/Home';
import RootLayOut from './Layouts/RootLayOut';
import LoginLayout from './Layouts/LoginLayout';
import SignUp from './Pages/SignUp/SignUp';




const router = createBrowserRouter([
  {
    path: "/",
    element : <RootLayOut/>,
    children : [
    {
      path:"/",
      element: <Home/>
    },

    {
      element:<LoginLayout/>,
      children : [
        {
          path : "/login",
          element:<Login/>,
        },
        {
          path : "/signup",
          element: <SignUp/>
        },
      ],
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
