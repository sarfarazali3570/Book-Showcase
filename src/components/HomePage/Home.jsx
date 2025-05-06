import React from 'react'
import Card from '../Card/Card'
import { useSelector } from 'react-redux'
import Category from './Category'

export const Home = () => {
    const PopularBooks = useSelector((state)=>state.popularBooks)
    console.log(PopularBooks);
    
  return (
    <>
   <Category/>

    <h1 className='text-center text-3xl underline text-blue-950 ' > View Popular Books</h1> <br />
    <div className='w-5/5 bg-blue-950 p-2 mx-auto'></div>
    <br />
    <section className='container  flex flex-wrap gap-5 ml-36'>
    {
        PopularBooks.map((book)=>{
            return <Card id={book.id} category={"popularBooks"} key={book.id} coverImage={book.coverImage} title={book.title} />
        })
    }
    </section>
    </>
  )
}
