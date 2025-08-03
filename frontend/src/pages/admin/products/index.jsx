import React from 'react';
import DataTable from 'react-data-table-component';
import { MoreHorizontal } from 'lucide-react';

const Button = ({ children, variant = 'default', size = 'md', className = '', ...props }) => {
    const baseStyles = 'rounded px-4 py-2 font-medium';
    const variants = {
        default: 'bg-green-600 text-white hover:bg-green-700',
        outline: 'border border-gray-300 text-gray-700 hover:bg-gray-100',
    };
    return (
        <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
};

const Card = ({ children }) => (
    <div className="bg-white rounded-lg shadow border border-gray-200">{children}</div>
);

const CardContent = ({ children, className = '' }) => (
    <div className={`p-4 ${className}`}>{children}</div>
);

const Input = ({ className = '', ...props }) => (
    <input
        className={`border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 ${className}`}
        {...props}
    />
);

const Select = ({ children, ...props }) => (
    <select className="border border-gray-300 rounded px-3 py-2 text-sm" {...props}>
        {children}
    </select>
);

const SelectItem = ({ value, children }) => (
    <option value={value}>{children}</option>
);

const products = [
    {
        id: '#KM1662286',
        name: 'Airpods Pro Max 2024',
        category: 'Electric Product',
        createdAt: 'Jan 01, 2024',
        price: '$10,120.00',
        stock: '1,20,120',
        status: 'Published'
    },
    {
        id: '#KM1662200',
        name: 'Small Hi-Speed Fan',
        category: 'Electric Product',
        createdAt: 'Jan 01, 2024',
        price: '$5,180.00',
        stock: '0',
        status: 'Out Stock'
    },
    {
        id: '#KM1662211',
        name: 'Nike New Model Shoes',
        category: 'Shoes Product',
        createdAt: 'Jan 01, 2024',
        price: '$13,145.00',
        stock: '10,120',
        status: 'Published'
    },
];

const columns = [
    {
        name: 'Product Name',
        selector: row => row.name,
        cell: row => (
            <div className="flex flex-col">
                <span className="font-medium text-sm">{row.name}</span>
                <span className="text-xs text-gray-500">{row.category}</span>
            </div>
        ),
        sortable: true,
        grow: 2
    },
    {
        name: 'ID & Create Date',
        selector: row => row.id,
        cell: row => (
            <div className="flex flex-col">
                <span className="text-sm">{row.id}</span>
                <span className="text-xs text-gray-500">{row.createdAt}</span>
            </div>
        ),
        sortable: true,
    },
    {
        name: 'Price',
        selector: row => row.price,
        sortable: true
    },
    {
        name: 'Stock',
        selector: row => row.stock,
        sortable: true
    },
    {
        name: 'Status',
        selector: row => row.status,
        cell: row => (
            <span
                className={`px-2 py-1 text-xs rounded font-medium ${row.status === 'Published'
                    ? 'bg-green-100 text-green-700'
                    : row.status === 'Out Stock'
                        ? 'bg-orange-100 text-orange-700'
                        : row.status === 'Inactive'
                            ? 'bg-red-100 text-red-700'
                            : 'bg-gray-100 text-gray-700'
                    }`}
            >
                {row.status}
            </span>
        ),
        sortable: true
    },
    {
        name: 'Action',
        cell: () => (
            <Button variant="outline" size="sm">
                Details
            </Button>
        ),
        ignoreRowClick: true,
        allowOverflow: true,
        button: true
    }
];

const customStyles = {
    rows: {
        style: {
            minHeight: '60px',
        },
    },
    headCells: {
        style: {
            fontWeight: '600',
            fontSize: '14px',
        },
    },
};

const Products = () => {
    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-xl font-semibold">Products List</h1>
                    <p className="text-sm text-gray-500">
                        Here you can find all of your products
                    </p>
                </div>
                <div className="flex gap-2">
                    <Button>Add Product</Button>
                    <Button variant="outline">More Actions</Button>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <Card><CardContent><p className="text-sm">Total Products</p><h2 className="text-lg font-semibold">2,40,120</h2></CardContent></Card>
                <Card><CardContent><p className="text-sm">Product Sales</p><h2 className="text-lg font-semibold">5,70,190</h2></CardContent></Card>
                <Card><CardContent><p className="text-sm">Stock Products</p><h2 className="text-lg font-semibold">1,40,530</h2></CardContent></Card>
                <Card><CardContent><p className="text-sm">Out of Stock</p><h2 className="text-lg font-semibold">99,349</h2></CardContent></Card>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
                <Input placeholder="Search by name, Product ID..." className="w-full md:w-80" />
                <div className="flex gap-2 flex-wrap">
                    <Select>
                        <SelectItem value="All Status">All Status</SelectItem>
                        <SelectItem value="Published">Published</SelectItem>
                        <SelectItem value="Out Stock">Out Stock</SelectItem>
                        <SelectItem value="Inactive">Inactive</SelectItem>
                    </Select>
                    <Input type="date" />
                    <Button variant="outline">More Filter</Button>
                </div>
            </div>

            <Card>
                <CardContent>
                    <DataTable
                        columns={columns}
                        data={products}
                        customStyles={customStyles}
                        pagination
                        responsive
                        highlightOnHover
                    />
                </CardContent>
            </Card>
        </div>
    );
};

export default Products;
