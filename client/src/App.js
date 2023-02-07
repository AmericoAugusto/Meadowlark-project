import logo from '../src/img/logo.png';
import './App.css';
import React from 'react';
import { BrowserRouter as Router,
          Routes,
        Route,
        Link
      } from 'react-router-dom'
import Vacations from './components/Vacations';



function Home() {
  return (
    <div>
      <h2>Welcome to Meadowlark</h2>
      <p>Check out our "<Link to="/about">About</Link>" page!</p>
    </div>
  )
}
function About() {
  return (<i>coming soon</i>)
}
function NotFound() {
  return (<i>Not Found</i>)
}

function App() {
  return (
    <Router>
    <div className='container'>
      <header>
        <h1>Meadowlark Travel</h1>
        <Link to="/"><img src={logo} alt='Meadowlark Travel Logo' /></Link> 
      </header>
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route  component={NotFound} />
        <Route path='/vacations' exact component={Vacations} />
      </Routes>
      <Home />
    </div>
    </Router>
  )
}
export default App;
