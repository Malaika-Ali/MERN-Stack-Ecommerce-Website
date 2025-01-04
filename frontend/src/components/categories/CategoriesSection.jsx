import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom'

const categories = [
	{
		img: "https://cdn.easyfrontend.com/pictures/ecommerce/product25.jpg",
		title: "Clothes",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/ecommerce/product26.jpg",
		title: "Accessories",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/ecommerce/product35.jpg",
		title: "Bags",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/ecommerce/product28.jpg",
		title: "Indoors",
	},
];

const ProductItem = ({  category,  categoryImg }) => {

	return (
		<Link to={`/categories/${category}`}>
			<div className="flex flex-col items-center justify-center">
				<div className="w-44 h-44 flex justify-center items-center">
					<img
						src={categoryImg}
						className="rounded-full max-w-full max-h-full w-auto"
						alt="..."
					/>
				</div>
				<div className="p-4 md:p-6">
					<h2 className="text-lg font-bold leading-none my-2">
						{category}
					</h2>
				</div>
			</div>
		</Link>
	);
};

const CategoriesSection = () => {
	return (
		<section className="py-14 md:py-24 bg-white text-zinc-900  relative overflow-hidden z-10">
			<div className="container px-4 mx-auto">
				<div className="flex justify-center items-center text-center md:text-start">
					<h2 className="text-2xl leading-none md:text-[40px] font-bold mb-2 ml-3">
						Shop By Category
					</h2>
				</div>

				<div className="grid grid-cols-8 gap-6 text-center mt-6 md:mt-12F">
					{categories.map((category, i) => (
						<div
							className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2"
							key={i}
						>
							<ProductItem categoryName={category.title} category={category.title} categoryImg={category.img} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};


export default CategoriesSection;
