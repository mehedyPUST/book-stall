// import { Suspense, useState } from 'react';
// import './App.css'
// import Books from './components/books/Books';
// import Cart from './components/cart/Cart';
// const booksData = async () => {
//   const res = await fetch('/booksData.json')
//   return res.json();
// }
// const booksDataPromise = booksData();


// function App() {
//   const [activeTab, setActiveTab] = useState('books')
//   const [cart, setCart] = useState([]);
//   console.log(cart)
//   return (
//     <>

//       <div className='w-11/12 mx-auto mt-5'>
//         <div className='flex justify-center'>
//           <div role="tablist" className="tabs tabs-box ">
//             <a onClick={() => setActiveTab('books')} role="tab" className={activeTab === 'books' ? 'tab bg-green-500 text-white  tab-active' : 'tab'}>Books</a>
//             <a onClick={() => setActiveTab('cart')} role="tab" className={activeTab === 'cart' ? 'tab bg-green-500 text-white  tab-active' : 'tab'}>Cart ({cart.length})</a>

//           </div>
//         </div>
//         <Suspense fallback={<p>Books are Loading................</p>}>
//           {activeTab === 'books' ? <Books booksDataPromise={booksDataPromise} cart={cart} setCart={setCart}></Books> : <Cart cart={cart} setCart={setCart}></Cart>}
//         </Suspense>



//       </div>

//     </>
//   )
// }

// export default App



import { Suspense, useState } from 'react';
import './App.css'
import Books from './components/books/Books';
import Cart from './components/cart/Cart';
const booksData = async () => {
  const res = await fetch('/booksData.json')
  return res.json();
}
const booksDataPromise = booksData();


function App() {
  const [activeTab, setActiveTab] = useState('books')
  const [cart, setCart] = useState([]);
  console.log(cart)
  return (
    <>

      <div className='w-11/12 mx-auto mt-5'>
        <div className='flex justify-center'>
          <div role="tablist" className="tabs tabs-box ">
            <a onClick={() => setActiveTab('books')} role="tab" className={activeTab === 'books' ? 'tab bg-green-500 text-white  tab-active' : 'tab'}>Books</a>
            <a onClick={() => setActiveTab('cart')} role="tab" className={activeTab === 'cart' ? 'tab bg-green-500 text-white  tab-active' : 'tab'}>Cart ({cart.length})</a>

          </div>
        </div>
        <Suspense fallback={<p>Books are Loading................</p>}>
          {activeTab === 'books' ? <Books booksDataPromise={booksDataPromise} cart={cart} setCart={setCart}></Books> : <Cart cart={cart} setCart={setCart}></Cart>}
        </Suspense>



      </div>

    </>
  )
}

export default App
