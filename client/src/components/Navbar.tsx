import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Search, Rocket, Code2 } from 'lucide-react';
import { Button } from './ui/Button';
import { BRAND } from '../config';

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'text-sm font-semibold px-3 py-2 rounded-full transition-colors',
    isActive ? 'bg-blue-50 text-[var(--color-primary)]' : 'text-slate-700 hover:bg-slate-100',
  ].join(' ');

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-white/90 border-b border-[var(--color-border)] backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4">
        <Link to="/" className="flex items-center gap-2 text-lg font-extrabold tracking-tight text-[var(--color-ink)]">
          <span className="w-9 h-9 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-indigo-600 flex items-center justify-center text-white shadow-lg">
            <Rocket size={18} />
          </span>
          <span>{BRAND}</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 ml-6">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/tutorials/python" className={navLinkClass}>
            Tutorials
          </NavLink>
          <NavLink to="/compiler" className={navLinkClass}>
            Online Compiler
          </NavLink>
          <NavLink to="/examples/python/add-two-numbers" className={navLinkClass}>
            Examples
          </NavLink>
          <NavLink to="/blog" className={navLinkClass}>
            Blog
          </NavLink>
          <NavLink to="/resources" className={navLinkClass}>
            Resources
          </NavLink>
        </nav>

        <div className="hidden lg:flex items-center gap-3 ml-auto">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-2.5 text-slate-400" />
            <input
              type="search"
              placeholder="Search tutorials"
              className="pl-10 pr-4 py-2 text-sm rounded-full border border-[var(--color-border)] bg-white w-52 focus:outline-none focus:border-blue-300"
            />
          </div>
          <Button variant="ghost" className="text-[var(--color-ink)]">
            Sign In
          </Button>
          <Link to="/compiler">
            <Button>
              <Code2 size={16} />
              Start Coding
            </Button>
          </Link>
        </div>

        <button
          className="ml-auto lg:hidden p-2 rounded-full border border-[var(--color-border)]"
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[var(--color-border)] bg-white px-4 py-3 space-y-2">
          {[
            { to: '/', label: 'Home' },
            { to: '/tutorials/python', label: 'Tutorials' },
            { to: '/compiler', label: 'Online Compiler' },
            { to: '/examples/python/add-two-numbers', label: 'Examples' },
            { to: '/blog', label: 'Blog' },
            { to: '/resources', label: 'Resources' },
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                [
                  'block px-3 py-2 rounded-xl font-semibold',
                  isActive ? 'bg-blue-50 text-[var(--color-primary)]' : 'text-slate-700 hover:bg-slate-100',
                ].join(' ')
              }
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <div className="pt-2 flex gap-2">
            <Button variant="ghost" className="flex-1">
              Sign In
            </Button>
            <Link to="/compiler" className="flex-1" onClick={() => setOpen(false)}>
              <Button className="w-full">Start Coding</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
