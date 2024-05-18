import clsx from 'clsx';
import { ComponentProps, ElementType, ReactNode } from 'react';

type ButtonOwnProps<E extends ElementType = ElementType> = {
    children: ReactNode;
    className?: string;
    view?: 'primary' | 'secondary';
    as?: E;
};

type ButtonProps<E extends ElementType> = ButtonOwnProps<E> &
    Omit<ComponentProps<E>, keyof ButtonOwnProps>;

const defaultElement = 'button';

// TODO: добавить forwardRef
export default function Button<E extends ElementType = typeof defaultElement>({
    children,
    as,
    className,
    view,
    ...otherProps
}: ButtonProps<E>) {
    const classes = clsx(
        className,
        'block p-2 text-sm rounded-sm',
        view === 'primary' ? 'bg-blue-300 text-white' : '',
        view === 'secondary' ? 'bg-red-400 text-white' : '',
    );
    const TagName = as || defaultElement;

    return (
        <TagName className={classes} {...otherProps}>
            {children}
        </TagName>
    );
}
