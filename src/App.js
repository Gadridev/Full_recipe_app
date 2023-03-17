import logo from './logo.svg';
import './App.css';
import Pages from './pages/Pages';
import Categorie from './Components/Categorie';
import { BrowserRouter, Link } from 'react-router-dom';
import Search from './Components/Search';
import styled from 'styled-components';
import { GiKnifeFork } from 'react-icons/gi';


function App() {
  return (
    <>
    <BrowserRouter>
    <Nav>
      <GiKnifeFork />
      <Logo to={'/'}>deliciouss</Logo>
    </Nav>
    <Search />
    <Categorie />
     <Pages />
     </BrowserRouter>
    </>
  );
}

const Logo =styled(Link)`
text-decoration:none;
font-size:1.5rem;
font-weight:400;
font-familly:'lobster-two' cursive`;
const Nav =styled.div`
padding:4rem 0rem;
display:flex;
justifu-content:flex-start;
align-item:center;

svg{
  font-size:2rem;
}
`

export default App;
