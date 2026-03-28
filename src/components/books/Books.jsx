import React, { use } from 'react';
import BookCard from '../book/BookCard';

const Books = ({ booksDataPromise, cart, setCart }) => {
    const books = use(booksDataPromise);

    console.log(books);
    return (
        <div >
            <div className='text-center mb-5'>
                <h2 className='text-3xl font-extrabold bookNameFont'>Choose Books For Your Own Need</h2>
                <p className='text-xl font-bold text-gray-500'>Books are The Best Friend</p>
            </div>
            <div className='grid grid-cols-4 gap-4'>
                {
                    books.map((book, ind) => {
                        return (
                            <BookCard key={ind} book={book} cart={cart} setCart={setCart}   ></BookCard>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Books;