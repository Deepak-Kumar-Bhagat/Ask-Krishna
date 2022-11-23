import * as React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './componemt/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
