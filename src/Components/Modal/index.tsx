import { FC, ReactNode, useMemo } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

interface ModalCustomProps {
    open: boolean;
    onCloseModal: () => void;
    title?: string;
    children: ReactNode;
}

const ModalCustom: FC<ModalCustomProps> = ({ title, open, onCloseModal, children, ...props }) => {
    const cahsedStylesModal = useMemo(() => {
        return {
            modal: 'w-[500px]',
            overlay: 'bg-gray-900/50',
        };
    }, []);

    return (
        <Modal classNames={cahsedStylesModal} open={open} onClose={onCloseModal} center {...props}>
            {title && <h2 className='text-2xl mb-4'>{title}</h2>}
            {children}
        </Modal>
    );
};

export default ModalCustom;
