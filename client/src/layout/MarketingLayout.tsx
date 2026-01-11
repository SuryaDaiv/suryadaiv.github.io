import { Link, Outlet } from 'react-router-dom';
import { BRAND, THEME } from '../config';

export default function MarketingLayout() {
  return (
    <div className={`min-h-screen ${THEME.appBg} text-gray-100 flex flex-col`}>
      {/* Top Nav */}
      <header className={`border-b ${THEME.divider} ${THEME.headerBg} backdrop-blur sticky top-0 z-50`}>
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-3">
          <Link to="/" className="text-lg font-semibold hover:text-blue-400 transition-colors">
            {BRAND}
          </Link>
          <nav className="ml-auto flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
              <Link to="/tutorials" className="hover:text-white transition-colors">Tutorials</Link>
              <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
              <Link to="/about" className="hover:text-white transition-colors">About</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
            <Link to="/editor" className={`px-3 py-1 rounded ${THEME.primaryBtn} text-sm font-medium`}>
              Open Editor
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 w-full">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className={`py-12 border-t ${THEME.divider} bg-slate-900/50`}>
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="text-lg font-semibold mb-3">{BRAND}</div>
              <p className="text-sm text-gray-400 max-w-sm">
                A fast, browser-based editor for students, interview prep, and everyday prototypes — no installs, just results.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3 text-sm text-gray-200">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/tutorials" className="hover:text-gray-200">Tutorials</Link></li>
                <li><Link to="/blog" className="hover:text-gray-200">Blog</Link></li>
                <li><Link to="/examples" className="hover:text-gray-200">Code Examples</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3 text-sm text-gray-200">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/about" className="hover:text-gray-200">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-gray-200">Contact</Link></li>
                <li><Link to="/privacy" className="hover:text-gray-200">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-gray-200">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <div>&copy; {new Date().getFullYear()} {BRAND}. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
