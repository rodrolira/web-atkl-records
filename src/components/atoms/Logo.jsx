import React from 'react';

function Logo() {
    return (
        <a className="rtl:space-x-reverse max-[320px]:mx-0 mx-24 md:mx-2 md:block sm:hidden sm:mx-auto" href="/">
            <img alt="ATKL Records logo" className="invert h-full" src="/img/logo.png" />
        </a>
    );
}

export default Logo;
