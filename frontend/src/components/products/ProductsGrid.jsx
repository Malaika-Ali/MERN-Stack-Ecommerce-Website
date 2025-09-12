import React, { lazy, Suspense, useEffect } from 'react';
import SectionHeading from '../headings/SectionHeading';

import Loadable from '../../utils/Loadable';
import ComponentLoader from '../../utils/ComponentLoader';
import CustomErrorBoundary from '../../utils/ErrorBoundary';

const ProductsGrid = ({ products, headingTitle, headingSubTitle, textalignment, searchQuery = '' }) => {

  const ProductCard = Loadable(lazy(() => import('./ProductCard')))

  useEffect(() => console.log("products grid rendered"))

  return (
    <div className={`container mx-auto px-4 py-8 ${headingTitle ? 'py-8' : "py-2"}`}>
      {headingTitle &&
        <SectionHeading title={headingTitle} subtitle={headingSubTitle} textalignment={textalignment} />
      }
      <section
        className={`grid xs:grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ${headingTitle ? 'lg:mt-14' : 'lg:mt-0'}`}>
        {
          products?.map(product => (
            <CustomErrorBoundary key={product._id}>
              <Suspense fallback={<ComponentLoader />}>
                <ProductCard key={product._id} id={product._id} name={product.productName} price={product.price} oldPrice={product.price} rating={product.rating} image={product.images[0]} product={product} category={product.category} color={product.color} searchQuery={searchQuery} />
              </Suspense>
            </CustomErrorBoundary>
          ))
        }
      </section>
    </div>
  );
};

export default React.memo(ProductsGrid);

