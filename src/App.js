import Home from './components/Home/Home';
import About from './components/About/About';
import Favorite from './components/Favorite/Favorite';
import NoMatch from './components/NoMatch/NoMatch';
import NavBar from './components/NavBar/NavBar';
import List from './components/List/List';
import Container from './components/Container/Container';
import { Routes, Route } from 'react-router-dom';
import './styles/normalize.scss';
import './styles/global.scss';

const App = () => {
  return (
<main>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/list/:listId" element={<List />} />
          <Route path="/*" element={<NoMatch />} />
        </Routes>
      </Container>
 </main>
  );
};

export default App;