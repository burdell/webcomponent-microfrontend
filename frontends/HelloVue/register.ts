import { registerFrontend } from "../registerFrontend";
import { HelloVue } from "./component";

registerFrontend({
  componentType: "Vue",
  name: "HelloVue",
  component: HelloVue
});
