import InputPost from "@/components/InputPost";
import ShowPost from "@/components/ShowPost";
import React from "react";
import { Meteors } from "@/components/Meteors";

const posts = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      <div className="relative z-10 p-4">
        <div className=" flex flex-col gap-10 items-center">
          <InputPost />
          <ShowPost />
        </div>
      </div>
      <Meteors number={50} />
    </div>
  );
};

export default posts;
