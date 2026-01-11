import { BRAND } from '../config';
import SEOHead from '../components/SEOHead';

export default function Privacy() {
    return (
        <>
            <SEOHead
                title="Privacy Policy"
                description={`Privacy Policy for ${BRAND}. How we collect, use, and protect your data.`}
            />
            <div className="max-w-4xl mx-auto px-4 py-12 text-gray-300">
                <h1 className="text-3xl font-bold text-white mb-8">Privacy Policy</h1>

                <div className="space-y-6">
                    <p className="text-sm">Last updated: {new Date().toLocaleDateString()}</p>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-2">1. Introduction</h2>
                        <p>
                            Welcome to {BRAND}. We respect your privacy and are committed to protecting your personal data.
                            This privacy policy will inform you as to how we look after your personal data when you visit our website
                            and tell you about your privacy rights and how the law protects you.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-2">2. Data We Collect</h2>
                        <p>
                            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li><strong>Identity Data:</strong> includes username or similar identifier if you create an account.</li>
                            <li><strong>Usage Data:</strong> includes information about how you use our website, such as code snippets aimed for compilation (collected temporarily for execution).</li>
                            <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-2">3. How We Use Your Data</h2>
                        <p>
                            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>To provide the service of compiling and running your code.</li>
                            <li>To improve our website and services.</li>
                            <li>To manage your relationship with us.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-2">4. Code Execution Privacy</h2>
                        <p>
                            Code submitted for execution is processed in ephemeral sandboxed environments. We do not permanently store
                            submitted code unless you explicitly use a "Save" or "Share" feature. Temporary logs of execution may be kept
                            for performance monitoring and abuse prevention.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-2">5. Cookies</h2>
                        <p>
                            We use cookies to distinguish you from other users of our website. This helps us to provide you with a good
                            experience when you browse our website and also allows us to improve our site.
                        </p>
                    </section>
                </div>
            </div>
        </>
    );
}
