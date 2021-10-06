
import { Route, Switch, NavLink } from 'react-router-dom';
import Welcome from './Welcome';
import About from './About';
import Contact from './Contact';
import './App.css';
import Blog from './Blog';

function App() {
  return (
    <div className="App">
      <nav className='App-nav'>
        <NavLink exact activeClassName='active-link' to='/'>Home</NavLink>
        <NavLink exact activeClassName='active-link' to='/blog'>Blog</NavLink>
        <NavLink exact activeClassName='active-link' to='/about'>About</NavLink>
        <NavLink exact activeClassName='active-link' to='/contact'>Contact</NavLink>
      </nav>
      <Switch>
        <Route exact path="/"> <Welcome /></Route>
        <Route exact path="/contact"> <Contact /></Route>
        <Route exact path="/blog"> <Blog /></Route>
        <Route exact path="/about"> <About /></Route>
          {/* BONUS IS TO REFACTOR THE ROUTES ABOVE TO USE A RENDER METHOD AND  DISPLAY THEIR NAME ON THE  WELCOME COMPONENT */}
        {/* ======================================================== */}
        {/* <Route exact path='/welcome' render={() => <Welcome name='INSERT STUDENTS NAME HERE' />} /> */}
      </Switch>
    </div>
  );
}

export default App;
