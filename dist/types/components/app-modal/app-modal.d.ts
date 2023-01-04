declare enum NotificationType {
  SUCCESS = "success",
  WARNING = "warning",
  ERROR = "error",
  EMPTY = "empty"
}
export declare class AppModal {
  icon: string;
  showModal: boolean;
  content?: string | HTMLElement;
  title?: string;
  type: NotificationType;
  defaultButton?: boolean;
  onClose?: () => void;
  render(): any;
}
export {};
