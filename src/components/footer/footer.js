import './footer.css';
import * as Logo from '../logo/logo';
import discord from './discord.svg';
import linkedin from './linkedin.svg';

const FOOTER_ELEMENT_ID = "footer";

function layout() {
    return /*HTML*/ `
    <footer id="${FOOTER_ELEMENT_ID}">
        <div class="container">
            <div class="footer-info">
                ${Logo.layout()}
                <strong>Junior Developers of Sweden</strong>
                <p>JDS är en icke-vinst driven organisation vars syfte är att skapa en gemenskap för juniorutvecklare i Sverige.</p>
            </div>
            <div class="footer-social">
                <a href="#"><img src=${discord} /></a>
                <a href="#"><img src=${linkedin} /></a>
            </div>            
        </div>
    </footer>
    `;
}

export { layout };