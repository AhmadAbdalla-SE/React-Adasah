import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function SemiFooter() {
  return (
    <section className="bg-[#0a0a0a] text-white p-2  border-black border-t-[#262626] border-b-[#262626]  border">
        <div className="max-w-4xl mx-auto ">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:justify-between">
            <div className="text-center">
              <p className="text-[#737373] mb-4 text-sm">
                © 2026 عدسة. صنع بكل{" "}
                <FontAwesomeIcon className="text-orange-500" icon={faHeart} />{" "}
                جميع الحقوق محفوظة
              </p>
            </div>
            <div className="flex gap-5 justify-center">
              <div>
                <button>
                  <span className=" cursor-pointer mt-2 mb-2 text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group">
                    سياسة الخصوصية
                  </span>
                </button>
              </div>
              <div>
                <button>
                  <span className=" cursor-pointer mt-2 mb-2 text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group">
                    شروط الخدمة
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
