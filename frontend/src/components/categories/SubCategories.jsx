import React from "react";

const cardsData = [
	{
		id: 1,
		bgClass: "bg-orange-400",
		imageSrc: "https://cdn.easyfrontend.com/pictures/tshirt-abstract.png",
		title: "Special somebunny",
		buttonClass: "text-orange-500",
		buttonLabel: "Shop Now",
		childImageSrc: "https://cdn.easyfrontend.com/pictures/child-abstact1.png",
	},
	{
		id: 2,
		bgClass: "bg-red-600",
		imageSrc: "https://cdn.easyfrontend.com/pictures/headphone-abstract.png",
		title: "Spring Supper Sale",
		buttonClass: "text-red-600",
		buttonLabel: "Shop Now",
		childImageSrc: "https://cdn.easyfrontend.com/pictures/child-abstact2.png",
	},
	{
		id: 3,
		bgClass: "bg-blue-900",
		imageSrc: "https://cdn.easyfrontend.com/pictures/shoe-abstract.png",
		title: "Baby Collection",
		buttonClass: "text-white",
		buttonLabel: "Shop Now",
		childImageSrc: "https://cdn.easyfrontend.com/pictures/child-abstact.png",
	},
];

const SubCategories = () => {
	return (
		<section className="ezy__epcategory11 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-10">
			<div className="container px-4 mx-auto">
				<div className="flex flex-col lg:flex-row gap-6">
					<div className="w-full lg:w-1/2">
						<div className="gap-6 p-0">
							{cardsData.slice(0, 2).map((card) => (
								<div key={card.id}>
									<div
										className={`${card.bgClass} rounded-xl min-h-[280px] text-white flex items-center relative p-6 lg:p-12 mb-6 z-10`}
									>
										{/* Shape */}
										<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
											<img src={card.imageSrc} alt="" />
										</div>
										<div className="absolute bottom-0 left-0 -z-10">
											<img
												src="https://cdn.easyfrontend.com/pictures/circle-abstract.png"
												alt=""
											/>
										</div>
										<div className="absolute top-0 right-0 -z-10">
											<img
												src="https://cdn.easyfrontend.com/pictures/circle-abstract.png"
												alt=""
											/>
										</div>
										<div className="grid grid-cols-12">
											<div className="col-span-6">
												<h1 className="text-[32px] md:text-5xl font-bold leading-[1.1]">
													{card.title}
												</h1>
												<button
													className={`px-7 py-3.5 leading-none rounded-lg bg-white ${card.buttonClass} font-bold mt-12`}
												>
													{card.buttonLabel}
												</button>
											</div>
											<div className="col-span-6">
												<div className="absolute bottom-0 right-5 -z-10">
													<img
														src={card.childImageSrc}
														alt=""
														className="max-w-full h-auto"
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className="w-full lg:w-1/2">
						{/* Card Three */}
						<div
							className={`${cardsData[2].bgClass} rounded-xl min-h-[585px] text-white flex items-center relative p-6 lg:p-12 z-10`}
						>
							{/* Shape */}
							<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
								<img src={cardsData[2].imageSrc} alt="" />
							</div>
							<div className="grid grid-cols-12">
								<div className="col-span-6">
									<h1 className="text-[32px] md:text-5xl font-bold leading-[1.1]">
										{cardsData[2].title}
									</h1>
									<button
										className={`px-7 py-3.5 leading-none rounded-lg bg-red-500 text-white font-bold mt-12`}
									>
										{cardsData[2].buttonLabel}
									</button>
								</div>
								<div className="col-span-6">
									<div className="absolute bottom-0 right-5 -z-10">
										<img
											src={cardsData[2].childImageSrc}
											alt=""
											className="max-w-full h-auto"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};


export default SubCategories