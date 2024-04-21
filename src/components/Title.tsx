import Image from "next/image";

export default function Title() {

    return(
    <>
        <div className="flex justify-center mt-10">
            <div className="flex justify-center items-center w-[100%] md:w-[80%] lg:w[70%] xl:w-[931px] h-[234px] ">
                <h1 className="font-lato text-center p-4 text-[#01303A] text-[24px] md:text-[36px] lg:text-[48px] xl:text-[68px] tracking-[-2px] md:tracking-[-3px] lg:tracking-[-4px] leading-[150%] md:leading-[120%] lg:leading-[108%] ">
                    Гъвкави решения за сухопътен транспорт за всеки клиент
                </h1>
            </div>
        </div>

        <div className="flex justify-center mt-10">
    <div className="flex justify-center items-center w-[100%] md:w-[80%] lg:w-[70%] xl:w-[969px]">
        <Image src="/image.png" alt="" width={969} height={690} className="w-full h-auto" />
    </div>
</div>

    </>

    );
}