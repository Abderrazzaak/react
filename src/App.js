
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Card} from './components/Card'
import { Navbar } from './components/Navbar';
function App() {
  return (
    <div className='bg-info'>
    <Navbar/>  
  <Card/>
    </div>
  );
}

export default App;


