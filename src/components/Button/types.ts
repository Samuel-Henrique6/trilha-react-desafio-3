export interface IButton {
  title: string;
  variant?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: string;
}

export interface IButtonStyle {
  variant: string;
}
