import { Link, useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";


function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
    <Navbar/>
    
    <Link to="/">Volver a la página de inicio</Link>
    </>
  );
}

export default ErrorPage;