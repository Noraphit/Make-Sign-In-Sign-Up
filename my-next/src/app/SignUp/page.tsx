"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from "next/navigation";

type Props = {}

const page = (props: Props) => {
  const router = useRouter();

  return (
    <>
      <div className="container flex flex-col m-auto mt-[200px] bg-white pb-[30px] w-[600px]">
        <div className="header flex flex-col items-center gap-[9px] w-[100%] mt-[30px]">
          <div className="text text-[#3c009d] text-[48px] font-[700]">Sign Up</div>
          <div className="underline w-[91px] h-[6px] bg-[#3c009d] round-[9px]"></div>
        </div>

        <div className="inputs mt-[55px] flex flex-col gap-[25px]">
          <div className="input flex items-center m-auto w-[480px] h-[80px] bg-[#eaeaea] rounded-[6px]">
            <Image
              src="/images/person.png"
              width={25}
              height={25}
              alt="x"
              className="mx-[30px]"
            />
            <input type="text"
              className="h-[50px] w-[400px] bg-transparent border-none outline-none text-[19px] text-[#797979]" placeholder="Name" />
          </div>

          <div className="input input flex items-center m-auto w-[480px] h-[80px] bg-[#eaeaea] rounded-[6px]">
            <Image
              src="/images/email.png"
              width={25}
              height={25}
              alt="x"
              className="mx-[30px]"
            />
            <input type="email"
              className="h-[50px] w-[400px] bg-transparent border-none outline-none text-[19px] text-[#797979]" placeholder="Email" />
          </div>

          <div className="input input flex items-center m-auto w-[480px] h-[80px] bg-[#eaeaea] rounded-[6px]">
            <Image
              src="/images/password.png"
              width={25}
              height={25}
              alt="x"
              className="mx-[30px]"
            />
            <input type="password"
              className="h-[50px] w-[400px] bg-transparent border-none outline-none text-[19px] text-[#797979]" placeholder="Password" />
          </div>

          <div className="forgot-password pl-[62px] mt-[27px] text-[#797979] text-[18px] hidden">Forgot Password? <span className="text-[#4c00b4] cursor-pointer">Click Here!</span></div>

          <div className="submit-container flex gap-[30px] my-[20px] mx-auto">
            <div className="submit flex justify-center items-center w-[220px] h-[59px] text-[#fff] bg-[#4c00b4] rounded-[50px] text-[#19px] font-[700] cursor-pointer">Sign Up</div>
            <div className="submit submit flex justify-center items-center w-[220px] h-[59px] text-[#676767] bg-[#EAEAEA] rounded-[50px] text-[#19px] font-[700] cursor-pointer" onClick={() => {router.push("/")}}>Login</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;