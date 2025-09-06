import React from "react";
function Input({ type, label, placeholder, className,...props }, ref   ) {
  return (
   <div>
    {label && <label className="block text-sm font-medium text-gray-700">{label}</label>}
    <input
      type={type}
      ref={ref}
      className={`w-full p-2 rounded-md outline-none border border-gray-300 focus:border-blue-500 ${className}`}
      {...props}
      placeholder={placeholder}
    />
    </div>
  );
}

export default  React.forwardRef(Input);
