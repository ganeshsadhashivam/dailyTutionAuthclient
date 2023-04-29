import logo from "./logo.svg";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

/*import all components */
import Username from "./components/Username";
import Password from "./components/Password";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Recovery from "./components/Recovery";
import Reset from "./components/Reset";
import PageNotfound from "./components/PageNotfound";

/*route route */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Username>Root Route</Username>,
  },
  {
    path: "/register",
    element: <Register>Register Route</Register>,
  },
  {
    path: "/password",
    element: <Password>Root Route</Password>,
  },
  {
    path: "/profile",
    element: <Profile>Register Route</Profile>,
  },
  {
    path: "/recovery",
    element: <Recovery>Root Route</Recovery>,
  },
  {
    path: "/reset",
    element: <Reset>Register Route</Reset>,
  },
  {
    path: "/*",
    element: <PageNotfound>Root Route</PageNotfound>,
  },
]);

function App() {
  return (
    <main className="App">
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

export default App;
