import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

import User from "./pages/User";
import SignIn from "./pages/SignIn";
// import App from "./src/App";
// import ErreurPage from "./src/ErrorPage";
// import Users from "./src/Users";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
   {
    path: "/login",
    element: <SignIn/>,
  },{
    path: "/profil",
    element: <User/>,
  },
]);
