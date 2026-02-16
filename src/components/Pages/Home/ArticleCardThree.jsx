import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function ArticleCardThree({MappedCard}) {
  return (
    <div className=" h-full bg-grey border border-[#2c2c2c] rounded-xl overflow-hidden hover:border-orange-500 transition-all duration-300 group">
      <div className=" overflow-hidden relative">
        <img
          src={MappedCard?.image}
          alt=""
          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
        />
        <div className='absolute inset-0 
                  bg-linear-to-t 
                  from-black/60 
                  via-transparent 
                  to-transparent 
                  opacity-0 
                  group-hover:opacity-100 
                  transition-opacity 
                  duration-300'>
                </div>
      </div>
      <div className=" bg-[#161616]">
        <div className="container  mx-auto p-4">
          <div className="flex pb-3 ">
            <p className=" text-[#737373]">{MappedCard?.readTime}•</p>
            <p className="text-[#737373] pr-1">{MappedCard?.date} </p>
          </div>
          <h2 className="text-white pb-3 group-hover:text-orange-500 transition-all duration-300">
            {MappedCard?.title}
          </h2>
          <p className="text-[#a1a1a1] pb-4">{MappedCard?.excerpt}</p>
            <div className="pt-3 flex border-t border-[#2c2c2c] justify-between">
              <div className=" border ml-5 w-15 rounded-full overflow-hidden">
                <div className='border rounded-full'>
                  <img
                    className="w-full h-full object-cover rounded-full"
                    src={MappedCard?.author?.avatar}
                    alt=""
                  />
                </div>
              </div>
              <div className="w-1/2 text-white text-xs">
                <h6>{MappedCard?.author?.name}</h6>
                <p className='text-[#737373]'>{MappedCard?.author?.role}</p>
              </div>
              <div className="w-1/2 flex justify-end ">
                <div className='w-10 h-10 group-hover:bg-orange-500 bg-orange-500/20 flex items-center justify-center rounded-full border border-orange-500'><span className=" text-orange-500 group-hover:text-white duration-300"><FontAwesomeIcon icon={faAngleLeft} /></span></div>
              </div>
            </div>
          </div>
        </div>
      </div>

  )
}
