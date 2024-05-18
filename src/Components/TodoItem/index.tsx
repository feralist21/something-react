import React, { ChangeEvent, FC, useState } from 'react';
import Button from '@/Components/Button';
import Checkbox from '@/Components/Checkbox';

interface TodoItemProps {
    title: string;
    deadline: string;
}

const TodoItem: FC<TodoItemProps> = ({ title, deadline }) => {
    const [isChecked, setIsChecked] = useState<boolean>(false);

    const handleChangeCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
    };

    const handleClickEditButton = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log('click edit', event);
    }

    const handleClickDeleteButton = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log('click delete', event);
    }

    return (
        <div className='p-4 bg-white rounded-lg flex gap-x-3 items-center'>
            <Checkbox onChange={handleChangeCheckbox} checked={isChecked} />
            <div className='flex flex-col gap-y-1 flex-grow'>
                <h2 className='text-lg font-medium'>{title}</h2>
                <p className='text-sm'>Deadline: {deadline}</p>
            </div>
            <Button view='primary' onClick={handleClickEditButton}>Edit</Button>
            <Button view='secondary' onClick={handleClickDeleteButton}>Delete</Button>
        </div>
    );
};

export default TodoItem;
