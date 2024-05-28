import { useCallback, useState } from 'react';
import Button from '@/Components/Button';
import TodoItem from '@/Components/TodoItem';
import ModalCustom from '@/Components/Modal';
import Input from '@/Components/Input';
import Select from '@/Components/Select';

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

    interface SelectItemProps {
        label: string;
        id: number;
        value: string;
    }

    const items: SelectItemProps[] = [
        { label: 'Выполнено', id: 0, value: 'finished' },
        { label: 'Невыполнено', id: 1, value: 'unfinished' },
    ];

    const [selectedItem, setSelectedItem] = useState<SelectItemProps | null>(null);

    const handleSelectChange = useCallback((item: SelectItemProps) => {
        setSelectedItem(item);
    }, []);

    return (
        <div className='w-[700px] mx-auto flex flex-col gap-y-2'>
            <div className='flex items-center justify-between'>
                <Button view='primary' onClick={onOpenModal}>
                    Add Task
                </Button>
                <Select
                    className='w-[200px]'
                    placeholder='Выберите опцию'
                    items={items}
                    value={selectedItem}
                    onChange={handleSelectChange}
                />
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
                <Input type='text' />
            </ModalCustom>
        </div>
    );
};

export default MainPage;
