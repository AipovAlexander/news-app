import { createBrowserRouter } from "react-router-dom";
import Main from "./pages/main";
import About from "./pages/about";
import Profile from "./pages/profile";
import AccountSettings from "./pages/account-settings";
import Register from "./pages/register";
import Login from "./pages/login";
import Error from "./pages/error";
import Header from "./components/header";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Main />
      </>
    ),
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: (
      <>
        <Header />
        <About />
      </>
    ),
  },
  {
    path: "/profile",
    element: (
      <>
        <Header />
        <Profile />
      </>
    ),
  },
  {
    path: "/account-settings",
    element: (
      <>
        <Header />
        <AccountSettings />
      </>
    ),
  },
  {
    path: "/register",
    element: (
      <>
        <Header />
        <Register />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Header />
        <Login />
      </>
    ),
  },
]);

export default router;
