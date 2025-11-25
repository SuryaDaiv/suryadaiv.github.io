import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-border pt-12 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
                    <div className="col-span-2 lg:col-span-2">
                        <Link to="/" className="flex items-center space-x-2 mb-4">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                                <Code size={20} />
                            </div>
                            <span className="text-xl font-bold text-secondary">CodeOrbit</span>
                        </Link>
                        <p className="text-gray-600 mb-6 max-w-sm">
                            Learn to code with interactive tutorials, run programs in your browser, and master new languages with CodeOrbit.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <Github size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold text-secondary mb-4">Learn</h4>
                        <ul className="space-y-2">
                            <li><Link to="/python" className="text-sm text-gray-600 hover:text-primary">Python Tutorials</Link></li>
                            <li><Link to="/javascript" className="text-sm text-gray-600 hover:text-primary">JavaScript Tutorials</Link></li>
                            <li><Link to="/cpp" className="text-sm text-gray-600 hover:text-primary">C++ Tutorials</Link></li>
                            <li><Link to="/java" className="text-sm text-gray-600 hover:text-primary">Java Tutorials</Link></li>
                            <li><Link to="/sql" className="text-sm text-gray-600 hover:text-primary">SQL Tutorials</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-secondary mb-4">Practice</h4>
                        <ul className="space-y-2">
                            <li><Link to="/compiler" className="text-sm text-gray-600 hover:text-primary">Online Compiler</Link></li>
                            <li><Link to="/examples" className="text-sm text-gray-600 hover:text-primary">Examples</Link></li>
                            <li><Link to="/challenges" className="text-sm text-gray-600 hover:text-primary">Challenges</Link></li>
                            <li><Link to="/resources" className="text-sm text-gray-600 hover:text-primary">Resources</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-secondary mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li><Link to="/about" className="text-sm text-gray-600 hover:text-primary">About Us</Link></li>
                            <li><Link to="/contact" className="text-sm text-gray-600 hover:text-primary">Contact</Link></li>
                            <li><Link to="/privacy" className="text-sm text-gray-600 hover:text-primary">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="text-sm text-gray-600 hover:text-primary">Terms & Conditions</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-gray-500 mb-4 md:mb-0">
                        © {new Date().getFullYear()} CodeOrbit. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        <Link to="/privacy" className="text-sm text-gray-500 hover:text-primary">Privacy</Link>
                        <Link to="/terms" className="text-sm text-gray-500 hover:text-primary">Terms</Link>
                        <Link to="/sitemap" className="text-sm text-gray-500 hover:text-primary">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
