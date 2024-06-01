import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Recipe from './recipe.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App basename="/" />,
  },
  {
    path: "/recipe",
    element: <Recipe basename="/recipe" />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
