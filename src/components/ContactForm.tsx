//@refresh
"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


export default function ContactForm() {
    const [phoneNumber, setPhoneNumber] = useState('');


function handleSubmit(e: { preventDefault: () => void; }) {
    e.preventDefault();
    setPhoneNumber('')
}

    return(
<>
<div className="bg-[#394649] w-full h-[602px] mt-10 mb-10 flex justify-center items-center">
    <div className="flex flex-col justify-center w-[90%] md:w-[80%] lg:w-[728px] h-[60%] md:h-[80%] lg:h-[368px] items-center">
        
        <h1 className="text-[24px] md:text-[36px] lg:text-[72px] text-center leading-[150%] md:leading-[120%] tracking-[-2px] text-[#ffffff] mb-6 md:mb-10">Готови ли сте да работим заедно?</h1>
        
        <p className="text-[16px] md:text-[20px] lg:text-[20px] text-center leading-[170%] w-full lg:w-[684px] text-[#ffffff] mb-6 md:mb-10">Оставете вашият телефон и ние ще се свържем с вас, за да отговорим на всички въпроси</p>
        
        <div className="relative flex items-center w-full lg:w-[500px] mt-4">
            <div className="w-full lg:w-[427px] h-[56px] bg-white flex items-center justify-between pr-[10%] lg:pr-[137px] rounded-md">
                <div className="w-full lg:w-[290px] h-[56px] flex items-center">
                    <FontAwesomeIcon icon={faEnvelope} className='text-[#CCC] text-center pl-4' />
                    <input
                        type="tel"
                        className="outline-none p-4 w-full"
                        placeholder="Мобилен телефон"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </div>
            </div>
            
            <button className="absolute top-0 right-0 w-[30%] lg:w-[137px] h-[56px] bg-[#E7F874] text-[#083C2F] flex items-center justify-center text-[16px] rounded-md hover:bg-[#daf42b]"
                    onClick={handleSubmit}>
                Изпрати
            </button>
        </div>
    </div>
</div>
</>

    );
}