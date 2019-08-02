const ReactDOM = (window as any).ReactDOM;

import { Registration } from "./types";
import { camelCaseToDash } from "./utils";

export function initReactFrontend(registration: Registration) {
  class ReactFrontend extends HTMLElement {
    constructor() {
      super();

      const shadow = this.attachShadow({ mode: "open" });
      const element = document.createElement("div");

      const reactComponent = (window as any)[registration.name];
      shadow.appendChild(ReactDOM.render(reactComponent(), element));
      shadow.appendChild(element);
    }
  }

  customElements.define(camelCaseToDash(registration.name), ReactFrontend);
}
