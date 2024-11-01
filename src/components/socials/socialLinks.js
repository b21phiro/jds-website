import './socials.css';
import * as discord from './discord';
import * as linkedin from './linkedIn';

function socialLinks() {


    return /*HTML*/ `
    <div class="social-links">
        ${discord.layout()}
        ${linkedin.layout()}
    </div>
    `
}

export { socialLinks }