import { useEffect } from 'react';

const SEO = ({ title, description, keywords }) => {
    useEffect(() => {
        document.title = title ? `${title} | CodeOrbit` : 'CodeOrbit - Learn to Code & Run Programs Online';

        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', description || 'Learn programming with interactive tutorials and an online compiler. CodeOrbit helps you master Python, JavaScript, C++, and more.');

        if (keywords) {
            let metaKeywords = document.querySelector('meta[name="keywords"]');
            if (!metaKeywords) {
                metaKeywords = document.createElement('meta');
                metaKeywords.setAttribute('name', 'keywords');
                document.head.appendChild(metaKeywords);
            }
            metaKeywords.setAttribute('content', keywords);
        }
    }, [title, description, keywords]);

    return null;
};

export default SEO;
