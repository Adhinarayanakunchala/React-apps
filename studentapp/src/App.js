import {BrowserRouter, Route,Routes} from 'react-router-dom'
import StudentsInformation from './components/StudentsInformation';
import NewStudent from './components/NewStudent';
import Student from './components/Student';
import UpdateStudent from './components/Update';

function App() {
  return (
    <>
<BrowserRouter>
    <Routes>
    <Route path='/' element={<StudentsInformation/>} />
    <Route path='/save' element={<NewStudent/>} />
    <Route path='/student/:id' element={<Student/>} />
    <Route path='/update/:id' element={<UpdateStudent/>}/>
  </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
