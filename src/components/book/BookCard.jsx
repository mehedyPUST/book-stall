import React, { useState } from 'react';
import { CiStar } from 'react-icons/ci';
import { TiTick } from "react-icons/ti";
const BookCard = ({ book, cart, setCart }) => {

    const { image, tags, bookName, author, price, category, rating } = book;
    const [isAddedToCart, setIsAddedToCart] = useState(false)
    const cartHandler = () => {
        const isBookInCart = cart.some(item => item.bookId === book.bookId);
        if (!isBookInCart) {
            setIsAddedToCart(true)
            setCart([...cart, book])
        }

    }

    return (

        <div className='p-6 border border-green-500 shadow-md rounded-md space-y-3'>
            <img className='w-full mx-auto h-60 rounded-t-md' src={image} alt="" />
            <div className='flex gap-4'>
                <div className="badge badge-soft badge-success bg-green-500 text-white p-3">{tags[0]}</div>
                <div className="badge badge-soft badge-success  bg-green-500 text-white p-3">{tags[1]}</div>
            </div>
            <h2 className='bookNameFont text-2xl font-bold line-clamp-1'>{bookName}</h2>
            <h2>By: {author}</h2>
            <div className='flex justify-between items-center'>
                <p>Price:</p>
                <p>{price} USD</p>
            </div>
            <div className="divider"></div>
            <div className='flex justify-between items-center'>
                <span>{category}</span>
                <div className='flex items-center gap-1'>
                    <span>{rating}</span>
                    <span className='text-yellow-600'><CiStar /></span>
                </div>
            </div>
            <button onClick={cartHandler} className={`btn ${isAddedToCart ? 'btn-success  text-white'
                : 'btn-primary'} w-full`}>{isAddedToCart ? <span className='flex items-center'><TiTick />Added to Cart</span> : ` Add To Cart`}</button>
        </div >

    );
};

export default BookCard;