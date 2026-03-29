// import React from 'react';

// const Cart = ({ cart, setCart }) => {
//     const totalPrice = cart.reduce((sum, item) => sum + item.price, 0)
//     return (
//         <div className='space-y-2'>
//             {cart.map((item) => {
//                 return (

//                     <div className='p-4 border border-green-500 '>
//                         <div className='flex justify-between'>
//                             <p>{item.bookName}</p>
//                             <p>{item.price}</p>

//                         </div>

//                     </div>


//                 )
//             })}
//             <div className='flex justify-between'>
//                 <p>Total</p>
//                 <p>{totalPrice}</p>


//             </div>
//         </div>
//     );
// };

// export default Cart;




import React from 'react';
import Heading from '../books/heading/Heading';

const Cart = ({ cart, setCart }) => {
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0)
    return (
        <div className='space-y-2'>
            <Heading></Heading>
            {cart.map((item) => {
                return (

                    <div className='p-4 border border-green-500 '>
                        <div className='flex justify-between'>
                            <p>{item.bookName}</p>
                            <p>{item.price}</p>

                        </div>

                    </div>


                )
            })}
            <div className='flex justify-between'>
                <p>Total</p>
                <p>{totalPrice}</p>


            </div>
        </div>
    );
};

export default Cart;