import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import Recipe from './pages/recipe.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/FridgeFiness/",
    element: <App />,
  },
  {
    path: "recipe",
    basename: "/recipe",
    element: <Recipe />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
