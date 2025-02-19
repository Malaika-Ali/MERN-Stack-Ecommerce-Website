import { Link } from "react-router-dom"
export default function Error404() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E5E2DE] px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-black-color mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-black-color mb-6">Page Not Found</h2>
        <p className="text-gray-600 mb-8">Oops! The page you're looking for doesn't exist or has been moved.</p>
        <Link
          to="/"
          className="inline-block bg-black-color text-white px-6 py-3 rounded-full font-medium hover:bg-gray-700 transition duration-300"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  )
}

