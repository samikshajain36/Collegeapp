import './App.css';
import Admission from './component/Admission';
import CarrerTransition from './component/CarrerTransition';
import Contact from './component/Contact';
import ExpertFaculty from './component/ExpertFaculty';
import Footer from './component/Footer';
import Header from './component/Header';
import Hiring from './component/Hiring';
import Main from './component/Main';
import Placement from './component/Placement';
import PostGraduation from './component/PostGraduation';
import Success from './component/Success';

function App() {
  return (
    <div className="App">
  <Header/>
  <Main/>
  <Placement/>
  <Hiring/>
  <PostGraduation/>
  <CarrerTransition/>
  <Contact/>
  <ExpertFaculty/>
  <Admission/>
  <Success/>
  <Footer/>
    </div>
  );
}

export default App;
