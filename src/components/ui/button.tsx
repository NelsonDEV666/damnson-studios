import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "ghost" | "outline" | "neon";

interface BaseProps {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
}

interface ButtonAsButton extends BaseProps, ButtonHTMLAttributes<HTMLButtonElement> {
  href?: never;
}

interface ButtonAsLink extends BaseProps {
  href: string;
  target?: string;
  rel?: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: `
    bg-neon text-void
    hover:bg-[#d17fff] hover:shadow-neon hover:-translate-y-0.5
  `,
  neon: `
    bg-transparent text-neon
    border border-neon
    shadow-neon
    hover:bg-neon hover:text-void hover:-translate-y-0.5
  `,
  outline: `
    bg-transparent text-muted
    border border-muted/50
    hover:border-neon hover:text-neon hover:shadow-neon hover:-translate-y-0.5
  `,
  ghost: `
    bg-transparent text-muted
    hover:text-white
  `,
};

const BASE_CLASSES = `
  inline-flex items-center justify-center gap-2
  font-body font-bold text-sm tracking-[0.08em] uppercase
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
