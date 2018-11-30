import home from '/js/pages/home.js';

class App {
    constructor(){
        this.app = document.querySelector('.app');
        this.render();
    }

    render(){
        this.app.append(home);
    }
}

export default new App();