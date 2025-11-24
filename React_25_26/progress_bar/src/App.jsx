import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Progress from './Progress.jsx';

function App() {
  return (
    <>
    <Progress porcentaje ={25} color="bg-warning" striped={true} />
    <Progress porcentaje ={50} color="bg-info" striped={false} />
    <Progress porcentaje ={75} color="bg-danger" striped={true} />
    </>
  )
}

export default App
