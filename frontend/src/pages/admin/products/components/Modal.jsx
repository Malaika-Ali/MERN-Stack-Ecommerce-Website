import React, { useState } from 'react'
import Input from './Input'
import ImageUpload from './ImageUpload'
import { useUpdateProductMutation } from '../../../../redux/features/admin/productApi'
import { IoMdClose } from "react-icons/io";

const Modal = ({ selectedProduct, setIsModalOpen }) => {
    const [updateProduct, { isLoading }] = useUpdateProductMutation()
    const [image, setImage] = useState(null)
    const [form, setForm] = useState({
        name: selectedProduct?.name ?? "",
        fabric: selectedProduct?.materialOrFabric ?? "",
        color: selectedProduct?.color ?? "",
        price: selectedProduct?.price ?? "",
        stock: selectedProduct?.quantity ?? ""
    })

    const originalProduct = {
        name: selectedProduct.name,
        fabric: selectedProduct.materialOrFabric,
        color: selectedProduct.color,
        price: selectedProduct.price,
        stock: selectedProduct.quantity
    }

    const handleUpdate = async (id) => {
    const updatedFields = new FormData();

    Object.keys(form).forEach((key) => {
        if (form[key] !== originalProduct[key]) {
            updatedFields.append(key, form[key]);
        }
    });

    if (image) {
        updatedFields.append("image", image);
    }
        await updateProduct({
            id: id,
            data: updatedFields
        });
        setIsModalOpen(false)
}


    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 dark:bg-white dark:bg-opacity-20">
            <div className="bg-white dark:bg-[#1D1D1D] p-6 rounded-2xl w-[600px] shadow-lg">
                <div className='flex flex-row justify-between items-center'>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                    Update Product
                </h3>
                <button className='p-2 rounded-full hover:bg-gray-500'
                onClick={()=>setIsModalOpen(false)}
                ><IoMdClose size={22} className='dark:text-white' /></button>
                </div>

                <p className="text-sm mb-2 dark:text-gray-300">
                    Product ID: {selectedProduct?.id}
                </p>
                <div className='pb-10 pt-2 flex flex-row gap-12'>
                    <img className="flex items-center justify-center bg-gray-100 w-28 rounded-md object-cover"
                        src={selectedProduct?.image} alt="" />

                    {/* <div className='border border-dashed border-gray-500 dark:border-white w-28 rounded-xl'>
                    <input type="file" className='hidden' />
                </div> */}

                    <ImageUpload setImage={setImage} />

                </div>
                <div className='grid grid-cols-2 gap-x-6'>
                    {/* name's input */}
                    <Input type="text" id="name" label="Product's Name" value={form.name} setForm={setForm} />
                    {/* fabric's input */}
                    <Input type="text" id="fabric" label="Fabric / Material" value={form.fabric} setForm={setForm} />
                    {/* color's input */}
                    <Input type="text" id="color" label="Color" value={form.color} setForm={setForm} />
                    {/* price's input */}
                    <Input type="number" id="price" label="Price" value={form.price} setForm={setForm} />
                    {/* stock's input */}
                    <Input type="number" id="stock" label="Stock" value={form.stock} setForm={setForm} />
                </div>


                {/* <select
                            value={newStatus}
                            onChange={(e) => setNewStatus(e.target.value)}
                            className="w-full p-2 border rounded-lg mb-4 dark:bg-[#333] dark:text-white focus:border-gray-500"
                        >
                            <option value="Pending">Pending</option>
                            <option value="Shipped">Shipped</option>
                            <option value="Delivered">Delivered</option>
                            <option value="Cancelled">Cancelled</option>
                        </select> */}

                <div className="flex justify-end gap-2">
                    <button
                        onClick={() => setIsModalOpen(false)}
                        className="px-4 py-2 rounded-lg bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 transition-colors duration-400 ease-in-out"
                    >
                        Cancel
                    </button>

                    <button
                    disabled={isLoading}
                        onClick={() =>handleUpdate(selectedProduct.id)}
                        className="px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-900 transition-colors duration-400 ease-in-out"
                    >
                        Update
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Modal
