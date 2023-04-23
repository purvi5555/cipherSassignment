import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/errorPage/ErrorPage";
import Main from "../layout/Main";
import Home from "../components/home/Home";
import Register from "../components/form/Register";
import Login from "../components/form/Login";
import Upcoming from "../components/upcoming/Upcoming";
import MyProfile from "../components/profile/myProfile/MyProfile";
import AllFollower from "../components/allFollower/AllFollower";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/courses/:coursesName",
        element: <Upcoming></Upcoming>,
      },
      {
        path: "/myProfile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "/followers",
        element: <AllFollower></AllFollower>
      },
      
    ],
  },
]);
