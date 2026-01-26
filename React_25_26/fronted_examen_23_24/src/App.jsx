

import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import VisorNotas from "./components/VisorNotas";



function App() {

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    errorElement: <ErrorPage />,
    children: [
      // Todo esto se ve en el Outlet
      { index: true, element: <h1>Pagina inicio del examen</h1> }, // Esto se ve en la ruta padre
      {
        path: "/ejercicio2",
        element: <VisorNotas/>,
      },
      {
        path: "/ejercicio3/:id",
        element: <h1>ejercicio3</h1> ,
      },
    ],
  },
]);
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
