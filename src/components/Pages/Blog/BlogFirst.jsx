import React from "react";
import OrangeSpan from "../../OrangeSpan";

export default function BlogFirst() {
  return (
    <section className="relative bg-[#0a0a0a] overflow-hidden pt-20">
      <div className=" inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-size-[60px_60px]">
        <div className="text-center max-w-4xl mx-auto">
          <div className="section-label flex flex-col items-center gap-2 animate-fade-in h-max">
            <OrangeSpan text="مرحباً بك في عدسة" />
            <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight ">
              <div>
استكشف                 <p className="bg-linear-to-r from-[#f97316] to-[#fbbf24] bg-clip-text text-transparent inline-block">
                  مقالاتنا
                </p>
              
              </div>
              <div className="text-xl text-neutral-400 max-w-2xl mx-auto">
                <p>
                اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
