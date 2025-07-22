import React from 'react'

const Note = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-3 w-[240px] m-4 ml-8 float-left">
      <h1 className="text-[1.1em]  mb-1.5 font-[McLaren] font-semibold">Note Title</h1>
      <p className="text-[1.1em] mb-2.5 whitespace-pre-wrap font-[McLaren] break-words">Note content</p>
    </div>

  )
}

export default Note