import * as React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ChapterMainPage from './componemt/chaptersPage/ChapterMainPage';
import Home from './componemt/LandingPage/Home';
import ForgetPasswordPage from './componemt/LogedInUser/ForgetPasswordPage';
import LoginPage from './componemt/LogedInUser/LoginPage';
import ResetPasswordPage from './componemt/LogedInUser/ResetPasswordPage';
import SignUpPage from './componemt/LogedInUser/SignUpPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/chapter-main-page" element={<ChapterMainPage/>}/>
        <Route exact path="/user-login" element={<LoginPage/>}/>
        <Route exact path="/user-signup" element={<SignUpPage/>}/>
        <Route exact path="/user-forgetpassword" element={<ForgetPasswordPage/>}/>
        <Route exact path="/user-resetpassword" element={<ResetPasswordPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
