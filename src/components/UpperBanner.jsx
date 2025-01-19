
import './upperbanner.css';
import React from 'react';
import { CgPlayButtonO } from 'react-icons/cg';
import { IoMdArrowForward } from "react-icons/io";
import { AiOutlinePlayCircle } from "react-icons/ai";
function UpperBanner()
{
  return<>
  <div className='upperBannerdiv'>
     <div className='upperBannerbtndiv1'>
        <button className='upperbtn1'>New features</button>
        <button className='upperbtn2'> Check out team dashboard <IoMdArrowForward />

</button>
    </div>
    <div className='upperBannertextdiv'>
      <h1>Beautiful analytics to grow smarter</h1>
      <p className='headiPara'>Powerful , sel-serve productt and growth analytics to help you convert , engage , and retain more users . Trusted by over 4,000 startups.</p>

    </div>
    
    <div className='upperBannerbtndiv2'>
        <button className='upperbtn21'><AiOutlinePlayCircle />Demo</button>
        <button className='upperbtn22'> Sign up </button>
    </div>
  </div>
  </>
 
}

export default UpperBanner;