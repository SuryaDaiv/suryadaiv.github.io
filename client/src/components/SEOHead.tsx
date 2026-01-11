import { Helmet } from 'react-helmet-async';
import { BRAND, TITLE_SUFFIX } from '../config';

type Props = {
    title: string;
    description: string;
    type?: 'website' | 'article';
};

export default function SEOHead({ title, description, type = 'website' }: Props) {
    const fullTitle = `${title}${TITLE_SUFFIX}`;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={type} />
            <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
    );
}
