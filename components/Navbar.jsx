import React from 'react'
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import {Cart} from './';
import { useStateContext } from '@/context/StateContext';

import { urlFor } from '@/lib/client';
import { urlForImage } from '@/sanity/lib/image';

// console.log('hello');
// console.log(logo);

const Navbar = ({Navbar}) => {
  const {showCart, setShowCart, totalQuantities} = useStateContext();
  return (
    <div className='navbar-container'>
      <p className='logo'>
{/* <Link href="/"> */}
<Link href="/">
<img src="https://cdn.sanity.io/images/zhnpr0sf/production/ae6c343b93947ebeedf003e7cbf260883caefc72-5580x2828.png?w=2000&fit=max&auto=format"  alt="HAPS"/> 
      <span className='textFurn'>Furniture</span>
</Link>
  {/* </Link> */}
      </p>
      <button type="button"
      className='cart-icon' onClick={() => setShowCart(true)}>
<AiOutlineShopping/>
<span className='cart-item-qty'>{totalQuantities}</span>
      </button>
     {showCart && <Cart/>}
    </div>
  )
}

export default Navbar