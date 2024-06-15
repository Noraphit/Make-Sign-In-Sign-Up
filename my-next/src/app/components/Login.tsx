"use client";
import React from 'react';
import Image from 'next/image';

type Props = {}

const Login = (props: Props) => {
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="text">Sign Up</div>
        </div>
      </div>

      <div className="inputs">
        <div className="input">
          <Image
            src="/images/email.png"
            width={20}
            height={20}
            alt="x"
            className="cursor-pointer"
          />
          <input type="text" />
        </div>

        <div className="input">
          <input type="email" />
        </div>

        <div className="input">
          <input type="password" />
        </div>
      </div>
    </>
  );
};

export default Login;