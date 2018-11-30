import home from '/js/pages/home.js';

class App {
    constructor(selector){
        this.app = document.querySelector(selector);
        this.render();
    }

    render(){
        this.app.append(home);
    }
}

export default new App('[app]');