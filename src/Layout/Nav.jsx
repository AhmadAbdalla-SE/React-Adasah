import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
export default function Nav() {
  return (
    <div className=" fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-transparent">
      <div className=" flex justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" flex justify-between items-center h-20">
          <div className=" flex items-center gap-3 group cursor-pointer">
            <div className=" relative w-12 h-12 rounded-xl overflow-hidden group-hover:scale-105 transition-all duration-300">
              <img src={logo} alt="Logo" />
            </div>
            <div className=" flex flex-col">
              <span className=" text-white text-xl font-bold bg-linear-to-r from-white to-neutral-300 bg-clip-text text bg-transparent">
                عدسة
              </span>
              <span className="text-xs text-orange-400/80 hidden sm:block tracking-wide">
                عالم التصوير الفوتوغرافي
              </span>
            </div>
          </div>
        </div>
        <div className=" hidden md:flex items-center gap-3">
          <div className=" flex items-center bg-[#161616] rounded-full p-1.5 border border-[#262626]">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `px-4 py-2 rounded-xl text-sm font-medium transition-all  ${
                  isActive
                    ? "bg-linear-to-r from-orange-500 to-orange-600 text-white "
                    : "bg-[#161616] text-neutral-400  hover:border-orange-500/30"
                }`
              }
            >
              الرئيسية
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `px-4 py-2 rounded-xl text-sm font-medium transition-all  ${
                  isActive
                    ? "bg-linear-to-r from-orange-500 to-orange-600 text-white "
                    : "bg-[#161616] text-neutral-400  hover:border-orange-500/30"
                }`
              }
            >
              المدونة
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-4 py-2 rounded-xl text-sm font-medium transition-all  ${
                  isActive
                    ? "bg-linear-to-r from-orange-500 to-orange-600 text-white "
                    : "bg-[#161616] text-neutral-400  hover:border-orange-500/30"
                }`
              }
            >
              من نحن
            </NavLink>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <button class="p-3 text-neutral-500 hover:text-orange-500 hover:bg-[#161616] rounded-xl transition-all cursor-pointer duration-300 border border-transparent hover:border-[#262626]">
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <a className="linkatthov" href="#">
            ابدأ القراءة
          </a>
        </div>
      </div>
    </div>
  );
}
