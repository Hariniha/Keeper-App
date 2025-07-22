import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="absolute bottom-0 w-full h-10 text-center">
      <p className="text-[#ccc]">Copyright @ {year}</p>
    </footer>
  )
}

export default Footer