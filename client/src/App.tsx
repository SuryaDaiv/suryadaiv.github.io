import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Compiler from './pages/Compiler';
import LanguageHub from './pages/LanguageHub';
import TutorialDetail from './pages/TutorialDetail';
import Blog from './pages/Blog';
import './index.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/compiler" element={<Compiler />} />
          <Route path="/:lang" element={<LanguageHub />} />
          <Route path="/:lang/:slug" element={<TutorialDetail />} />
          <Route path="/blog" element={<Blog />} />
          {/* Fallback for examples */}
          <Route path="/:lang/examples/:exampleSlug" element={<TutorialDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
