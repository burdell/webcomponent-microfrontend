const ReactDOM = (window as any).ReactDOM;

class App extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    const element = document.createElement("div");

    // shadow.appendChild(ReactDOM.render(HelloReact() as any, element));
    element.innerText = "yoooo";
    shadow.appendChild(element);
  }
}

export function registerComponents() {
  customElements.define("my-app", App);
}
