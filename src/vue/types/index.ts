export interface ButtonProps {
  label?: string;
  variant?: "primary" | "secondary" | "danger" | "success" | "warning";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  loading?: boolean;
  block?: boolean;
}

export interface InputProps {
  modelValue?: string | number;
  placeholder?: string;
  type?: "text" | "email" | "password" | "number" | "url" | "tel";
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  error?: string;
}

export interface ModalProps {
  modelValue: boolean;
  title?: string;
  size?: "small" | "medium" | "large" | "fullscreen";
  closable?: boolean;
  maskClosable?: boolean;
}

export interface CardProps {
  title?: string;
  bordered?: boolean;
  hoverable?: boolean;
  loading?: boolean;
}

// Event types
export interface ButtonEvents {
  click: [event: MouseEvent];
}

export interface InputEvents {
  "update:modelValue": [value: string | number];
  change: [event: Event];
  focus: [event: FocusEvent];
  blur: [event: FocusEvent];
}

export interface ModalEvents {
  "update:modelValue": [value: boolean];
  close: [];
  confirm: [];
}
