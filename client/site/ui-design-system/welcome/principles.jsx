// ==================================================
// DesignSystem - DSWelcome
// ==================================================

import React from 'react';
import { Link } from 'react-router';

const UIPrinciples = () => (
  <div className="wrap">
    <div className="row">
      <div className="columns small-12">
        <h1 className="heading">Design Principles</h1>
      </div>
      <div className="columns small-12">
        <h2>In Our Products</h2>

        <div className="principle-row principle-row-clarity">
            <h3 className="principle-row-heading">Clarity</h3>
            <p className="principle-row-description">Through the use of familiar patterns, guided workflows, inline instructions and contextual information, 
            our products are understood without the need for a manual, where possible, and provide easy access to 
            concise and clear documentation where needed. Terminology is carefully considered and maps closely to the 
            purpose or concept it describes. Cognitive load is offloaded onto the application wherever possible.</p>
        </div>

        <div className="principle-row principle-row-integrity">
            <h3>Integrity</h3>
            <p>Information communicated to the user is accurate and thorough. Complete transparency instills 
            confidence and trust in the resilience and safety of the product, which is crucial for managing 
            mission critical infrastructure. Esoteric technical details are dialed back in primary views but are 
            always accessible to users who seek them.</p>
        </div>

        <div className="principle-row principle-row-inclusiveness">
            <h3>Inclusiveness</h3>
            <p>Our products serve everyone from beginners learning how to use MongoDB for the first time to experts 
            in the field. They empathize with the user, anticipate their goals and needs to deliver an experience 
            that feels custom tailored. When a beginner feels stuck, the product provides guidance. When an expert 
            desires a shortcut or advanced feature, the product supplies it exactly as the user would expect.</p>
        </div>

        <div className="principle-row principle-row-consistency">
            <h3>Consistency</h3>
            <p>We offer a full suite of products that fit into each stage of a user’s lifecycle and workflow. 
            Information and interaction patterns that appear in different places are consistent visually and 
            conceptually. This allows users to move fluidly through our products, confident that what they learn in 
            one will carry over to all others.</p>
        </div>

        <div className="principle-row principle-row-automation">
            <h3>Automation</h3>
            <p>Our products convey an understanding that sometimes the best design is invisible to the user. While 
            our products break complicated tasks into simple and intuitive flows, the biggest impact is achieved when 
            the work is done for the user. Not just a matter of convenience, when we automate a task we reduce chance 
            of user error, leading to a safer overall experience. Our products automate where possible while leaving 
            control with the user where needed.</p>
        </div>

        <h2>How We Work</h2>
        <div className="principle-row principle-row-collaboration">
            <h3>Collaboration</h3>
            <p>We recognize that the best work comes from diligent collaboration. We work side-by-side with other 
            designers, engineers, and product managers.</p> 
        </div>

        <div className="principle-row principle-row-rigor">
            <h3>Rigor</h3>
            <p>We aren’t satisfied with our solutions until we’ve tested them and proven their effectiveness. We 
            validate ideas and concepts early in the design process, before any wireframing takes place. We aren’t 
            afraid to iterate quickly, leaving behind solutions we initially thought promising. Data is what guides us.</p> 
        </div>

        <div className="principle-row principle-row-passion">
            <h3>Passion</h3>
            <p>We are intensely passionate about our work. We strive for a level of excellence that delights the user. 
            Even seemingly imperceptible details receive special attention. We do this so that our products go beyond 
            mere utility to be cherished by the user.</p> 
        </div>

        <div className="principle-row principle-row-impact">
            <h3>Impact</h3>
            <p>We value impact over deliverables. We recognize that our tools and process, while constantly evolving 
            and improving, are only a means to achieving positive outcomes for the user.</p> 
        </div>
      </div>
    </div>
  </div>
);

export default UIPrinciples;
