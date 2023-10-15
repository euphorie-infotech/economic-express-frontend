"use client";
import { usePathname } from "next/navigation";

const NewsDetails = () => {
  const pathName = usePathname();
  const id = pathName.split("/").slice(-1);

  return (
    <div>
      <h1>Detailed News of {id}</h1>
    </div>
  );
};

export default NewsDetails;
