import { BRAND } from '../config';
import SEOHead from '../components/SEOHead';

export default function Terms() {
    return (
        <>
            <SEOHead
                title="Terms & Conditions"
                description={`Terms and Conditions for using ${BRAND}.`}
            />
            <div className="max-w-4xl mx-auto px-4 py-12 text-gray-300">
                <h1 className="text-3xl font-bold text-white mb-8">Terms & Conditions</h1>

                <div className="space-y-6">
                    <p className="text-sm">Last updated: {new Date().toLocaleDateString()}</p>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-2">1. Agreement to Terms</h2>
                        <p>
                            By accessing our website, you agree to be bound by these Terms and Conditions and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-2">2. Use License</h2>
                        <p>
                            Permission is granted to temporarily download one copy of the materials on {BRAND}'s Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>modify or copy the materials;</li>
                            <li>use the materials for any commercial purpose or for any public display;</li>
                            <li>attempt to reverse engineer any software contained on {BRAND}'s Website;</li>
                            <li>remove any copyright or other proprietary notations from the materials;</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-2">3. Acceptable Use</h2>
                        <p>
                            You agree not to use the compiler service to:
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Run malicious code, mining scripts, or denial of service attacks.</li>
                            <li>Host unlawful content.</li>
                            <li>Probe, scan, or test the vulnerability of any system or network.</li>
                        </ul>
                        <p className="mt-2">
                            We reserve the right to terminate your access immediately if you violate these conditions.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-2">4. Disclaimer</h2>
                        <p>
                            The materials on {BRAND}'s Website are provided "as is". {BRAND} makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties. Further, {BRAND} does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its Website or otherwise relating to such materials or on any sites linked to this site.
                        </p>
                    </section>
                </div>
            </div>
        </>
    );
}
