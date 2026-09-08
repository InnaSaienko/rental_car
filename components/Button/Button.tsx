"use client";

import Link from "next/link";
import type {ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode} from "react";
import css from "./Button.module.css";


type ButtonVariant = "primary" | "secondary" | "loadMore";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    children: ReactNode;
    href?: string;
}

const Button = ({
                    variant,
                    children,
                    className = "",
                    disabled = false,
                    href,
                    ...restProps
                }: ButtonProps) => {
    const baseClassName = `${css.button} ${variant ? css[variant] : ''} ${className}`.trim();

    if (href) {
        return (
            <Link className={baseClassName} href={href} {...restProps as AnchorHTMLAttributes<HTMLAnchorElement>}>
                {children}
            </Link>
        );
    }

    return (
        <button
            type="button"
            className={baseClassName}
            disabled={disabled}
            {...restProps  as ButtonHTMLAttributes<HTMLButtonElement>}>
            {children}
        </button>
    );
};

export default Button;