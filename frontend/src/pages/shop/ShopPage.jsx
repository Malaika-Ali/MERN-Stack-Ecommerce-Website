import React, { useState, useEffect, lazy, Suspense } from 'react';
import ShopHero from './ShopHero';
import ShopSidebar from './ShopSidebar';
import FilterChips from './FilterChips';
import { useFetchAllProductsQuery } from '../../redux/features/products/productsApi';
import { useSearchParams } from 'react-router-dom';
import FullPageLoader from '../../utils/FullPageLoader';

import Loadable from '../../utils/Loadable';
import ComponentLoader from '../../utils/ComponentLoader';
import CustomErrorBoundary from '../../utils/ErrorBoundary';

const ShopPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(8);
  const [searchParams] = useSearchParams()
  const categoryParam = searchParams.get("category") || "all"
  const [filteredState, setFilteredState] = useState({
    category: categoryParam,
    priceRange: ""
  });

  const [activeFilters, setActiveFilters] = useState([]);

  const ProductsGrid = Loadable(lazy(() => import('../../components/products/ProductsGrid')))


  useEffect(() => {
    setFilteredState((prev) => ({
      ...prev,
      category: categoryParam,
    }));
  }, [categoryParam]);

  useEffect(() => {
    const filters = [];
    if (filteredState.category !== "all") {
      filters.push({ id: 'category', label: `Category: ${filteredState.category}` });
    }
    if (filteredState.priceRange) {
      const [minPrice, maxPrice] = filteredState.priceRange.split('-');
      filters.push({ id: 'priceRange', label: `Price: Rs.${minPrice} - Rs.${maxPrice}` });
    }
    setActiveFilters(filters);
  }, [filteredState]);


  const { category, priceRange } = filteredState;
  // Extract minPrice and maxPrice from priceRange
  const [minPrice, maxPrice] = priceRange ? priceRange.split('-').map(Number) : [null, null];

  const { data: response = {}, error, isLoading } = useFetchAllProductsQuery({
    category: category !== "all" ? category : "",
    minPrice: minPrice || "",
    maxPrice: maxPrice || "",
    page: currentPage,
    limit: productsPerPage
  });

  useEffect(() => {
    setCurrentPage(1);
  }, [category, priceRange]);


  const products = response.data?.products || [];
  const totalProductsNumber = response.data?.allProducts || 0;
  const totalPages = response.data?.totalPages || 1;

  // Pagination
  const startProduct = (currentPage - 1) * productsPerPage + 1;
  const endProduct = startProduct + products.length - 1;

  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const clearFilters = () => {
    setFilteredState({
      category: "all",
      priceRange: ""
    });
  };


  const handleRemoveFilter = (filterId) => {
    if (filterId === 'category') {
      setFilteredState((prev) => ({
        ...prev,
        category: "all",
      }));
    } else if (filterId === 'priceRange') {
      setFilteredState((prev) => ({
        ...prev,
        priceRange: "",
      }));
    }
  };

  document.title = "Shop"


  return (
    <div>
      <ShopHero />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full md:w-64">
            <ShopSidebar
              filters={{
                category: ["all", "clothes", "footwear", "bags", "accessories"],
                priceRange: [
                  { label: "Under Rs.50", min: 0, max: 50 },
                  { label: "50-100", min: 50, max: 100 },
                  { label: "100-500", min: 100, max: 500 },
                  { label: "500-1000", min: 500, max: 1000 },
                  { label: "1000-5000", min: 1000, max: 5000 },
                ]
              }}
              filteredState={filteredState}
              setFilteredState={setFilteredState}
              clearFilters={clearFilters}
            />
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="mb-6">
              <div className="flex items-center justify-start ml-2 mb-4">
                <div className="text-sm text-gray-500">
                  Showing <span className="font-bold text-black">{startProduct}</span> to <span className="font-bold text-black">{endProduct}</span> products from total <span className="font-bold text-black">{totalProductsNumber}</span> Products
                </div>
              </div>

              <FilterChips
                activeFilters={activeFilters}
                onRemoveFilter={handleRemoveFilter}
              />
            </div>

            <CustomErrorBoundary>
              <Suspense fallback={<ComponentLoader />}>
                <ProductsGrid products={products} />
              </Suspense>
            </CustomErrorBoundary>
            
            {/* Pagination */}
            <div className='mt-6 flex justify-center items-center'>
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                className='py-1.5 px-4 border border-black-color text-black-color rounded-full disabled:border-gray-400 disabled:text-gray-400'
                disabled={currentPage === 1}
              >Previous
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button key={index}
                  className={`w-8 h-8 rounded-full mx-4 text-sm ${currentPage === index + 1 ? 'bg-gray-300' : ''}`}
                  onClick={() => handlePageChange(index + 1)}
                >{index + 1}</button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                className='py-1.5 px-6 border border-black-color text-black-color rounded-full disabled:border-gray-400 disabled:text-gray-400'
                disabled={currentPage === totalPages}
              >Next</button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};


export default ShopPage;