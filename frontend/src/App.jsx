import { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { initFlowbite } from "flowbite";
import RootLayout from "./components/RootLayout";
import Home from "./pages/Home";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
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
    </>
  );
}

export default App;
