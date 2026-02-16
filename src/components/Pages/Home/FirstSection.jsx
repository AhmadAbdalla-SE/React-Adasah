import React from "react";
import Card from "../../Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNewspaper,
  faPenNib,
  faUsers,
  faFolderOpen,
  faCircleInfo,
  faArrowLeftLong,
} from "@fortawesome/free-solid-svg-icons";
import OrangeSpan from "../../OrangeSpan";
import { useNavigate } from "react-router-dom";

export default function FirstSection() {
  const navigate = useNavigate();
  return (
    <section className=" h-max bg-[#0a0a0a] overflow-hidden pt-20">
      <div className="inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-size-[60px_60px] h-max p-30">
        <div className="text-center max-w-4xl mx-auto">
          <div className="section-label flex flex-col items-center gap-2 mb-8 animate-fade-in">
            <OrangeSpan text="مرحباً بك في عدسة" color="text-neutral-300" />
            <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight ">
              <div>
                اكتشف
                <p className="p-2 bg-linear-to-r from-[#f97316] to-[#fbbf24] bg-clip-text text-transparent inline-block">
                  فن
                </p>
                التصوير الفوتوغرافي
              </div>
            </div>
            <div className="text-xl md:text-2xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              <p>
                انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
              </p>
            </div>
            <div className="lg:m-10 w-full lg:flex lg:justify-center">
              <button onClick={()=> navigate("/blog")}

              className=" linkatthov lg:w-1/5 w-full cursor-pointer group">
                {" "}
                
                استكشف المقالات
                <FontAwesomeIcon
                  icon={faArrowLeftLong}
                  className="group-hover:-translate-x-2 duration-300"
                />
              </button>
              <button className=" lg:w-fit cursor-pointer mt-2 w-full text-white bg-transparent border border-gray-300 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:text-orange-400  hover:border-orange-400">
                <FontAwesomeIcon icon={faCircleInfo} /> اعرف المزيد
              </button>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 w-full justify-content-around justify-center m-10 gap-3">
              <Card
                number="50+"
                type="مقالة"
                emoji={<FontAwesomeIcon icon={faNewspaper} />}
              />
              <Card
                number="+10ألف"
                type="قارئ"
                emoji={<FontAwesomeIcon icon={faUsers} />}
              />
              <Card
                number="4"
                type="تصنيفات"
                emoji={<FontAwesomeIcon icon={faFolderOpen} />}
              />
              <Card
                number="4"
                type="تصنيفات"
                emoji={<FontAwesomeIcon icon={faPenNib} />}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
