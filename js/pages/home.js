import { userInfo } from '/js/components/userInfo.js';

class HomePage extends HTMLElement {
    static get Name() {
        return 'home-page'
    }

    constructor() {
        super();
    }
    
    connectedCallback() {
        this.render();
    }

    render() {
        this.append(userInfo);
    }

    static InitPage(){
        window.customElements.define(HomePage.Name, HomePage);
    }
}

HomePage.InitPage();
const home = document.createElement(HomePage.Name);
export { home }