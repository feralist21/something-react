import Button from '@/Components/Button';
import TodoItem from '@/Components/TodoItem';

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

    return (
        <div className='w-[700px] mx-auto flex flex-col gap-y-2'>
            <div className='flex items-center justify-between'>
                <Button view='primary'>Add Task</Button>
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
        </div>
    );
};

export default MainPage;
