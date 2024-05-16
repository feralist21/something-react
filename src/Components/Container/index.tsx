import clsx from 'clsx';
import { ReactNode, FC } from 'react';
interface ContainerProps {
    children: ReactNode;
    className?: string;
}

const Container: FC<ContainerProps> = ({ children, className }) => {
    return <div className={clsx('container mx-auto px-5', className)}>{children}</div>;
};

export default Container;
