import Template from './pages/Template.js';
import Home from './pages/Home.js';
import AboutUs from './pages/AboutUs.js';
import SearchCats from './pages/SearchCats.js';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={<h1>404 Error! Looks like you're lost.</h1>} />
        <Route
          path="/" element={<Template />}>
            <Route 
              index element={<Home />} />
            <Route 
              path="/about-us" element={<AboutUs />} />
            <Route 
              path="/search-cats-for-adoption" element={<SearchCats />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
