import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import AllIssues from "../Pages/AllIssues/AllIssues";
import Login from "../Pages/Auth/Login/Login";
import AuthLayout from "../Layouts/AuthLayout";
import Register from "../Pages/Auth/Register/Register";
import Error from "../components/ErrorPage/Error";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path:'/about',
        element: <About></About>
      },
      {
        path:'/allissues',
        element: <AllIssues></AllIssues>
      }
    ]
  },
  {
    path:'/',
    element: <AuthLayout></AuthLayout>,
    children: [
       {
        path: '/login',
        element: <Login></Login>
      },
       {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
  {
    path:'*',
    element: <Error></Error>
  }
]);