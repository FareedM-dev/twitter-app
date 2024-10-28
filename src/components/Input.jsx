const Input = ({ type, placeholder, ...props }) => (
  <input
    type={type}
    placeholder={placeholder}
    className="w-full px-4 py-2 mt-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
    {...props}
  />
)

export default Input
