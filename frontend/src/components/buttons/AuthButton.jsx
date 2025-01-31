import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'

const AuthButton = ({ variant = 'primary', children, icon: Icon,  className, onClick, ...props}) => {
    const baseStyles = "w-full py-3 px-4 rounded-full font-medium text-sm flex items-center justify-center"
    const variants = {
      primary: "bg-black text-white hover:bg-gray-800",
      google: "bg-gray-50 text-gray-900 hover:bg-gray-100 border border-gray-300"
    }
  
    return (
      <button 
        className={`${baseStyles} ${variants[variant]} ${className}`}
        onClick={onClick}
        {...props}
      >
          {Icon && <Icon className="w-4 h-4 text-black py-auto group-hover:text-white transition-all duration-300 ease-in-out" />}
        {children}
      </button>
    )
  }
  
  export default AuthButton
  
  