export interface Registration {
  name: string;
  componentType: "React" | "WebComponent";
  component: any;
}

const REGISTRATION_EVENT_NAME = "MyApp/Registration";
export function registerFrontend(registration: Registration) {
  console.log(`Registering: ${registration.name}`);

  (window as any)[registration.name] = registration.component;
  const registrationEvent = new CustomEvent(REGISTRATION_EVENT_NAME, {
    detail: registration
  });
  document.dispatchEvent(registrationEvent);
}
