import { Routes, Route, useLocation} from "react-router-dom";

import {
  HomePage,
  AboutMe,
  Projects,
  Music,
  NavBar
} from './pages';

function App() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  }

  return (
    <> 
      {location.pathname !== '/circleProfile/' &&
        <div className="flex bg-primary text-white h-20 items-center">
          <NavBar/>
        </div>
      }
      <div>
        <Routes>
          <Route path = '/circleProfile/' element = {<HomePage />}/>
          <Route path = '/circleProfile/aboutMe' element = {<AboutMe />}></Route>
          <Route path='/circleProfile/projects' element={<Projects />} /> 
          <Route path='/circleProfile/music' element={<Music />} /> 
        </Routes>
      </div>
    </>
  );
  
}

export default App;
