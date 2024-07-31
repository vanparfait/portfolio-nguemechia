import Link from "next/link";
import React from "react";

const RightSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-6 text-textLight">
      <Link
        href="mailto:nguemechiaparfait@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="text-sm rotate-90 w-72 tracking-wide text-textGreen hover:text-green-500">
          nguemechiafokouparfait
        </p>
      </Link>
      <span className="w-[2px] h-32 bg-textDark inline-flex"></span>
    </div>
  );
};

export default RightSide;
