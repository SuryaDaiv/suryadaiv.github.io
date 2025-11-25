import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND } from '../config';

const columns = [
  {
    title: 'Learn',
    links: [
      { label: 'Python Tutorials', to: '/tutorials/python' },
      { label: 'JavaScript Tutorials', to: '/tutorials/javascript' },
      { label: 'C++ Tutorials', to: '/tutorials/cpp' },
      { label: 'Java Tutorials', to: '/tutorials/java' },
      { label: 'SQL Tutorials', to: '/tutorials/sql' },
      { label: 'More Languages', to: '/tutorials' },
    ],
  },
  {
    title: 'Practice',
    links: [
      { label: 'Online Compiler', to: '/compiler' },
      { label: 'Challenges (soon)', to: '/practice' },
      { label: 'Examples', to: '/examples/python/add-two-numbers' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', to: '/blog' },
      { label: 'Roadmaps', to: '/resources/roadmaps' },
      { label: 'Cheat Sheets', to: '/resources/cheatsheets' },
      { label: 'Interview Prep', to: '/resources/interview' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Contact', to: '/contact' },
      { label: 'Advertise with us', to: '/advertise' },
      { label: 'Privacy Policy', to: '/privacy' },
      { label: 'Terms & Conditions', to: '/terms' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-slate-200 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <div className="text-xl font-bold mb-3">{BRAND}</div>
          <p className="text-sm text-slate-400 leading-relaxed">
            Learn programming with structured tutorials, run code instantly in the browser, and grow with example-led practice.
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <div className="text-sm font-bold uppercase tracking-[0.18em] text-slate-400 mb-4">{col.title}</div>
            <ul className="space-y-2 text-sm">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-slate-200 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-4 text-xs text-slate-500 flex flex-col sm:flex-row sm:items-center gap-2">
          <span>© {new Date().getFullYear()} {BRAND}. All rights reserved.</span>
          <span className="sm:ml-auto">Built for learners, optimized for performance & SEO.</span>
        </div>
      </div>
    </footer>
  );
}
