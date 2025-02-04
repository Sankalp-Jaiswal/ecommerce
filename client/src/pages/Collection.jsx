import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/frontend_assets/assets'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const Collection = () => {

  const { products , search, showSearch } = useContext(ShopContext)
  const [showFilter, setShowFilter] = useState(false)
  const [filterProduct, setFilterProduct] = useState([])
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [sortType, setSortType] = useState("relevent")

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setCategory(prev => [...prev, e.target.value])
    }
  }
  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  }
  const applyFilter = () => {
    let productsCopy = products.slice();

    if(showSearch && search){
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category))
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }
    setFilterProduct(productsCopy)
  }
  const sortProduct = () => {
    let fpCopy = filterProduct.slice()
    switch (sortType) {
      case 'low-high':
        setFilterProduct(fpCopy.sort((a, b) => a.price - b.price))
        break;
      case 'high-low':
        setFilterProduct(fpCopy.sort((a, b) => b.price - a.price))
        break;
      default:
        applyFilter()
        break;
    }
  }

  useEffect(()=>{
    sortProduct()
  },[sortType])
  useEffect(() => {
    applyFilter()
  }, [subCategory, category, search, showSearch,products])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-2 sm:pt-10 border-t'>

      {/* Filter options */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS <img className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`} src={assets.dropdown_icon} alt="" /></p>

        {/* category filters */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input onChange={toggleCategory} type="checkbox" className='w-3' value={'Men'} />Men
            </p>
            <p className='flex gap-2'>
              <input onChange={toggleCategory} type="checkbox" className='w-3' value={'Women'} />Women
            </p>
            <p className='flex gap-2'>
              <input onChange={toggleCategory} type="checkbox" className='w-3' value={'Kids'} />Kids
            </p>
          </div>
        </div>

        {/* Subactegorical filters */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? "" : "hidden"} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input onChange={toggleSubCategory} type="checkbox" className='w-3' value={'Topwear'} />Topwear
            </p>
            <p className='flex gap-2'>
              <input onChange={toggleSubCategory} type="checkbox" className='w-3' value={'Bottomwear'} />Bottomwear
            </p>
            <p className='flex gap-2'>
              <input onChange={toggleSubCategory} type="checkbox" className='w-3' value={'Winterwear'} />Winterwear
            </p>
          </div>
        </div>

      </div>

      {/* Collections */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm;text-2xl mb-4'>
          <Title text1={"ALL"} text2={"COLEECTIONS"} />
          {/* product sort */}
          <select onChange={(e)=>setSortType(e.target.value)} className='border border-gray-300 text-sm px-2'>
            <option value="relevent">By Relevence</option>
            <option value="low-high">Price Low to High</option>
            <option value="high-low">Price High to low</option>
          </select>
        </div>

        {/* map products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6-'>
          {filterProduct.map((item, index) => (
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
          ))}

        </div>
      </div>

    </div>
  )
}

export default Collection