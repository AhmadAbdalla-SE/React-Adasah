import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function FifthSection() {
  return (
    <section className=" bg-[#0a0a0a] overflow-hidden">
      <div className=" max-w-4xl mx-auto">
        <div className=" flex flex-col items-center pt-20 pb-20 mr-5 ml-5">
          <div class="sm glass-card p-10  bg-[#161616cc]/90 border border-[#262626] rounded-2xl text-center">
            <div className="pb-4">
              <div className="m-auto bg-orange-500 rounded-xl text-white text-center w-15 h-15 flex items-center justify-center">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
            </div>

            <div className="text-4xl  font-bold text-white mb-6 leading-tight tracking-tight ">
              <div className="pb-4">
                اشترك في
                <p className="bg-linear-to-r from-[#f97316] to-[#fbbf24] bg-clip-text text-transparent inline-block">
                  نشرتنا الإخبارية
                </p>
              </div>
              <p className="color-gray text-[1.2rem] text-[#a1a1a1] pb-4">
                احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك
                الإلكتروني
              </p>
            </div>
            <div className="">
              <div className="flex flex-row w-2/3 m-auto pb-4">
                <div className=" ml-2 w-2/3 bg-[#262626] overflow-hidden rounded-lg">
                  <label htmlFor="" className=""></label>
                  <input
                    type="text"
                    placeholder="ابحث في المقالات..."
                    className="w-full px-5 py-3 rounded-xl border border-[#2c2c2c] bg-[#161616] text-white outline-none focus:border-orange-500 focus:ring-0 transition-all duration-300"
                  />
                </div>
                <div
                  className="w-1/3 text-center cursor-pointer flex justify-center items-center rounded-full text-sm font-medium transition-all duration-300 bg-linear-to-r from-orange-500 to-orange-600 text-white hover:-translate-y-0.5 "
                  href="#"
                >
                اشترك الآن
                </div>
              </div>
              <div className="flex flex-row justify-between w-2/3 m-auto text-[#a1a1a1]">
                <div>
                  <img src="" alt="" />
                  <img src="" alt="" />
                  <img src="" alt="" />
                </div>
                <div>
                  <p>
                    انضم لـ <span>+10,000</span> مصور
                  </p>
                </div>
                <div>
                  <p>بدون إزعاج</p>
                </div>
                <div>
                  <p>إلغاء الاشتراك في أي وقت</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
