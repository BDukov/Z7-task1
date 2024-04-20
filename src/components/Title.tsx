import Image from "next/image";

export default function Title() {

    return(
    <>
<div className="flex justify-center mt-10">
    <div className="flex justify-center items-center w-[931px] h-[234px]">
        <h1 className="font-lato text-center p-4 text-[#01303A] text-[68px] tracking-[-4px] leading-[108%] ">
            Гъвкави решения за сухопътен транспорт за всеки клиент
        </h1>
    </div>
</div>

<div className="flex justify-center mt-10">
    <div className="flex justify-center items-center w-[969px] h-[690px]">
        <Image src="/image.png" alt="" width={969} height={690}/>
        
    </div>
</div>
    </>

    );
}