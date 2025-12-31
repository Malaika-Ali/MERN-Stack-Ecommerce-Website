import React, { useEffect, useRef, useState } from 'react'
import FileInput from './FileInput'
import { RxCross2 } from "react-icons/rx";

const FilesUpload = ({onFilesChange}) => {
  const [files, setFiles] = useState([])
  const [uploading, setUploading] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const inputRef = useRef()
  const maxImages = 4;

  function handleFileSelect(e) {
    if (!e.target.files?.length) {
      return;
    }

    const selectedFiles = Array.from(e.target.files);

    if (files.length + selectedFiles.length > maxImages) {
      alert(`You can not upload more than ${maxImages} Images`)
      setDisabled(true)
      return;
    }

    const newFiles = selectedFiles.map((file) => ({
      file,
      progress: 0,
      uploaded: false,
      id: file.name
    })
    )

    setFiles([...files, ...newFiles])

    if (inputRef.current) {
      inputRef.current.value = ""
    }
  }

  function removeFile(id) {
    setFiles((prevFiles) => prevFiles.filter((file) => file.id !== id))
  }

  useEffect(()=>{
    onFilesChange(files.map((f)=>f.file))
  }, [files]);

  return (
    <div className='px-14 w-full h-80 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 flex justify-center items-center flex-col gap-12'>
      <FileInput inputRef={inputRef}
        files={files}
        disabled={disabled}
        onFileSelect={handleFileSelect}
      />

      <FileList files={files} onRemove={removeFile}
        onFileSelect={handleFileSelect}
        uploading={uploading}
      />
    </div>
  )
}

function FileList({ files, onRemove, uploading }) {
  if (!files.length) {
    return null;
  }
  return (
    <div className='w-full flex justify-start items-center gap-2'>
      {files.map((file) => (
        <FileItem
          key={file.id}
          file={file}
          onRemove={onRemove}
          uploading={uploading}
        />
      ))}
    </div>
  )
}


function FileItem({ file, onRemove, uploading }) {


  return (
    <div className='flex-col'>
      <div className='h-32 w-32 object-cover rounded-xl relative border-2 border-gray-200'>
        <img src={URL.createObjectURL(file.file)} alt="product-image" className='w-full h-full object-cover relative rounded-xl' />

        {!uploading &&
          <button onClick={() => onRemove(file.id)}
            className='absolute right-1 top-1'
          >
            <RxCross2 size={20} className='rounded-full p-0.5 bg-gray-50 hover:bg-gray-200' />
          </button>}

      </div>

      {/* <p className='text-center'>{file.file.name}</p> */}
      {/* {Math.round(file.file.size)} */}
      {/* <p className='text-center'>{file.uploaded ? "Completed" : `${Math.round(file.progress)}%`}</p> */}


      {/* {file.file.type} */}
      {/* <p>{uploading}</p> */}


    </div>
  )
}

export default FilesUpload
