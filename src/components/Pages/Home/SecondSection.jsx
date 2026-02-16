import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import CardContainer from '../../CardContainer'
import OrangeSpan from '../../OrangeSpan'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from 'react-router-dom';
export default function SecondSection() {
    const navigates = useNavigate();
  return (
    <section>
        <div className='bg-black p-20'>
            <div className="bg-black max-w-4xl mx-auto pt-10 text-orange-500">
                <div className='w-fit'>
                    <OrangeSpan
                    text="مميز"
                    color="text-orange-500"
                    />
                </div>
                <h2 className='section-title text-white text-5xl pt-7 pb-7'>مقالات مختارة</h2>
                <div className='lg:flex justify-between'>
                    <p className='section-subtitle max-w-lg text-[#a1a1a1] block pb-7 lg:pb-14'>محتوى منتقى لبدء رحلة تعلمك</p>
                    <div className=' pb-7 lg:pb-0'><button onClick={()=>navigates("/blog")} className='cursor-pointer px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 bg-linear-to-r from-orange-500 to-orange-600 text-white hover:-translate-y-0.5 group'>عرض الكل <FontAwesomeIcon className='group-hover:-translate-x-2 duration-300' icon={faAngleLeft} /></button></div>
                </div>
                <CardContainer/>
            </div>
            
        </div>
      </section>
  )
}
