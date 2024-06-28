import { revalidatePath } from 'next/cache';
import prisma from '@/prisma'; // Adjust this import path as needed

const editStuff = async (formData) => {
  'use server'
  const id = formData.get('id');
  const newPost = formData.get('newPost');
  const isEditing = formData.get('isEditing') === 'true';

  if (isEditing) {
    // Update the post in the database
    await prisma.stuff.update({
      where: { id },
      data: { 
        post: newPost,
        isEditing: false
      }
    });
  } else {
    // Toggle isEditing to true
    await prisma.stuff.update({
      where: { id },
      data: { isEditing: true }
    });
  }

  revalidatePath('/Posts');
};

export default function EditableStuff({ id, post, isEditing = false }) {
  return (
    <form action={editStuff}>
      <input type="hidden" name="id" value={id} />
      <input type="hidden" name="isEditing" value={isEditing.toString()} />
      {isEditing ? (
        <>
          <input 
            type="text" 
            name="newPost" 
            defaultValue={post} 
            className="border rounded-md px-2"
          />
          <button type="submit" className="bg-blue-500 text-white border rounded-md px-2 ml-2">
            Save
          </button>
        </>
      ) : (
        <>
          <button type="submit" className="bg-green-500 border rounded-md px-2 ml-2">
            Edit
          </button>
        </>
      )}
    </form>
  );
}