import './App.scss';
import {Routes, Route, HashRouter} from "react-router-dom";
import GlobalPage from './Components/GlobalPage';

function App() {
  
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<GlobalPage/>}/>      
      </Routes>
    </HashRouter>
  );
}

export default App;
