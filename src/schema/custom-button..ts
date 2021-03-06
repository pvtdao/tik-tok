export type ButtonSchema = {
  children: React.ReactElement | string;
  to?: string;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;

  primary?: boolean;
  outlined?: boolean;
  small?: boolean;
  large?: boolean;
  text?: boolean;
  disabled?: boolean;
  rounded?: boolean;
  blackWhite?: boolean;
  color?: string;
  borderColor?: string;

  className?: string;

  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  [key: string]: any;
};
