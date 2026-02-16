import OrangeSpan from "./OrangeSpan";

export default function ArticleCardTwo({ AcardsTwo }) {
  return (
    <div className=" w-[32%] bg-grey border border-[#2c2c2c] rounded-xl overflow-hidden hover:border-orange-500 transition-all duration-300 group">
      <div className=" overflow-hidden">
        <img
          src={AcardsTwo?.image}
          alt=""
          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
        />
      </div>
      <div className=" bg-[#161616]">
        <div className="container mx-auto p-4">
          <div className="flex">
            <p className=" text-[#737373]">{AcardsTwo?.readTime} * </p>
            <p className="text-[#737373]">{AcardsTwo?.date}</p>
          </div>
          <h2 className="text-white group-hover:text-orange-500 transition-all duration-300">
            {AcardsTwo?.title}
          </h2>
          <p className="text-[#a1a1a1]">{AcardsTwo?.excerpt}</p>
          <div className="flex justify-between">
            <div className=" flex border-t border-[#2c2c2c] justify-between">
              <div className=" border w-1/2 rounded-circle">
                <img
                  className="w-full h-full object-cover"
                  src={AcardsTwo?.author?.avatar}
                  alt=""
                />
              </div>
              <div className="w-1/2 text-white">
                <h6>{AcardsTwo?.author?.name}</h6>
                <p>{AcardsTwo?.author?.role}</p>
              </div>
              <div className="w-1/2">
                <span className="text-orange-500">اقرأ المقال</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
