import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='footer-container'>
<p>&copy; 2023 HAPS Furniture All rights reserved</p>
<p className='icons'>

<Link target="_blank" href="https://www.instagram.com/haps.furniture/"><AiFillInstagram/></Link>

{/* <button type="button" className='ig-icon' onClick={"_https://www.instagram.com/haps.furniture/"}><AiFillInstagram/></button> */}
  <Link target="_blank" href="https://www.facebook.com/people/Haps-Furniture/100094399224312/"><AiFillFacebook/></Link>
  {/* <AiFillInstagram href='https://www.instagram.com/haps.furniture/'/> */}
  {/* <AiOutlineTwitter/> */}
</p>
    </div>
  )
}

export default Footer