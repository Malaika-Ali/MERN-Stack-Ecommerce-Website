export default function ComponentLoader({ className = "" }) {
    return (
      <div className={`flex items-center justify-center p-4 ${className}`}>
        <div className="relative">
          <div className="h-12 w-12 rounded-full border-t-2 border-b-2 border-gray-700"></div>
          <div className="absolute top-0 left-0 h-12 w-12 rounded-full border-t-2 border-b-2 border-gray-300 animate-spin"></div>
        </div>
      </div>
    )
  }
  
  