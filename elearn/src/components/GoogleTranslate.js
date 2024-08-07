import React, { useEffect } from 'react';

const GoogleTranslate = () => {
    useEffect(() => {
        const addGoogleTranslateScript = () => {
            const script = document.createElement('script');
            script.src = `https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit`;
            script.async = true;
            document.body.appendChild(script);
        };

        const googleTranslateElementInit = () => {
            new window.google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
        };

        window.googleTranslateElementInit = googleTranslateElementInit;
        addGoogleTranslateScript();
    }, []);

    return <div id="google_translate_element"></div>;
};

export default GoogleTranslate;
