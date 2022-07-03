import './styles/tabs.css';

class Tabs {
    constructor(container) {
        this.container = container;
        this.tabs = container.querySelectorAll('.trigger');
    }
    init() {
        this.tabs.forEach(tab => {
            tab.addEventListener('click', event => {
                this.toggleTabs(event);
                this.toggleContent(event);
            });
        });
    }
    toggleTabs(event) {
        this.tabs.forEach(tab => tab.classList.remove('active'));
        event.target.classList.add('active');
    }
    toggleContent(event) {
        this.container.querySelectorAll('.content')
            .forEach(item => item.classList.remove('active'));
        const selector = event.target.dataset.target;
        const content = this.container.querySelector(selector);
        content.classList.add('active');
    }
}

export { Tabs as default };