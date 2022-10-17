import React from 'react'

export default function FileInput({ labelx, placeholder, onChange }, props) {
  return (
    <div className="my-2">
      <label htmlFor="label">{labelx}:</label>
      <input
        type="file"
        placeholder={placeholder}
        id={labelx}
        className="rounded-lg p-2 w-full shadow-xl text-black bg-blue-500"
        {...props}
        onChange={onChange}
      />
    </div>
  )
}
