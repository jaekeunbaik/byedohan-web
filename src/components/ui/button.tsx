import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { ElementType } from 'react';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 relative hover:cursor-pointer',
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#4ADE80] after:scale-x-0 after:transition-transform after:duration-300",
        destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline: 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        ghost:
          "hover:bg-accent hover:text-accent-foreground after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#4ADE80] after:scale-x-0 data-[state=active]:after:scale-x-100 after:transition-transform after:duration-300",
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3 text-xs',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  dynamicWidth?: boolean;
  tagName?: ElementType;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, tagName: Tag = 'button', dynamicWidth = false, ...props }, ref) => {
    const Comp = asChild ? Slot : (Tag as ElementType);
    const [isActive, setIsActive] = React.useState(false);
    const buttonClassName = cn(buttonVariants({ variant, size }), className);
    const dynamicStyle = dynamicWidth && props.children ? { width: `${props.children.toString().length * 10}px` } : {};

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      setIsActive(!isActive);
      if (props.onClick) {
        props.onClick(e);
      }
    };

    return (
      <Comp
        ref={ref}
        className={buttonClassName}
        style={{ ...props.style, ...dynamicStyle }}
        data-state={isActive ? 'active' : 'inactive'}
        onClick={handleClick}
        {...props}
      >
        {props.children}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
