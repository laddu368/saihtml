 import {Route, Routes} from 'react-router-dom'
import './App.css';
import Home from '../src/components/home/Home'
function App() {
  return (
 
      <Routes>
<Route path='/'>
<Route path='/home' />
</Route>
      </Routes>
  );
}

export default App;
