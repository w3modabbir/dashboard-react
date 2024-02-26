import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./homepage/home/Home";
import Users from "./homepage/users/Users";
import Products from "./homepage/products/Products";
import ErrorPage from "./errorPage/ErrorPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
         <Route path="/" element={<Home/>}/>
         <Route path="users" element={<Users/>}/>
         <Route path="products" element={<Products/>}/>

         <>
          <Route path='*' element={<ErrorPage/>}/>
         </>
      </>
    )
  );

  return (
    <>
      <RouterProvider
       router={router}
      />
    </>
  )
}

export default App
