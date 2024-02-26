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
import LayOut from "./componants/layOut/LayOut";
import Login from "./homepage/loginPage/Login";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="login" element={<Login/>}/>
      <Route element={<LayOut/>}>
         <Route path="/" element={<Home/>}/>
         <Route path="users" element={<Users/>}/>
         <Route path="products" element={<Products/>}/>
      </Route>

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
