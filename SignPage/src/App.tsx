import './App.css'
import {Link} from 'react-router-dom'
import Ruta1 from './Ruta1';

function App() {
  return (
    <>
      <div>
        <h1 className='read-the-docs'>Home</h1>
        <main className="container">
          <ul>
            <li><Link to="/signup"> Login page! </Link></li>
            <li><Link to="/calculadora"> Calculator </Link></li>
          </ul>
           
        </main>
        <Ruta1/>
      </div>
    </>
  );
}

export default App;
