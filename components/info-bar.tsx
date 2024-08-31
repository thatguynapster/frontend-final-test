import React from "react";
import { classNames } from "@/lib/helpers";
import Image from "next/image";
import { Search } from "lucide-react";

type Props = {};

const InfoBar = ({}: Props) => {
  return (
    <div
      className={classNames(
        "fixed z-[20] left-0 right-0 top-0 px-5 py-4 bg-light dark:bg-dark flex gap-4 items-center justify-between border-b border-[#B4B4B4]"
      )}
    >
      <Image
        src={"/img/logo.png"}
        alt={"FEFT Logo"}
        width={50}
        height={50}
        sizes="(max-width: 1200px) 100vw, (max-width: 768px) 50vw, 33vw"
      />
      <div className="flex justify-between items-center px-5 py-2.5 rounded-lg border border-[#B4B4B4] w-full max-w-[598px] bg-[#F5F5F5]">
        <div className="flex gap-2.5 items-center">
          <Search size={16} color="#BCBCBC" />
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search Creative OS"
            className="placeholder:text-[#BCBCBC]"
          />
        </div>
        <p className="text-[#BCBCBC]">⌘+K</p>
      </div>
      <div className=""></div>
    </div>
  );
};

export default InfoBar;
