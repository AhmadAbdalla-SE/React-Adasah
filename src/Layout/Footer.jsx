import {
  faGithub,
  faLinkedin,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtFoot from "../components/ButtFoot";


export default function Footer() {
  return (
    <section className=" bg-[#0a0a0a] text-white p-10 border-black border-t-[#262626] border-b-[#262626]  border ">
      <div className=" max-w-4xl mx-auto ">
        <div className=" grid grid-cols-1 lg:grid-cols-4">
          <div className="mb-10">
            <div className="flex flex-row pb-4">
              <div className=" bg-orange-500 rounded-xl text-white justify-center w-10 h-10 flex items-center">
                ع
              </div>
              <div className="flex items-center mr-2">عدسة</div>
            </div>
            <p className="text-[#737373] pb-4">
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين
              ونصائح عملية لتطوير مهاراتكم.
            </p>
            <div className="grid grid-cols-4 w-2/4 lg:w-4/4">
              <div className=" bg-[#161616cc] rounded-xl hover:bg-orange-500 hover:text-white hover:scale-120 duration-300 cursor-pointer border border-gray-800 text-white text-center w-9 h-9 flex items-center justify-center">
                <FontAwesomeIcon icon={faXTwitter} />
              </div>
              <div className=" bg-[#161616cc] rounded-xl hover:bg-orange-500 hover:text-white hover:scale-120 duration-300 cursor-pointer border border-gray-800 text-white text-center w-9 h-9 flex items-center justify-center">
                <FontAwesomeIcon icon={faGithub} />
              </div>
              <div className=" bg-[#161616cc] rounded-xl hover:bg-orange-500 hover:text-white hover:scale-120 duration-300 cursor-pointer border border-gray-800 text-white text-center w-9 h-9 flex items-center justify-center">
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
              <div className=" bg-[#161616cc] rounded-xl hover:bg-orange-500 hover:text-white hover:scale-120 duration-300 cursor-pointer border border-gray-800 text-white text-center w-9 h-9 flex items-center justify-center">
                <FontAwesomeIcon icon={faYoutube} />
              </div>
            </div>
          </div>
          <div className="mb-10">
            <div className="flex flex-row items-center">
              <div className="w-10 h-1 bg-linear-to-r from-[#f97316] to-[#fbbf24] bg-orange-500 text-center ml-3"></div>
              <div>استكشف</div>
            </div>
            <ButtFoot text="الرئيسية" />
            <ButtFoot text="المدونة" />
            <ButtFoot text="من نحن" />
          </div>
          <div className="mb-10">
            <div className="flex flex-row items-center">
              <div className="w-10 h-1 bg-linear-to-r from-[#f97316] to-[#fbbf24] bg-orange-500 text-center ml-3"></div>
              <div>التصنيفات</div>
            </div>
            <ButtFoot text="إضاءة" />
            <ButtFoot text="بورتريه" />
            <ButtFoot text="مناظر طبيعية" />
            <ButtFoot text="تقنيات" />
          </div>
          <div className="mb-10">
            <div className="flex flex-row items-center mb-4">
              <div className="w-10 h-1 bg-linear-to-r from-[#f97316] to-[#fbbf24] bg-orange-500 text-center ml-3"></div>
              <div>ابقى على اطلاع</div>
            </div>
            <div className="text-[#737373] mb-4">
              اشترك للحصول على أحدث المقالات والتحديثات.
            </div>
            <div className=" bg-[#262626] mb-2 border rounded-lg border-[#161616] relative ">
              <label htmlFor=""></label>
              <input
                type="text"
                placeholder="ابحث في المقالات..."
                className="w-full px-5 py-3 rounded-xl border border-[#2c2c2c] bg-[#161616] text-white outline-none focus:border-orange-500 focus:ring-0 transition-all duration-300"
              />
            </div>
            <div
              className=" cursor-pointer text-center px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 bg-linear-to-r from-orange-500 to-orange-600 text-white hover:-translate-y-0.5 w-full"
              href="#"
            >
اشترك             </div>
          </div>
        </div>
      </div>
    </section>
    
  );
}
