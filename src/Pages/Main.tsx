import { useState } from 'react';
import Button from '@/Components/Button';
import TodoItem from '@/Components/TodoItem';
import ModalCustom from '@/Components/Modal';

const MainPage = () => {
    interface TodoListProps {
        title: string;
        deadline: string;
        id: number;
    }

    const mockTodoList: Array<TodoListProps> = [
        {
            title: 'Get products in store',
            deadline: 'now',
            id: 0,
        },
        {
            title: 'Eating...',
            deadline: 'tomorow',
            id: 1,
        },
    ];

    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    return (
        <div className='w-[700px] mx-auto flex flex-col gap-y-2'>
            <div className='flex items-center justify-between'>
                <Button view='primary' onClick={onOpenModal}>
                    Add Task
                </Button>
                <div>this a select</div>
            </div>
            <div className='p-6 bg-gray-300 flex flex-col gap-y-4 rounded-lg'>
                {mockTodoList.length > 0 ? (
                    mockTodoList.map((todoItem) => (
                        <TodoItem
                            title={todoItem.title}
                            deadline={todoItem.deadline}
                            key={todoItem.id}
                        />
                    ))
                ) : (
                    <div>Oups... Noting</div>
                )}
            </div>
            <ModalCustom open={open} onCloseModal={onCloseModal} title='Add Todo'>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil fugiat, quam laborum itaque temporibus, perferendis fuga suscipit aspernatur maiores minima, quasi libero nobis totam fugit repellendus dignissimos ab dolores dolor?</p>
            </ModalCustom>
        </div>
    );
};

export default MainPage;
