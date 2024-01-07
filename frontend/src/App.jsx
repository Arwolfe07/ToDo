import { useEffect,useState } from "react";
import { RouterProvider, createBrowserRouter,Navigate } from "react-router-dom";
import { initFlowbite } from "flowbite";
import RootLayout from "./components/RootLayout";
import Home from "./pages/Home";

import "./App.css";
import Auth from "./pages/Auth";
import Main from "./pages/Main";
import Notification from "./components/Notification";
import Error from "./pages/Error";


const isAuthenticated = () => {
  // Check if user is authenticated (e.g., by verifying a token in localStorage)
  return !!localStorage.getItem("Profile");
};

const ProtectedRoute = ({ element, path }) => {
  const [authenticated, setAuthenticated] = useState(isAuthenticated());

  useEffect(() => {
    setAuthenticated(isAuthenticated());
  }, []);

  return authenticated ? element : <Navigate to="/auth" />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // errorElement: <Error/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/auth',
        element: <Auth/>
      },
      {
        path: '/todo',
        element: <ProtectedRoute element={<Main />} path="/todo" />

      }
    ],
  },
]);

function App() {
  useEffect(() => {
    initFlowbite(); // Initialize FlowBite styles and components
  }, []);

  return (
    <>
      <RouterProvider router={router} />
      <Notification/>
      
    </>
  );
}

export default App;
