import { type ComponentProps } from "react";

// 'extends' ensures we get all 100+ standard button props for free
interface ButtonProps extends ComponentProps<"button"> {
  variant?: "primary" | "secondary" | "danger";
  isLoading?: boolean;
}

export const BaseButton = ({
  variant = "primary",
  isLoading,
  children,
  ...rest // All other props (onClick, type, style, etc.)
}: ButtonProps) => {
  return (
    <button
      {...rest} // Spreading them here makes it behave like a real button
      disabled={isLoading || rest.disabled}
      className={`btn btn-${variant}`}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
};

// Discriminated Unions (The "Conditional Prop")
type ActionButtonProps =
  | { type: "button"; onClick: () => void; href?: never }
  | { type: "link"; href: string; onClick?: never };

export const ActionButton = (props: ActionButtonProps) => {
  if (props.type === "link") {
    return <a href={props.href}>{/* ... */}</a>;
  }
  return <button onClick={props.onClick}>{/* ... */}</button>;
};

// Usage:
// <ActionButton type="link" href="/home" /> -> Valid
// <ActionButton type="link" onClick={() => {}} /> -> Error! (Links don't use onClick)

// Polymorphic Components
import type { ElementType, ComponentPropsWithoutRef, ReactNode } from "react";

// 'T' is a Generic that represents the HTML tag name
interface TextProps<T extends ElementType> {
  as?: T;
  children: ReactNode;
  color?: string;
}

// We combine our custom props with the props of the specific HTML tag 'T'
type PolymorphicTextProps<T extends ElementType> = TextProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof TextProps<T>>;

export const Text = <T extends ElementType = "span">({
  as,
  children,
  color,
  ...rest
}: PolymorphicTextProps<T>) => {
  const Component = as || "span"; // Default to span
  return (
    <Component style={{ color }} {...rest}>
      {children}
    </Component>
  );
};

// Usage:
// <Text as="h1">This is a Heading</Text>
// <Text as="p">This is a paragraph</Text>
// <Text as="label" htmlFor="id">This is a label</Text>

// components/Button.tsx

export const Button = ({
  variant = "primary",
  children,
  ...props
}: ButtonProps) => {
  const styles = {
    backgroundColor: variant === "danger" ? "#dc2626" : "#2563eb",
    color: "white",
    padding: "8px 16px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
  };

  return (
    <button style={styles} {...props}>
      {children}
    </button>
  );
};
