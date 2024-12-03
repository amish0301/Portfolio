import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useDocumentTitle = ({ defaultTitle }) => {
    const location = useLocation();

    useEffect(() => {
        const section = location.pathname.split('/')[1];
        const sectionTitle = section.charAt(0).toUpperCase() + section.slice(1);
        document.title = section ? `${defaultTitle} | ${sectionTitle}` : defaultTitle;
    }, [location, defaultTitle]);

    return null;
}

export default useDocumentTitle