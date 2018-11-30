class UserInfo extends HTMLElement {
    static get Name() {
        return 'user-info';
    }

    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <label>Name:</label><span>Victor</span>
        `
    }

    static init() {
        window.customElements.define(UserInfo.Name, UserInfo);
    }
}

UserInfo.init();
const userInfo = document.createElement(UserInfo.Name);
export { userInfo };