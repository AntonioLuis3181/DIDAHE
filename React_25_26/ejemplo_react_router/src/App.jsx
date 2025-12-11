import { RouterProvider } from "react-router/dom";
import { createBrowserRouter, Outlet } from "react-router";
import Inicio from "./components/Inicio";
import VisorChistes from "./components/VisorChistes";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    children : [ // Todo esto se ve en el outlet
      {index:true, Component: Inicio}, // Esto se ve en el Outlet
      {
    path: "/adios",
    element: <h3>Adíos</h3>,
  },
  {
    path: "/chistes",
    Component: VisorChistes,
  },
    ],
  },
]);

function App() {
  
  return (
    <>
      <RouterProvider router={router} />,
    </>
  )
}

export default App
