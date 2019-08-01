const ReactDOM = window.ReactDOM;
class App extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        const element = document.createElement("div");
        shadow.appendChild(element);
    }
}
export function registerComponents() {
    customElements.define("my-app", App);
}
