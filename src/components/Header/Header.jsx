import React from 'react';
import { withTranslation } from 'react-i18next';

const Header = (props) => {
    const { i18n } = props;
    return (
        <div id="header" className="app--header">
            <div className="language-selector">
                <button onClick={() => i18n.changeLanguage('es')}>ES</button>
                <button onClick={() => i18n.changeLanguage('en')}>EN</button>
            </div>
        </div>
    );
};

export default withTranslation('common')(Header);