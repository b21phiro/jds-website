// import './chevron-logo.css';
import { Config } from '../../core/config.js';

const LOGO_CLASS_NAME = "chevron-logo";

function layout() {
    return /*HTML*/ `
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
        </svg>;
    `
}

export { layout };