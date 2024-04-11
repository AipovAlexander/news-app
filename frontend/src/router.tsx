import { createBrowserRouter } from "react-router-dom";
import Main from "./pages/main";
import About from "./pages/about";
import Profile from "./pages/profile";
import AccountSettings from "./pages/account-settings";
import Register from "./pages/register";
import Login from "./pages/login";
import Error from "./pages/error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/account-settings",
    element: <AccountSettings />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
