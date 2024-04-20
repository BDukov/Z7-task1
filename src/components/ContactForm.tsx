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
        <div className="bg-[#394649] w-[100%] h-[602px] mt-10 mb-10 flex justify-center items-center">
            <div className="flex flex-col justify-center w-[728px] h-[368px] items-center">
                <h1 className="text-[72px] text-center leading-[108%] tracking-[-4px] text-[#ffffff]">Готови ли сте да работим заедно?</h1>
                <p className="text-[20px] text-center leading-[170%] w-[684px] text-[#ffffff] pt-6">Оставете вашият телефон и ние ще се свържем с вас, за да отговорим на всички въпроси</p>
                <div className="relative flex items-center mt-4">
  <div className="w-[427px] h-[72px] bg-white flex items-center justify-between pr-137px rounded-md ">
    <div className="w-[290px] h-[72px] flex items-center ">
    <FontAwesomeIcon icon={faEnvelope} className='text-[#CCC] text-center pl-4' />
    <input
      type="tel"
      className="outline-none p-4"
      placeholder="Мобилен телефон"
      value={phoneNumber}
      onChange={(e) => setPhoneNumber(e.target.value)}
    />

    </div>

  </div>
  <button className="absolute right-0 w-[137px] h-[72px] bg-[#E7F874] text-[#083C2F] flex items-center justify-center text-[16px] rounded-md hover:bg-[#daf42b]"
  onClick={handleSubmit}>
  Изпрати
</button>
</div>
            </div>
        </div>
        </>
    );
}