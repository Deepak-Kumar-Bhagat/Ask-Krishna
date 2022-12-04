import * as React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ChapterMainPage from './componemt/LandingPage/chaptersPage/ChapterMainPage';
import Home from './componemt/LandingPage/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
         <Route exact path="/chapter-main-page" element={<ChapterMainPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
