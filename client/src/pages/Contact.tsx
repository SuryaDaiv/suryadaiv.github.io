import { THEME } from '../config';
import SEOHead from '../components/SEOHead';
import { Mail, MapPin } from 'lucide-react';

export default function Contact() {
    return (
        <>
            <SEOHead
                title="Contact Us"
                description="Get in touch with our team for support, feedback, or inquiries."
            />
            <div className="max-w-4xl mx-auto px-4 py-12">
                <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-6 text-gray-300">
                        <p>
                            We value your feedback and are here to help. Whether you have a question about our compiler,
                            want to report a bug, or just want to say hello, we'd love to hear from you.
                        </p>

                        <div className="flex items-center gap-3">
                            <div className={`p-3 rounded-lg ${THEME.card}`}>
                                <Mail className="w-6 h-6 text-blue-400" />
                            </div>
                            <div>
                                <div className="font-medium text-white">Email Us</div>
                                <a href="mailto:support@coderpalace.com" className="hover:text-blue-400 transition-colors">support@coderpalace.com</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className={`p-3 rounded-lg ${THEME.card}`}>
                                <MapPin className="w-6 h-6 text-blue-400" />
                            </div>
                            <div>
                                <div className="font-medium text-white">Location</div>
                                <div>San Francisco, CA</div>
                            </div>
                        </div>
                    </div>

                    <div className={`p-6 rounded-lg ${THEME.card}`}>
                        <h2 className="text-xl font-semibold mb-4">Send a Message</h2>
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="block text-sm font-medium mb-1 text-gray-300">Name</label>
                                <input type="text" className={`w-full p-2 rounded ${THEME.controlBg} ${THEME.divider}`} placeholder="Your name" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1 text-gray-300">Email</label>
                                <input type="email" className={`w-full p-2 rounded ${THEME.controlBg} ${THEME.divider}`} placeholder="your@email.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1 text-gray-300">Message</label>
                                <textarea className={`w-full p-2 rounded ${THEME.controlBg} ${THEME.divider} h-32`} placeholder="How can we help?"></textarea>
                            </div>
                            <button className={`${THEME.primaryBtn} w-full`}>Send Message</button>
                            <p className="text-xs text-gray-400 text-center mt-2">This form is currently for demonstration.</p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
