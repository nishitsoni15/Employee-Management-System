import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { Home } from './pages/home/index';
import { Navbar } from './layouts/navbar/index';
import { Profile } from './pages/profile/index';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NotFound } from './pages/notfound/index';
import { AddProfile } from './component/addprofile/index';
import { EditProfile } from './component/editprofile/index';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/profile' element={<Profile />} />
          <Route exact path='/profile/add' element={<AddProfile />} />
          <Route exact path='/profile/edit/:id' element={<EditProfile />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
