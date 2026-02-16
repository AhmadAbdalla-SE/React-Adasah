import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react'

export default function OrangeSpan(props) {
  return (
        <span className="bg-[#f973161a] text-[#d4d4d4] m-1 border p-3  border-[#f973164d] rounded-full text-md flex">
                <div className='ml-2'><FontAwesomeIcon className='pb-[0.2rem] text-orange-500 text-[0.5rem]'  icon={faCircle} beatFade  /></div>
                <div className='relative '>
                  <FontAwesomeIcon className='text-[0.5rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-orange-500' icon={faCircle} beat />
                  <FontAwesomeIcon className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[0.7rem] text-orange-500' icon={faCircle} beatFade />
                  </div>
                <div className={`mr-2 ml-2 ${props.color}`}>{props.text}</div>
        </span>
  )
}
