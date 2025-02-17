import SectionHeading from '../../../components/headings/SectionHeading'
import CategoryCard from './CategoryCard'
import { categories } from '../../../constants'

function CategorySection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
     <SectionHeading title="Shop By Category" textalignment="text-center"/>

      <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <CategoryCard key={category.title} {...category} />
        ))}
      </div>
    </section>
  )
}

export default CategorySection

