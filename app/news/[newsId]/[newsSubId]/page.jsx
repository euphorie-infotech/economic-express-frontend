"use client";
import { usePathname } from "next/navigation";
import React from "react";

const NewsSubId = () => {
  const pathName = usePathname();
  const id = pathName.split("/").slice(-2, -1);
  const subId = pathName.split("/").slice(-1);
  return (
    <div>
      <h1>
        page for news for {id} with sub id {subId}
      </h1>
    </div>
  );
};

export default NewsSubId;
