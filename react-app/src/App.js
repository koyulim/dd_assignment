import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import MovieApp from './task_1/movieApp';
import Parent from './task_2/parent';
import GlobalState from './task_3/globalState';
import MovieList from './task_4/movieList';
import ExceptionMovie from './task_6/exceptionMovie';
import TsMovies from './task_8/tsMovies';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="movieApp" element={<MovieApp/>}></Route>
      <Route path="parent" element={<Parent/>}></Route>
      <Route path="globalState" element={<GlobalState/>}></Route>
      <Route path="movieList" element={<MovieList/>}></Route>
      <Route path="exceptionMovie" element={<ExceptionMovie/>}></Route>
      <Route path="tsMovie" element={<TsMovies/>}></Route>
    </Routes>
  </div>
  );
}

export default App;
