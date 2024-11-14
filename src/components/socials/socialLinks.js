import './socials.css';
import * as discord from './discord';
import * as linkedin from './linkedIn';

function socialLinks() {


    return /*HTML*/ `
    <nav class="social-links">
        ${discord.layout()}
        ${linkedin.layout()}
    </nav>
    `
}

export { socialLinks }