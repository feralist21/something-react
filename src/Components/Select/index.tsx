import clsx from 'clsx';
import { FC, useState, useEffect, useRef } from 'react';

type SelectItem = {
    label: string;
    id: number;
    value: string;
};

interface SelectProps {
    className?: string;
    placeholder?: string;
    items: SelectItem[];
    value?: SelectItem | null;
    onChange?: (item: SelectItem) => void;
}

const Select: FC<SelectProps> = ({ className, placeholder, items, onChange, value }) => {
    const [selectedOption, setSelectedOption] = useState<SelectItem | null>(value || null);
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef<HTMLDivElement>(null); // TODO: наверно здесь нужно сделать forwardRef;

    useEffect(() => {
        setSelectedOption(value || null);
    }, [value]);

    const toggling = () => {
        setIsOpen(!isOpen);
    };

    const onItemsClicked = (item: SelectItem) => {
        setSelectedOption(item);
        setIsOpen(false);
        if (onChange) {
            onChange(item);
        }
    };

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [selectRef]);

    return (
        <div className={clsx('relative', className)} ref={selectRef}>
            <button
                className='w-full flex items-center justify-between gap-x-3 py-2 px-2 text-sm rounded-sm bg-white border-2 border-blue-300 text-black min-h-9'
                type='button'
                onClick={toggling}
            >
                {selectedOption ? selectedOption.label : placeholder}
                <svg
                    className={clsx('w-4 h-4', isOpen ? 'rotate-180' : '')}
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        d='M12 4v16m0 0 6-6m-6 6-6-6'
                        stroke='#000000'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    />
                </svg>
            </button>
            {isOpen && (
                <ul className='w-full absolute flex flex-col bg-slate-300 shadow-lg'>
                    {items.map((item) => (
                        <li
                            onClick={() => onItemsClicked(item)}
                            className='py-2 px-2 cursor-pointer hover:bg-slate-200'
                            key={item.id}
                        >
                            {item.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Select;
