 
function Button({ type,children, className, ...props }) {
  return (
    <button type={type} className={`bg-blue-500 text-white px-4 py-2 rounded-md ${className}`} {...props}>
         {children }
    </button>
  )
}

export default Button