import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, Code, ChevronDown } from 'lucide-react';
import { Button } from './ui/Button';
import { cn } from '../lib/utils';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isTutorialsOpen, setIsTutorialsOpen] = useState(false);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-border bg-white/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                        <Code size={20} />
                    </div>
                    <span className="text-xl font-bold text-secondary">CodeOrbit</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-6">
                    <Link to="/" className="text-sm font-medium text-secondary hover:text-primary transition-colors">
                        Home
                    </Link>

                    <div className="relative group">
                        <button className="flex items-center space-x-1 text-sm font-medium text-secondary hover:text-primary transition-colors">
                            <span>Tutorials</span>
                            <ChevronDown size={14} />
                        </button>
                        {/* Dropdown */}
                        <div className="absolute left-0 top-full mt-2 w-48 rounded-md border border-border bg-white p-2 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                            <Link to="/python" className="block rounded-md px-3 py-2 text-sm text-secondary hover:bg-slate-50 hover:text-primary">Python</Link>
                            <Link to="/javascript" className="block rounded-md px-3 py-2 text-sm text-secondary hover:bg-slate-50 hover:text-primary">JavaScript</Link>
                            <Link to="/cpp" className="block rounded-md px-3 py-2 text-sm text-secondary hover:bg-slate-50 hover:text-primary">C++</Link>
                            <Link to="/java" className="block rounded-md px-3 py-2 text-sm text-secondary hover:bg-slate-50 hover:text-primary">Java</Link>
                            <Link to="/sql" className="block rounded-md px-3 py-2 text-sm text-secondary hover:bg-slate-50 hover:text-primary">SQL</Link>
                        </div>
                    </div>

                    <Link to="/compiler" className="text-sm font-medium text-secondary hover:text-primary transition-colors">
                        Online Compiler
                    </Link>
                    <Link to="/examples" className="text-sm font-medium text-secondary hover:text-primary transition-colors">
                        Examples
                    </Link>
                    <Link to="/blog" className="text-sm font-medium text-secondary hover:text-primary transition-colors">
                        Blog
                    </Link>
                </div>

                {/* Right Actions */}
                <div className="hidden md:flex items-center space-x-4">
                    <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="h-9 w-64 rounded-md border border-border bg-slate-50 pl-9 pr-4 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                    </div>
                    <Button variant="ghost" size="sm">Sign In</Button>
                    <Link to="/compiler">
                        <Button size="sm">Start Coding</Button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Drawer */}
            {isMobileMenuOpen && (
                <div className="md:hidden border-t border-border bg-white px-4 py-4 shadow-lg">
                    <div className="flex flex-col space-y-4">
                        <Link to="/" className="text-sm font-medium text-secondary" onClick={toggleMobileMenu}>Home</Link>

                        <div>
                            <button
                                className="flex w-full items-center justify-between text-sm font-medium text-secondary"
                                onClick={() => setIsTutorialsOpen(!isTutorialsOpen)}
                            >
                                <span>Tutorials</span>
                                <ChevronDown size={14} className={cn("transition-transform", isTutorialsOpen && "rotate-180")} />
                            </button>
                            {isTutorialsOpen && (
                                <div className="mt-2 ml-4 flex flex-col space-y-2 border-l-2 border-border pl-4">
                                    <Link to="/python" className="text-sm text-gray-600" onClick={toggleMobileMenu}>Python</Link>
                                    <Link to="/javascript" className="text-sm text-gray-600" onClick={toggleMobileMenu}>JavaScript</Link>
                                    <Link to="/cpp" className="text-sm text-gray-600" onClick={toggleMobileMenu}>C++</Link>
                                    <Link to="/java" className="text-sm text-gray-600" onClick={toggleMobileMenu}>Java</Link>
                                </div>
                            )}
                        </div>

                        <Link to="/compiler" className="text-sm font-medium text-secondary" onClick={toggleMobileMenu}>Online Compiler</Link>
                        <Link to="/examples" className="text-sm font-medium text-secondary" onClick={toggleMobileMenu}>Examples</Link>
                        <Link to="/blog" className="text-sm font-medium text-secondary" onClick={toggleMobileMenu}>Blog</Link>

                        <div className="pt-4 border-t border-border flex flex-col space-y-3">
                            <div className="relative">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="h-9 w-full rounded-md border border-border bg-slate-50 pl-9 pr-4 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                                />
                            </div>
                            <Button variant="ghost" className="w-full justify-start">Sign In</Button>
                            <Link to="/compiler" onClick={toggleMobileMenu}>
                                <Button className="w-full">Start Coding</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
