import React from 'react'
import { BiSearch } from 'react-icons/bi'

export default function Search({placeholder, onChange, type="text"}) {
  return (
<div className="flex items-center border-gray-500 border px-2 py-1.5 rounded-3xl">
      <BiSearch className="text-gray-600 mr-2" />
      <input
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        className="bg-transparent outline-none"
      />
    </div>
  )
}
