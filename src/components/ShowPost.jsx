import prisma from '@/prisma'
import React from 'react'
import DeletePost from './DeletePost'
import UpdatePost from './UpdatePost'

const ShowPost = async () => {

  const allposts = await prisma.stuff.findMany()
  
  return (
    <>
      <ul>
      {allposts.map(e => (
        <li key = {e.id} className=' flex flex-row gap-2 mt-2 '>
          {e.post}
          <DeletePost id = {e.id} />
          <UpdatePost id={e.id} post={e.post} isEditing={e.isEditing} />
          </li>
      ))}
      </ul>
    </>
  )
}

export default ShowPost