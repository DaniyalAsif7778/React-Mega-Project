 import { createRoot } from 'react-dom/client'
import './index.css'
 import React from 'react';
 import Login from './components/Login.jsx';

  import { Provider } from 'react-redux';
 import store from "../src/store/Store.js"
 import { createBrowserRouter, RouterProvider,  Route,createRoutesFromElements } from 'react-router';
 import Layout from './Outlet.jsx';
 const router = createBrowserRouter(
     createRoutesFromElements(
        <Route path="/" element={<Layout/>} > 
          <Route path="" element={<Login/>}/>
        </Route> 

     )
   )
createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <Provider store={store} >
      <RouterProvider router={router} />
     </Provider>
     </React.StrictMode>
 )
