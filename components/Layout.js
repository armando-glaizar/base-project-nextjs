import React from 'react';

import HeaderComponent from './Header';
import FooterComponent from './Footer';

const LayoutComponent = ({ children }) => {
    return (
        <div>
            <HeaderComponent/>
            { children }
            <FooterComponent/>
        </div>
    );
}

export default LayoutComponent;
