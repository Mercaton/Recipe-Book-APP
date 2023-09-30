import React from 'react'
import ReactDOM from 'react-dom/client'
import AddRecipe from "./components/AddRecipe.jsx";
import Header from "./components/Header.jsx";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import MainPage from "./components/MainPage.jsx";
import RecipeDetails from "./components/RecipeDetails.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>
    },
    {
        path: "/add",
        element: <AddRecipe/>
    },
    {
        path: "/details",
        element: <RecipeDetails/>
    },

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Header/>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
