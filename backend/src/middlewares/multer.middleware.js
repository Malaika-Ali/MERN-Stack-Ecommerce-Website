import multer from 'multer'

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Our public/temp folder
      cb(null, './public/temp')
    },
    filename: function (req, file, cb) {
        // User's original name of the file
      cb(null, file.originalname )
    }
  })
  
  export const upload = multer(
    { storage }
)

