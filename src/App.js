import React from 'react';
import './App.css';
import Home from './component/Home';
import Species from './component/Species';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import About from './component/About';

const Menu = styled.a`
font-family: 'Kanit', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 28px;
color: black;
`
const Logo = '/img/Logo.png';

function App() {
  return (
    <div>
      <nav className="navbar fixed-top navbar-light ">
        <Menu href="#" ><img src={Logo} alt="This is Logo" className="Logo" /></Menu>
        <div className="Navbar">
          <Menu className="navbar-brand" href="#">Home</Menu>
          <Menu className="navbar-brand" href="#">About</Menu>
          <Menu className="navbar-brand" href="#">xxxxxx</Menu>
          <Menu className="navbar-brand" href="#">xxxxxx</Menu>
        </div>
      </nav>
      <Home></Home>
      <About></About>
      <Species></Species>
    </div>
  );
}

export default App;
