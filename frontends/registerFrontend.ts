export interface Registration {
  name: string;
  componentType: "React" | "Vue";
  component: any;
}

const REGISTRATION_EVENT_NAME = "MyApp/Registration";
export function registerFrontend(registration: Registration) {
  console.log(`Registering: ${registration.name}`);

  const registrationEvent = new CustomEvent(REGISTRATION_EVENT_NAME, {
    detail: registration
  });
  document.dispatchEvent(registrationEvent);
}
