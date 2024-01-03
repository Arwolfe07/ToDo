import { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { initFlowbite } from "flowbite";
import RootLayout from "./components/RootLayout";
import Home from "./pages/Home";

import "./App.css";
import Auth from "./pages/Auth";
import Main from "./pages/Main";
import Notification from "./components/Notification";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
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
        element: <Main/>

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
