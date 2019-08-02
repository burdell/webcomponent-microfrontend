const REGISTRATION_EVENT_NAME = "MyApp/Registration";

import { Registration } from "./types";
import { initReactFrontend } from "./ReactFrontend";

export function initFrontends() {
  document.addEventListener(REGISTRATION_EVENT_NAME, function(e: any) {
    const registration = e.detail as Registration;

    switch (registration.componentType) {
      case "React": {
        initReactFrontend(registration);
      }
      default: {
        return;
      }
    }
  });
}
