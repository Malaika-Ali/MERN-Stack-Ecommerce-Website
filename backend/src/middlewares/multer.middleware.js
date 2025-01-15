import multer from 'multer'
import path from 'path';

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
    { storage,

      fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        if (ext !== '.jpg' && ext !== '.JPG' && ext !== '.jpeg' && ext !== '.png' && ext !== '.PNG' && ext !== '.webp') {
            return cb(new Error('Only images are allowed!'));
        }
        cb(null, true);
    },
    limits: { fileSize: 5 * 1024 * 1024 } // Limit file size to 5MB
     }
)

