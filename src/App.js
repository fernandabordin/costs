import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Projects from './components/pages/Projects'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'
import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Container customClass="minHeight">
        <Routes>
          <Route exact path="/" element={<Home />}>
          </Route>
          <Route path="/projects" element={<Projects />}>
          </Route>
          <Route path="/company" element={<Company />}>
          </Route>
          <Route path="/contact" element={<Contact />}>
          </Route>
          <Route path="/newproject" element={<NewProject />}>
          </Route>
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
