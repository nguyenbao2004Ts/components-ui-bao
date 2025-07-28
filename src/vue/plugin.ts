import type { App } from "vue";
import Button from "./components/Button.vue";
import Input from "./components/Input.vue";
import Modal from "./components/Modal.vue";

export interface ComponentsUIBaoOptions {
  prefix?: string;
}

export default {
  install(app: App, options: ComponentsUIBaoOptions = {}) {
    const prefix = options.prefix || "Bao";

    // Register all components globally
    app.component(`${prefix}Button`, Button);
    app.component(`${prefix}Input`, Input);
    app.component(`${prefix}Modal`, Modal);
  },
};

// Named exports for individual components
export { Button, Input, Modal };
