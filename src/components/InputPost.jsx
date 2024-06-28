import React from "react";
import prisma from '@/prisma'
import { revalidatePath } from "next/cache";

const InputPost = () => {
  
const creates = async (formdata) => {
  "use server"
  await prisma.stuff.create({
    data : {
      post : formdata.get('inputpost')
    }
  })
  revalidatePath("/Posts")
}
 
  return (
    <>
      <div>
        <form action={creates} className=" flex flex-col items-center mt-10">
          <input type="text" name = "inputpost" placeholder="Write your goals here .." className=" border border-black rounded px-2 py-1" />
          <button type="submit" className=" bg-blue-400 px-2 py-1 rounded-md mt-2 ">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default InputPost;
