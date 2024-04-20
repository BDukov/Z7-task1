export default function Header() {
    return (

            <div className='flex flex-row w-1308 h-51 text-[#01303A] gap-20 mt-10 items-center'>
                <div className="flex justify-center items-center h-full w-full">
                    <p className="text-xl font-bold text-[29.65px] tracking-[-0.62px]">Website</p>
                </div>
                <div className="flex justify-center items-center h-full w-full space-x-10">
                    <p className="hover:text-black cursor-pointer hover:underline leading-[170%] ">Начало</p>
                    <p className="hover:text-black cursor-pointer  hover:underline leading-[170%]">За нас</p>
                    <p className="hover:text-black cursor-pointer hover:underline leading-[170%]">Услуги</p>
                    <p className="hover:text-black cursor-pointer hover:underline leading-[170%]">Цени</p>
                    <p className="hover:text-black cursor-pointer hover:underline leading-[170%]">Как работи</p>
                    <p className="hover:text-black cursor-pointer hover:underline leading-[170%] ">Контакти</p>
                </div>
                <div className="flex justify-center items-center h-full w-full space-x-10">
                    <p className="hover:text-black cursor-pointer hover:underline leading-[170%] ">Профил</p>
                    <button className="bg-white border border-[#01303A] px-4 py-3 rounded-md text-[#01303A] hover:bg-[#01303A] hover:text-white text-[16px]">
                        Заявка за пратка
                    </button>
                </div>
            </div>
 
    );
}
