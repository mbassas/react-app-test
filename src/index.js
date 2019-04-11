import React from 'react';
import ReactDOM from 'react-dom'; //print to html
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import common_en from "./i18n/locale.en.json";
import common_es from "./i18n/locale.es.json";
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
    .use(LanguageDetector)
    .init({
        interpolation: { escapeValue: false },  // React already does escaping
        fallbackLng: 'en',                             // language to use
        resources: {
            en: {
                common: common_en               // 'common' is our custom namespace
            },
            es: {
                common: common_es
            },
        }
    });

ReactDOM.render(
    <I18nextProvider i18n={i18next}>
        <App/>
    </I18nextProvider>,
     document.getElementById('root'));