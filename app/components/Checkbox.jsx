import React from 'react'

const Checkbox = () => {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
    {/* Hidden Checkbox Input */}
    <input type="checkbox" className="hidden peer" />
  
    {/* Custom Checkbox */}
    <div className="w-6 h-6 border-2 border-gray-400 rounded-full peer-checked:bg-black peer-checked:border-black relative flex items-center justify-center">
      {/* Checkmark SVG - Only Visible When Checked */}
      <svg
        className="w-4 h-4 text-white opacity-1 "
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M20.707 5.293a1 1 0 0 1 0 1.414l-11 11a1 1 0 0 1-1.414 0l-5-5a1 1 0 1 1 1.414-1.414L9 15.586 19.293 5.293a1 1 0 0 1 1.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  
  </label>
  )
}

export default Checkbox