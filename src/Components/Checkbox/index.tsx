import { useState, ChangeEventHandler, FC, InputHTMLAttributes } from 'react';
import clsx from 'clsx';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    className?: string;
    checked?: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    inputId?: string;
    inputName?: string;
}

const Checkbox: FC<CheckboxProps> = ({
    label,
    className,
    checked,
    onChange,
    inputId,
    inputName,
    ...props
}) => {
    const [internalChecked, setInternalChecked] = useState<boolean>(checked ?? false);

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        if (onChange) {
            onChange(e);
        }
        if (checked === undefined) {
            setInternalChecked(e.target.checked);
        }
    };

    const isChecked = checked !== undefined ? checked : internalChecked;

    return (
        <label className={clsx('flex items-center justify-center cursor-pointer', className)}>
            <input
                className='appearance-none'
                type='checkbox'
                name={inputName}
                id={inputId}
                checked={isChecked}
                onChange={handleChange}
                aria-checked={isChecked}
                {...props}
            />
            {label && <span>{label}</span>}
            <div
                className={clsx(
                    isChecked ? 'border-blue-300' : 'border-slate-300',
                    'w-[20px] h-[20px] bg-transparent border-2 flex items-center justify-center rounded-sm',
                )}
            >
                <div className={clsx(isChecked ? 'bg-blue-300' : '', 'w-[10px] h-[10px] rounded-sm')}></div>
            </div>
        </label>
    );
};

export default Checkbox;
