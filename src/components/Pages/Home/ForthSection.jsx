import React from 'react'
import OrangeSpan from '../../OrangeSpan'
import CardContainerThree from './CardContainerThree'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ForthSection() {
  return (
    <section>
        <div className='bg-black p-5'>
            <div className="bg-black max-w-4xl mx-auto pt-10">
                <div className='w-fit mb-5'>
                    <OrangeSpan
                    text="الأحدث"
                    color="text-orange-500"
                    />
                </div>
                <h2 className='section-title text-white text-5xl mb-5'>أحدث المقالات</h2>
                <div className='lg:flex justify-between mb-5 text-xl'>
                    <p className='section-subtitle max-w-lg mb-5 text-[#a1a1a1] block'>محتوى جديد طازج من المطبعة</p>
                    <button className='text-orange-500 group cursor-pointer hover:text-orange-400'>عرض جميع المقالات<FontAwesomeIcon className='group-hover:-translate-x-2 duration-300 ' icon={faArrowLeftLong} /></button>
                </div>
                <CardContainerThree/>
            </div>
            
        </div>
      </section>
  )
}
