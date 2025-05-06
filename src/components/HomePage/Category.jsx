import React from 'react'
import { Link } from 'react-router-dom'
// Adjust the path to where the image is located

const Category = () => {
  return (
    <>
      <br /> <br />
      <h1 className='text-center text-3xl'>Read By Category</h1>
      <div className='bg-black p-2 w-5/5 mx-auto mt-5'></div>

      <br /> <br />
      <section className='container flex gap-12 mx-auto justify-center'>
        <Link to={"/browsebooks/fictionBooks"} >
          <div className='flex flex-col justify-center'>
            <img className="h-60 w-60" src="https://content.jdmagicbox.com/quickquotes/images_main/the-teen-reader-s-choice-popular-fiction-books-for-teenagers-803129678-gzb5j0gs.jpg?impolicy=queryparam&im=Resize=(360,360),aspect=fit" />
            <h1 className='font-semibold text-2xl mx-auto mt-6 underline'>Fiction Books</h1>
          </div>
        </Link>


        <Link to={"/browsebooks/sciFiBooks"}>
          <div className='bg-black h-60 w-60 '>
            <img className="h-60 w-60" src="https://m.media-amazon.com/images/I/71pifG08RFL._AC_UF1000,1000_QL80_.jpghttps://m.media-amazon.com/images/I/71pifG08RFL._AC_UF1000,1000_QL80_.jpg" />
            <h1 className='font-semibold text-2xl ml-12 mt-6 underline'>Science Books</h1>
          </div>
        </Link>

        <Link to={"/browsebooks/nonFictionBooks"} >
          <div className='bg-black h-60 w-60 '>
            <img class="h-60 w-60" src="https://wizdomapp.com/wp-content/uploads/2024/10/product-jpeg-500x500-1-500x490.webp"  />
            <h1 className='font-semibold text-xl ml-10 mt-6 underline'>Non-Fiction Books</h1>
          </div>
        </Link>
      </section>

      <div className='bg-black p-2 w-5/5 mx-auto mt-2'></div>
      <br /> <br />
    </>
  )
}

export default Category