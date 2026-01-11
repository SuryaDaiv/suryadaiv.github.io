import { useParams, Link } from 'react-router-dom';
import { TUTORIALS } from '../data/tutorials';
import { THEME } from '../config';
import SEOHead from '../components/SEOHead';
import NotFound from './NotFound';
import { Helmet } from 'react-helmet-async';

export default function TutorialPage() {
    const { lang, chapterIds } = useParams(); // wait, router definition will be /tutorials/:lang/:chapterId
    // but I need to check how I define the route in App.tsx later.
    // I will use /tutorials/:seriesId/:chapterId
}
