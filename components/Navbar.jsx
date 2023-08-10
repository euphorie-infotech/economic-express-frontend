"use client";
import React from "react";
import Skeleton from "./Skeleton";
import Image from "next/image";
import logo from "../public/assets/images/logo.jpeg";

const Navbar = () => {
  const currentDate = () => new Date().toDateString();
  const date = currentDate();
  return (
    <Skeleton>
      <div className="flex w-full justify-between items-center h-32">
        <div className="basis-1/3 flex justify-start">
          <h1 className="text-xl">{date}</h1>
        </div>
        <div className="basis-1/3 flex justify-center">
          <Image
            src={logo}
            alt="logo"
            width={0}
            height={0}
            className="w-28 h-auto"
          />
        </div>
        <div className="basis-1/3 flex justify-end">Language selector</div>
      </div>
    </Skeleton>
  );
};

export default Navbar;
