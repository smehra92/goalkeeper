import React from 'react'
import prisma from '@/prisma'
import { revalidatePath } from 'next/cache'

const DeletePost = ({id}) => {
    
    const deletes = async (formData) => {
        "use server"
        const postId = formData.get('id')
        await prisma.stuff.delete({
            where: {
              id: postId
            }
          })
          revalidatePath("/Posts")
    }
  return (
  <>
    <form action={deletes}>
        <input type="hidden" name="id" value={id} />
        <button type="submit" className=' bg-red-500 border rounded-md px-2 ml-2'>Delete</button>
    </form>
  </>
  )
}

export default DeletePost