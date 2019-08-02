const Vue = (window as any).Vue;

import { Registration } from "./types";
import { camelCaseToDash } from "./utils";

export function initVueFrontend(registration: Registration) {
  class VueFrontend extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: "open" });
      const element = document.createElement("div");
      element.innerText = "¯\\_(ツ)_/¯";
      //   registration.component.el = document.createElement("div");
      //   shadow.appendChild(new Vue(registration.component));
      shadow.appendChild(element);
    }
  }
  customElements.define(camelCaseToDash(registration.name), VueFrontend);
}
