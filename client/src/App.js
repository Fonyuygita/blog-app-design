import "./general.scss"
// import react router dom


import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  
} from "react-router-dom";
import Navbar from './component/Navbar';
import Footer from './component/Footer';

import Single from './pages/Single';
import Write from './pages/Write';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';


// create our outlet here to avoid duplication

const Layout=()=>{
  return (

    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  );
}

// create our routes



const router = createBrowserRouter([
  {
 path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },

      {
        path:"/write",
        element:<Write/>
      },

      {
        path:"/post/:id",
        element:<Single/>
      }
    ]
    

  },

  {
    path:"/register",
    element:<Register/>
  },

  {
    path:"/login",
    element:<Login/>

  }
]);


function App() {
  return (
    <div className='app'>
    <div className="container">
    <RouterProvider router={router} />

    </div>
      
    </div>
  );
}


export default App;
