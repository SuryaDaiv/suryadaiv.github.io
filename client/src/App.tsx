import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MarketingLayout from './layout/MarketingLayout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';
import TutorialsList from './pages/TutorialsList';
import TutorialPage from './pages/TutorialPage';
import EditorPage from './pages/EditorPage';
import NotFound from './pages/NotFound';
import './index.css';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MarketingLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="terms" element={<Terms />} />
            <Route path="blog" element={<BlogList />} />
            <Route path="blog/:id" element={<BlogPost />} />
            <Route path="tutorials" element={<TutorialsList />} />
            <Route path="tutorials/:seriesId/:chapterId" element={<TutorialPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/editor" element={<EditorPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
