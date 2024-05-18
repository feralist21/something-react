import Checkbox from "@/Components/Checkbox";

const MainPage = () => {
    return (
        <div className='p-8 bg-gray-300 flex flex-col gap-y-2 rounded-lg w-[700px] mx-auto'>
            <div className='p-4 bg-white rounded-lg flex gap-x-3 items-center'>
                <Checkbox/>
                <div className='flex flex-col gap-y-1 flex-grow'>
                    <h2 className='text-lg font-medium'>Title Todo</h2>
                    <p className='text-sm'>Deadline: date</p>
                </div>
                <button className="p-2 bg-blue-300 text-white text-sm">Edit</button>
                <button className='p-2 bg-red-400 text-white text-sm'>Delete</button>
            </div>
        </div>
    );
};

export default MainPage;
