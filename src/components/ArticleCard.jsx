import { faArrowLeftLong, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ArticleCard({Acards}) {
    console.log(Acards)
    if (!Acards) {
    return <p className="text-white">Loading...</p>;
  }
  return (
    
    <article className='bg-grey mb-3 lg:flex border border-[#2c2c2c] rounded-xl overflow-hidden hover:border-orange-500 transition-all duration-300 group'>
        <div className='lg:w-1/2 overflow-hidden relative '>
            <img src={Acards?.image} alt="" className=' bg-linear-from-t group-hover:opacity-100  group-hover:bg-linear-to-t from-black/50 via-transparent to-transparent w-full h-full object-cover group-hover:scale-110 transition-all duration-300' />
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
        <div className='lg:w-1/2 h-full bg-[#161616]'>
            <div className='container mx-auto p-4'>
                <div className='flex p-5'>
                    <div>
                        <span className="bg-[#f973161a] text-orange-500 m-1 border pr-2 pl-2 border-[#f973164d] rounded-full text-sm mb-2 flex">
                
                
                <div className=''>{Acards?.category}</div>
        </span>
                    </div>
                    <p className=' text-[#737373] text-sm pr-3'><FontAwesomeIcon icon={faClock} /> {Acards?.readTime}</p>
                </div>
                <h2 className='text-white text-2xl group-hover:text-orange-500 transition-all duration-300'>{Acards?.title}</h2>
                <p className='text-[#a1a1a1] text-sm pt-5 pb-5'>{Acards?.excerpt}</p>
                <div className='flex justify-between m-5 mt-10'>
                    <div className='w-1/2 flex'>
                        <div className=' border w-1/4 ml-5 rounded-full overflow-hidden'>
                            <img className='w-full h-full object-cover' src={Acards?.author?.avatar} alt="" />
                        </div>
                        <div className='w-1/2 text-white'>
                            <h6>{Acards?.author?.name}</h6>
                            <p className='text-[#737373]'>{Acards?.date}</p>
                        </div>
                    </div>
                    <div className='pt-3'>
                        <span className='text-orange-500 '><span className=" inline-block group-hover:translate-x-4 duration-300">اقرأ المقال</span><FontAwesomeIcon icon={faArrowLeftLong} /></span>
                    </div>
                </div>
            </div>
        </div>
    </article>
  )
}
