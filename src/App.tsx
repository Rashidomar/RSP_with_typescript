import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage"
import Login from "./pages/Login";
import Signup from "./pages/Signup"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    element :  <Navbar />,
    children:[
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/signup",
        element:  <Signup />
      },
      {
        path:"/login",
        element: <Login />
      }
    ]
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
