// ==================================================
// DesignSystem - DSWelcome
// ==================================================

import React from 'react';
import { wrap, heading } from './style.css';

const BrandWelcome = () => (
    <div className={wrap}>
        <h1 className={heading}>Welcome (Brand)</h1>
            <div>
                <p>Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit. </p>
                <p>We also have a brand guide you should check out.</p>
            </div>
            <form method="get" action="file.doc">
                <button className="button button-is-info" type="submit">Download the Brand Guide</button>
            </form>
    </div>
);

export default BrandWelcome;
