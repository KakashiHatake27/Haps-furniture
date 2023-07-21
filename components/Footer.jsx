import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='footer-container'>
<p>&copy; 2023 HAPS Furniture All rights reserved</p>
<p className='icons'>

<Link target="_blank" aria-label="Instagram" href="https://www.instagram.com/haps.furniture/"><AiFillInstagram/></Link>

  <Link target="_blank" aria-label="Facebook" href="https://www.facebook.com/people/Haps-Furniture/100094399224312/"><AiFillFacebook/></Link>

</p>
    </div>
  )
}

export default Footer