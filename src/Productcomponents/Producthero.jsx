import React from 'react'
import prdimg from '../images/sampleproduct.png'
import { LiaStarSolid } from 'react-icons/lia'
import {BiSolidPhoneCall,BiSolidOffer} from 'react-icons/bi'

export default function Producthero() {
  return (
    <div className='relative'>
      <div className='flex flex-row justify-between mx-32 my-10 overflow-hidden rounded-lg shadow-xl'>
      <div className='flex flex-col mx-10 my-10 '>
      <h1 className='text-xl font-bold text-transparent bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text font-Poppins'> BARCODE ROLLS - 101</h1>
      <p className='mt-5 text-base font-semibold font-Inter max-w-prose'>From retail to supply chain, our innovative barcode solutions empower businesses to achieve unparalleled accuracy, efficiency, and growth</p>
     <div className='flex flex-row space-x-8'>
     <div className='px-2 py-2 mt-10 border-2 h-fit rounded-lg place-items-center bg-violet-500 w-fit'>
      <button className='flex place-items-center space-x-3'>
      <BiSolidPhoneCall style={{color:"white"}} size={20}/>
      <h1 className='font-bold text-center text-white font-Inter'>Enquire Now</h1>
      </button>
      </div>
      <div className='px-2 py-2 mt-10 space-x-3 border-2 rounded-lg border-slate-900 animate-bounce w-fit'>
        <button className='flex place-items-center space-x-3'>
        <BiSolidOffer style={{color:""}} size={20} /> 
        <h1 className='font-bold text-center font-Inter text-violet-700'>Grab @ 20% off</h1>
        </button>
        </div>
      </div>
      <div className='flex flex-row mt-10 space-x-1'>
      <div className='flex mr-5 place-items-center'>
      <h1 className='font-extrabold font-Inter'> Reviews </h1>
      </div>
      <LiaStarSolid style={{color:"#F1C93B"}} size={25}/>
      <LiaStarSolid style={{color:"#F1C93B"}} size={25}/>
      <LiaStarSolid style={{color:"#F1C93B"}} size={25}/>
      <LiaStarSolid style={{color:"#F1C93B"}} size={25}/>
      <LiaStarSolid style={{color:"#F1C93B"}} size={25}/>
      </div>
      </div>
      <div className='overflow-hidden bg-yellow-300 rounded-l-full max-w-max'>
       <img className='w-auto h-96' src={prdimg} alt=''></img>
      </div>
      </div>
    </div>
  )
}