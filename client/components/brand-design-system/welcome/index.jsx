// ==================================================
// DesignSystem - DSWelcome
// ==================================================

import React from 'react';
import '../../../styling/root.less';

const BrandWelcome = () => (
    <div className="row">
        <div className="columns small-12">
            <h1 className="heading">Welcome (Brand)</h1>
        </div>
        <div className="columns small-12">
            <p>Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit. </p>
            <p>We also have a brand guide you should check out.</p>
        </div>
        <div className="columns small-12">
            <form method="get" action="https://webassets.mongodb.com/MongoDB_Brand_Resources.zip">
                <button className="button button-is-info" type="submit">Download the Brand Guide</button>
            </form>
        </div>
    </div>
);

export default BrandWelcome;
