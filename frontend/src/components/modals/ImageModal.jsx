const ImageModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg max-w-4xl w-full overflow-hidden flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="w-full md:w-1/2 h-64 md:h-auto relative">
            <img
              src="https://images.unsplash.com/photo-1513094735237-8f2714d57c13?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Order Successfull!"
              className="w-full h-full object-cover"
            />
          </div>
  
          {/* Content Section */}
          <div className="w-full md:w-1/2 p-6 md:p-8 relative flex flex-col justify-center items-center">
            {/* Close Button */}
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
  
            {/* Modal Content */}
            <div className="flex flex-col items-center text-center space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">Congratulations</h2>
              <p className="text-xl text-gray-900">Your purchase was a success!</p>
              <p className="text-gray-600 text-sm">
                Thank you for entrusting your cart to us. Please be patient as we process your items as quickly as
                possible.
              </p>
              <button
                onClick={onClose}
                className="mt-8 w-full bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800 transition-colors duration-200"
              >
                Back to Homepage
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default ImageModal
  
  