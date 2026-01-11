import { THEME, BRAND } from '../config';
import SEOHead from '../components/SEOHead';

export default function About() {
    return (
        <>
            <SEOHead
                title="About Us"
                description={`Learn about ${BRAND}'s mission to lower the barrier to entry for coding education.`}
            />
            <div className="max-w-4xl mx-auto px-4 py-12">
                <h1 className="text-3xl font-bold mb-6">About {BRAND}</h1>

                <div className={`space-y-6 text-gray-300`}>
                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">Our Mission</h2>
                        <p>
                            At {BRAND}, we believe that setting up a development environment shouldn't be the hardest part of learning to code.
                            Our mission is to provide an instant, zero-setup coding environment that allows students, educators, and developers
                            to focus on what matters most: writing and understanding code.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">Who We Are</h2>
                        <p>
                            We are a team of software engineers and educators who vividly remember the frustration of configuring compilers,
                            fighting with path variables, and debugging environment issues instead of learning syntax and algorithms.
                            We built {BRAND} to be the tool we wished we had when we started.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">What Makes Us Unique</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Zero Friction:</strong> Open the URL and start coding in seconds. No sign-up required for core features.</li>
                            <li><strong>Multi-Language Support:</strong> Switch between Python, JavaScript, C++, Java, and more instantly.</li>
                            <li><strong>Clean, Distraction-Free UI:</strong> A modern interface designed for focus, not clutter.</li>
                            <li><strong>Education First:</strong> Features like consolidated output and simple error messages are tailored for learners.</li>
                        </ul>
                    </section>
                </div>
            </div>
        </>
    );
}
