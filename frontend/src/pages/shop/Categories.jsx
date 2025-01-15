import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHeart,
	faStar,
	faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const products = [
	{
		image: "https://cdn.easyfrontend.com/pictures/ecommerce/grid_9_1.png",
		name: "Baby Truck",
		rating: 4.5,
		price: 676,
		isNew: true,
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/ecommerce/grid_9_2.png",
		name: "Rocket",
		rating: 3.5,
		price: 349,
		isNew: false,
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/ecommerce/grid_9_3.png",
		name: "Toy Car",
		rating: 4,
		price: 199,
		isNew: false,
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/ecommerce/grid_9_4.png",
		name: "Superhero Action Figure",
		rating: 4.2,
		price: 499,
		isNew: true,
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/ecommerce/grid_9_5.png",
		name: "Building Blocks",
		rating: 4.8,
		price: 149,
		isNew: false,
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/ecommerce/grid_9_6.png",
		name: "Plush Bear",
		rating: 4.6,
		price: 249,
		isNew: false,
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/ecommerce/grid_9_7.png",
		name: "Dollhouse",
		rating: 4.4,
		price: 899,
		isNew: true,
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/ecommerce/grid_9_8.png",
		name: "Remote Control Helicopter",
		rating: 4.1,
		price: 599,
		isNew: false,
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/ecommerce/grid_9_3.png",
		name: "Art Set",
		rating: 4.7,
		price: 349,
		isNew: false,
	},
];

const sortByOptions = [
	{ id: "epgrid12-sort1", label: "Default" },
	{ id: "epgrid12-sort2", label: "Popularity", checked: true },
	{ id: "epgrid12-sort3", label: "Average rating" },
	{ id: "epgrid12-sort4", label: "Newness" },
	{ id: "epgrid12-sort5", label: "Price: Low to High" },
	{ id: "epgrid12-sort6", label: "Price: High to Low" },
];

const colorOptions = [
	{ id: "epgrid12-color1", label: "Blue" },
	{ id: "epgrid12-color2", label: "Brown", checked: true },
	{ id: "epgrid12-color3", label: "Grey" },
	{ id: "epgrid12-color4", label: "Green" },
	{ id: "epgrid12-color5", label: "Orange" },
	{ id: "epgrid12-color6", label: "White" },
];

const Product = ({ product }) => {
	const { image, name, price, rating, isNew } = product;
	return (
		<div className="col-span-12 md:col-span-6 lg:col-span-4">
			<div className="bg-white dark:bg-slate-800 shadow border dark:border-slate-700 rounded-xl p-4 pb-0">
				<div className="bg-gray-100 dark:bg-slate-700 rounded flex justify-center items-center min-h-[265px] relative p-12 w-full">
					{isNew && (
						<h6 className="bg-cyan-400 text-white absolute top-4 left-0 rounded-r-md px-6 py-2 mb-0 font-medium">
							New
						</h6>
					)}
					<div className="absolute top-2.5 right-2.5 w-10 h-10 bg-white dark:bg-slate-800 rounded-full text-base flex justify-center items-center cursor-pointer">
						<FontAwesomeIcon icon={faHeart} />
					</div>
					<img src={image} alt="" className="max-w-full h-auto" />
				</div>
				<div className="py-6 px-1">
					<div className="flex justify-between items-center">
						<div>
							<a href="#!">
								<h6 className="hover:text-blue-600 text-[17px] font-medium mb-1">
									{name}
								</h6>
							</a>
							<span className="text-sm text-yellow-500">
								{Array.from({ length: Math.floor(rating) }, (_, index) => (
									<FontAwesomeIcon key={index} icon={faStar} className="mr-1" />
								))}
								{rating % 1 !== 0 && (
									<FontAwesomeIcon icon={faStarHalfAlt} className="mr-1" />
								)}
							</span>
						</div>
						<div>
							<p className="text-3xl font-bold">${price}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Product.propTypes = {
	product: PropTypes.object.isRequired,
};

const Sidebar = ({ sortByOptions, colorOptions }) => {
	return (
		<div className="bg-white dark:bg-slate-800 rounded-xl border dark:border-slate-700 p-4 lg:p-6">
			<form>
				<div>
					<h5 className="text-xl leading-tight font-bold mt-6">Sort By</h5>
					{sortByOptions.map((option) => (
						<div className="block mt-4" key={option.id}>
							<input
								className="form-check-input"
								type="radio"
								id={option.id}
								checked={option.checked}
							/>{" "}
							<label className="form-check-label" htmlFor={option.id}>
								{option.label}
							</label>
						</div>
					))}
				</div>

				<hr className="dark:border-slate-700 my-6" />

				<div>
					<h5 className="text-xl leading-tight font-bold mt-6 mb-4">Price</h5>
					<div className="flex items-center flex-wrap gap-2">
						<div>
							<select className="bg-white dark:bg-slate-800 border dark:border-slate-700 rounded-md p-3 overflow-hidden">
								<option selected="" hidden>
									Min Price
								</option>
								<option value="1">One</option>
								<option value="2">Two</option>
								<option value="3">Three</option>
							</select>
						</div>
						<div className="mx-2">
							<p className="mb-0 text-nowrap">--</p>
						</div>
						<div>
							<select className="bg-white dark:bg-slate-800 border dark:border-slate-700 rounded-md p-3 overflow-hidden">
								<option selected="" hidden>
									Max Price
								</option>
								<option value="1">One</option>
								<option value="2">Two</option>
								<option value="3">Three</option>
							</select>
						</div>
					</div>
				</div>

				<hr className="dark:border-slate-700 my-6" />

				<div className="ezy__epgrid12-filter-content">
					<h5 className="text-xl leading-tight font-bold mt-6">Color</h5>
					{colorOptions.map((option) => (
						<div className="block mt-4" key={option.id}>
							<input
								className="form-check-input"
								type="radio"
								name="flexRadioColor"
								id={option.id}
								checked={option.checked}
							/>{" "}
							<label className="form-check-label" htmlFor={option.id}>
								{option.label}
							</label>
						</div>
					))}
				</div>
			</form>
		</div>
	);
};

Sidebar.propTypes = {
	sortByOptions: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
			checked: PropTypes.bool,
		})
	).isRequired,
	colorOptions: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
			checked: PropTypes.bool,
		})
	).isRequired,
};

const Categories = () => {
	return (
		<section className="py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-10">
			<div className="container relative px-4 mx-auto">
				<div className="flex flex-col md:flex-row gap-6 mt-12">
					<div className="w-full md:w-1/3 xl:w-1/4">
						<Sidebar
							sortByOptions={sortByOptions}
							colorOptions={colorOptions}
						/>
					</div>
					<div className="w-full md:w-2/3 xl:w-3/4">
						<div className="grid grid-cols-12 gap-4">
							{products.map((product, index) => (
								<Product key={index} product={product} />
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};


export default Categories
