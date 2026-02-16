import CardContainer from '../../CardContainer';
import OrangeSpan from "../../OrangeSpan";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear,faChevronLeft, faUser, faMountainSun, faSliders } from '@fortawesome/free-solid-svg-icons';
export default function ThirdSection() {
  return (
    <section className="relative bg-[#0a0a0a] overflow-hidden pt-20  border-black border-t-[#262626] border-b-[#262626]  border">
      <div className=" ">
        <div className="text-center max-w-4xl mx-auto">
          <div className="section-label flex flex-col items-center gap-2 mb-8 animate-fade-in h-max m-10">
            <OrangeSpan text="التصنيفات"
            color="text-orange-500" />
            <div className="text-5xl md:text-6xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight ">
              <div>
                استكشف حسب الموضوع
              </div>
            </div>
            <div className="text-xl md:text-2xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              <p>
                  اعثر على محتوى مصمم حسب اهتماماتك
              </p>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 w-full'>
              <div className="border-[#2c2c2c] cursor-pointer border w-full flex justify-content-around rounded-xl p-5 gap-3 bg-[#161616] hover:bg-linear-to-br from-orange-500 to-yellow-500 transition-all duration-300 group">
                <div className='w-4/5 flex flex-col'>
                  <div className='mb-3 w-12 h-12 text-orange-500 bg-orange-500/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 group-hover:text-white transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent'>
                    <FontAwesomeIcon icon={faGear} />
                  </div>
                  <div className='flex flex-col'>
                    <h3 className='text-white text-start text-xl'>إضاءة</h3>
                    <div><p className='text-[#a1a1a1] group-hover:text-white duration-300 text-start'>3 مقالة</p></div>
                  </div>
                </div>
                <div className=' w-1/5 text-transparent group-hover:text-white duration-300 mt-3'>
                  <div className='w-7 h-7 rounded-full group-hover:bg-[#fb923c] '><FontAwesomeIcon icon={faChevronLeft} /></div>
                </div>
              </div>
              <div className="border-[#2c2c2c] cursor-pointer border flex justify-content-around rounded-xl p-5 gap-3 bg-[#161616] hover:bg-linear-to-br from-orange-500 to-yellow-500 transition-all duration-300 group">
                <div className='w-4/5 flex flex-col'>
                  <div className='mb-3 w-12 h-12 text-orange-500 bg-orange-500/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 group-hover:text-white transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent'>
                    <FontAwesomeIcon icon={faUser} />
                  </div>
                  <div className='flex flex-col'>
                    <h3 className='text-white text-start text-xl'>بورتريه</h3>
                    <div><p className='text-[#a1a1a1] group-hover:text-white duration-300 text-start'>3 مقالة</p></div>
                  </div>
                </div>
                <div className=' w-1/5 text-transparent group-hover:text-white duration-300 mt-3'>
                  <div className='w-7 h-7 rounded-full group-hover:bg-[#fb923c] '><FontAwesomeIcon icon={faChevronLeft} /></div>
                </div>
              </div>
              <div className="border-[#2c2c2c] cursor-pointer border flex justify-content-around rounded-xl p-5 gap-3 bg-[#161616] hover:bg-linear-to-br from-orange-500 to-yellow-500 transition-all duration-300 group">
                <div className='w-4/5 flex flex-col'>
                  <div className='mb-3 w-12 h-12 text-orange-500 bg-orange-500/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 group-hover:text-white transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent'>
                    <FontAwesomeIcon icon={faMountainSun} />
                  </div>
                  <div className='flex flex-col'>
                    <h3 className='text-white text-start text-xl'>مناظر طبيعية</h3>
                    <div><p className='text-[#a1a1a1] group-hover:text-white duration-300 text-start'>3 مقالة</p></div>
                  </div>
                </div>
                <div className=' w-1/5 text-transparent group-hover:text-white duration-300 mt-3'>
                  <div className='w-7 h-7 rounded-full group-hover:bg-[#fb923c] '><FontAwesomeIcon icon={faChevronLeft} /></div>
                </div>
              </div>
              <div className="border-[#2c2c2c] cursor-pointer border flex justify-content-around rounded-xl p-5 gap-3 bg-[#161616] hover:bg-linear-to-br from-orange-500 to-yellow-500 transition-all duration-300 group">
                <div className='w-4/5 flex flex-col'>
                  <div className='mb-3 w-12 h-12 text-orange-500 bg-orange-500/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 group-hover:text-white transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent'>
                    <FontAwesomeIcon icon={faSliders} />
                  </div>
                  <div className='flex flex-col'>
                    <h3 className='text-white text-start text-xl'>تقنيات</h3>
                    <div><p className='text-[#a1a1a1] group-hover:text-white duration-300 text-start'>3 مقالة</p></div>
                  </div>
                </div>
                <div className=' w-1/5 text-transparent group-hover:text-white duration-300 mt-3'>
                  <div className='w-7 h-7 rounded-full group-hover:bg-[#fb923c] '><FontAwesomeIcon icon={faChevronLeft} /></div>
                </div>
              </div>
              <div className="border-[#2c2c2c] cursor-pointer border flex justify-content-around rounded-xl p-5 gap-3 bg-[#161616] hover:bg-linear-to-br from-orange-500 to-yellow-500 transition-all duration-300 group">
                <div className='w-4/5 flex flex-col'>
                  <div className='mb-3 w-12 h-12 text-orange-500 bg-orange-500/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 group-hover:text-white transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent'>
                    <FontAwesomeIcon icon={faGear} />
                  </div>
                  <div className='flex flex-col'>
                    <h3 className='text-white text-start text-xl'>معدات</h3>
                    <div><p className='text-[#a1a1a1] group-hover:text-white duration-300 text-start'>3 مقالة</p></div>
                  </div>
                </div>
                <div className=' w-1/5 text-transparent group-hover:text-white duration-300 mt-3'>
                  <div className='w-7 h-7 rounded-full group-hover:bg-[#fb923c] '><FontAwesomeIcon icon={faChevronLeft} /></div>
                </div>
              </div>
              
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
