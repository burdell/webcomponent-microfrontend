import { registerFrontend } from "../registerFrontend";
import { HelloReact } from "./component";

registerFrontend({
  componentType: "React",
  name: "HelloReact",
  component: HelloReact
});
