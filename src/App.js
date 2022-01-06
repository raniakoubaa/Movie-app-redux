import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './component/Header/Header'
import MovieList from './component/MovieList/MovieList'
import MovieAdd
 from './component/MovieAdd/MovieAdd'
 import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Series from './component/Series/Series';

function App() {
  return (
    <div className="App">
 
  <Router>
 <Header/>
   <Routes>
    <Route path="/" element={<MovieList/>}/>
    <Route path="/add" element={<MovieAdd/>}/>
    <Route path="/serie" element={<Series/>}/>
   </Routes>
 </Router> 
      
     
     
      
    </div>
  );
}

export default App;
