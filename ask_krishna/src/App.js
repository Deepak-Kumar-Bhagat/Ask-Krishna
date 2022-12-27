import * as React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import AddNewChapter from './componemt/AdminComponent/AddChapter/AddNewChapter';
import Dashboard from './componemt/AdminComponent/Dashboard';
import ChapterMainPage from './componemt/chaptersPage/ChapterMainPage';
import ShlokaOverview from './componemt/chaptersPage/ShlokaOverview';
import About from './componemt/LandingPage/About';
import ContactUs from './componemt/LandingPage/ContactUs';
import Home from './componemt/LandingPage/Home';
import Navbar from './componemt/LandingPage/Navbar';
import ForgetPasswordPage from './componemt/LogedInUser/ForgetPasswordPage';
import LoginPage from './componemt/LogedInUser/LoginPage';
import ResetPasswordPage from './componemt/LogedInUser/ResetPasswordPage';
import SignUpPage from './componemt/LogedInUser/SignUpPage';
import QuestionPage from './componemt/QuestionPage/QuestionPage';

function App() {

  const [chapterTrigger,setChapterTrigger]=React.useState(false);

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar
        chapterTrigger={chapterTrigger}
        setChapterTrigger={setChapterTrigger}
      />
      <Routes>

        {/* ==========LandingPage=========== */}
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about-us" element={<About/>}/>
        <Route exact path="/contact-us" element={<ContactUs/>}/>

        {/* ========chaptersPage======== */}
        <Route exact path="/chapter-main-page/:id" element={<ChapterMainPage chapterTrigger={chapterTrigger}/>}/>
        <Route exact path="/shloka-overview" element={<ShlokaOverview/>}/>

        {/* ========QuestionsPage======== */}
        <Route exact path="/question-page" element={<QuestionPage/>}/>

        {/* ===========LogedInUser=========== */}
        <Route exact path="/user-login" element={<LoginPage  
           chapterTrigger={chapterTrigger}
           setChapterTrigger={setChapterTrigger}
          />}/>
        <Route exact path="/user-signup" element={<SignUpPage/>}/>
        <Route exact path="/user-forgetpassword" element={<ForgetPasswordPage/>}/>
        <Route exact path="/user-resetpassword" element={<ResetPasswordPage/>}/>
        {/* ===========Admin User=========== */}
        <Route exact path="/admin-dashboard" element={<Dashboard/>}/>
        <Route exact path="/project-add" element={<AddNewChapter/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
