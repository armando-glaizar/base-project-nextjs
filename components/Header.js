import React from 'react';
import Link from 'next/link';

const HeaderComponent = () => {
    return (
        <nav>
            <menu>
                <a href='/'>Home</a>
                <Link href='/about'>About</Link>
            </menu>
        </nav>
    );
}

export default HeaderComponent;
