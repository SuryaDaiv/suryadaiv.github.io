import { Link } from 'react-router-dom';
import { THEME } from '../config';
import SEOHead from '../components/SEOHead';

export default function NotFound() {
    return (
        <>
            <SEOHead title="Page Not Found" description="The page you are looking for does not exist." />
            <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
                <h1 className="text-6xl font-bold text-gray-700 mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-white mb-4">Page Not Found</h2>
                <p className="text-gray-400 mb-8 max-w-md">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                <Link to="/" className={THEME.primaryBtn}>Return Home</Link>
            </div>
        </>
    );
}
