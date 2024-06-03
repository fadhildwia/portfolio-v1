export interface ButtonProps {
  title: string;
  href: string;
  onClick: (position: string) => void;
}

export interface NavbarProps {
  isTop: boolean;
}
