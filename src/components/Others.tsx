import Image from 'next/image';

export default function Others() {

    return(
<>
<div className="flex justify-center items-center mb-[5rem]">

    <div className="flex justify-center w-[100%] md:w-[90%] lg:w-[1296px] h-[auto] md:h-[481px] flex-col mt-[3rem]">

        <h1 className="text-[24px] md:text-[36px] text-[#01303A] text-start mb-[2rem]">Други услуги</h1>

        <div className="flex flex-col md:flex-row justify-between items-center">

            <article className="mb-[2rem] md:mb-0">
                <Image src="/image1.png" alt="" width={416} height={300} className="hover:scale-105 transition-transform duration-500 ease-in-out cursor-pointer"/>
                <p className="text-[18px] md:text-[24px] text-[#01303A] mt-4 leading-[140%] tracking-[-0.5px] hover:text-black hover:scale-105 transition-transform duration-500 ease-in-out cursor-pointer">Опасни товари(ADR)</p>
            </article>

            <article className="mb-[2rem] md:mb-0">
                <Image src="/image2.png" alt="" width={416} height={300} className="hover:scale-105 transition-transform duration-500 ease-in-out cursor-pointer"/>                   
                <p className="text-[18px] md:text-[24px] text-[#01303A] mt-4 leading-[140%] tracking-[-0.5px] hover:text-black hover:scale-105 transition-transform duration-500 ease-in-out cursor-pointer">Хладилен транспорт</p>
            </article>

            <article className="mb-[2rem] md:mb-0">
                <Image src="/image3.png" alt="" width={416} height={300} className="hover:scale-105 transition-transform duration-500 ease-in-out cursor-pointer"/>               
                <p className="text-[18px] md:text-[24px] text-[#01303A] mt-4 leading-[140%] tracking-[-0.5px] hover:text-black hover:scale-105 transition-transform duration-500 ease-in-out cursor-pointer">Извънгабаритни товари(ADR)</p>
            </article>

        </div>
    </div>
</div>
</>

    );
}