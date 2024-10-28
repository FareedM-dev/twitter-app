const Button = ({ children, ...props }) => (
  <button
    className="w-full py-2 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    {...props}
  >
    {children}
  </button>
)

export default Button
