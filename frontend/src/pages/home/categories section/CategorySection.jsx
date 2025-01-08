import SectionHeading from '../../../components/headings/SectionHeading'
import CategoryCard from './CategoryCard'

const categories = [
    {
        title: 'Clothes',
        products: 12,
        image: 'https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
  {
    title: 'Accessories',
    products: 8,
    image: 'https://images.pexels.com/photos/325527/pexels-photo-325527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'Bags',
    products: 4,
    image: 'https://images.pexels.com/photos/5658861/pexels-photo-5658861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },

  {
    title: 'Shoes',
    products: 24,
    image: 'https://images.pexels.com/photos/2442892/pexels-photo-2442892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
]

function CategorySection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
     <SectionHeading title="Shop By Category" subtitle="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some
      form." textalignment="text-center"/>

      <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <CategoryCard key={category.title} {...category} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <button className="rounded-md bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
          Explore All Category
        </button>
      </div>
    </section>
  )
}

export default CategorySection

