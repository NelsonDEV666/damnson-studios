import Link from "next/link";
import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "ghost" | "outline" | "neon";

interface BaseProps {
  variant?: ButtonVariant;
  className?: string;
}

// 🧠 Omit 'children' from native attributes to prevent the duplicate collision
interface ButtonAsButton extends BaseProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  children: ReactNode;
  href?: never;
}

interface ButtonAsLink extends BaseProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> {
  children: ReactNode;
  href: string;
  target?: string;
  rel?: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: `
    bg-[#b44fff] text-[#0a0a0b]
    hover:bg-[#d17fff] hover:shadow-[0_0_20px_rgba(180,79,255,0.4)] hover:-translate-y-0.5
  `,
  neon: `
    bg-transparent text-[#b44fff]
    border border-[#b44fff]
    shadow-[0_0_15px_rgba(180,79,255,0.2)]
    hover:bg-[#b44fff] hover:text-[#0a0a0b] hover:-translate-y-0.5
  `,
  outline: `
    bg-transparent text-[#52525e]
    border border-[#2c2c32]
    hover:border-[#b44fff] hover:text-[#b44fff] hover:-translate-y-0.5
  `,
  ghost: `
    bg-transparent text-[#52525e]
    hover:text-white
  `,
};

const BASE_CLASSES = `
  inline-flex items-center justify-center gap-2
  font-bold text-sm tracking-[0.08em] uppercase
  px-7 py-4 rounded-sm
  transition-all duration-200
  disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0
`;

export function Button(props: ButtonProps) {
  const { variant = "primary", children, className = "" } = props;
  const classes = `${BASE_CLASSES} ${VARIANT_CLASSES[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, target, rel } = props;
    return (
      <Link href={href} target={target} rel={rel} className={classes}>
        {children}
      </Link>
    );
  }

  const { variant: _v, children: _c, className: _cl, href: _h, ...buttonProps } =
    props as ButtonAsButton & { href?: never };

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}