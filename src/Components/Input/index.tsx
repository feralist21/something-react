import { ChangeEventHandler, FC } from 'react';

interface InputProps {
    label?: string;
    caption?: string;
    type: 'text' | 'number';
    id?: string;
    placeholder?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

const Input: FC<InputProps> = ({ label, caption, type, id, placeholder, onChange }) => {
    return (
        <div className='flex flex-col gap-y-1'>
            {label && (
                <label className='text-sm' htmlFor='todo'>
                    {label}
                </label>
            )}
            <input
                className='block py-2 px-3 border-2 border-slate-300 w-full focus:border-black outline-none'
                type={type}
                id={id}
                placeholder={placeholder}
                onChange={onChange}
            />
            {caption && <span className='text-xs text-red-500'>{caption}</span>}
        </div>
    );
};

export default Input;
