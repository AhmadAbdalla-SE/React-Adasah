import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function BlogSecond() {
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await axios.get("/posts.json");
        setPosts(res.data.posts); 
      } catch (error) {
        console.error("Failed to fetch posts", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);


  // kol haga hatebaa saved hena gowa zay keda["All","Eda2a", "Portrait", "Technicalities", "Tools"] men el akher ...new set beta3mel new variable
  // metshal meno kol el duplicates set betsheel kol el duplicates we map betakhod kol el categories el mesh duplicated we tohotaha we kol dah beyethat fe array 3ashan el ...
  const categories = ["All", ...new Set(posts.map((post) => post.category))];

  //filter by category ba3den betsearch
  const filteredPosts = posts.filter((post) => {
  const matchesCategory =
    category === "All" || post.category === category;

  const matchesSearch =
    post.title.toLowerCase().includes(search.toLowerCase());

  return matchesCategory && matchesSearch;
});

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg">
        Loading posts...
      </div>
    );
  }

  return (
    <section className=" bg-[#0a0a0a] overflow-hidden">
        <div className=" max-w-4xl mx-auto">
          <div className=" flex flex-col pt-10 min-h-screen ">
              {/* dy lel categories */}
              <div className=" justify-between gap-2 mb-6 ">
                <div className="pb-4 flex justify-between border rounded-lg border-b-[#2c2c2c]  w-full  ">
                  <div className="flex items-center relative">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <label htmlFor="">
                      
                    </label>
                    
                    <input
                    type="text"
                    value={search} onChange={(e)=> setSearch(e.target.value)}
                    placeholder="ابحث في المقالات..."
                    className="w-full px-5 py-3 rounded-xl border border-[#2c2c2c] bg-[#161616] text-white outline-none focus:border-orange-500 focus:ring-0 transition-all duration-300"
                    
                  />
                    <FontAwesomeIcon className="absolute left-3 text-[#444444]" icon={faMagnifyingGlass} />
                  </div>
                  <div className="flex items-center">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setCategory(cat)}
                        className={`ml-3 mr-1 px-4 py-2 rounded-full text-sm border transition cursor-pointer
                  ${
                    category === cat
                      ? "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 bg-linear-to-r from-orange-500 to-orange-600 text-white border border-orange-500"
                      : "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"
                  }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/*dy lel Posts */}
              <div className="grid cursor-pointer grid-cols-1 lg:grid-cols-3 gap-3 justify-center pb-3">
                {filteredPosts.map((posts) => (
                  <div className="  h-full bg-grey border border-[#2c2c2c] rounded-xl overflow-hidden hover:border-orange-500 transition-all duration-300 group">
                    <div className=" overflow-hidden relative">
                      <img
                        src={posts?.image}
                        alt=""
                        className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
                      />
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
                    <div className=" h-full bg-[#161616]">
                      <div className="container mx-auto p-4">
                        <div className="flex pb-3">
                          <p className=" text-[#737373]">
                            {posts?.readTime} {" "}
                          </p>
                          <p className="text-[#737373]"> • {posts?.date}</p>
                        </div>
                        <h2 className="text-white pb-3 group-hover:text-orange-500 transition-all duration-300">
                          {posts?.title}
                        </h2>
                        <p className="text-[#a1a1a1] pb-4">{posts?.excerpt}</p>
                        <div className="pt-3 flex border-t border-[#2c2c2c] justify-between h-1/4">
                          <div className=" flex justify-between w-full items-center">
                              <div className="rounded-circle">
                                <div className=" border w-1/2 rounded-full">
                                  <img
                                    className="w-full h-full object-cover rounded-full"
                                    src={posts?.author?.avatar}
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div className="w-1/2 text-white text-xs">
                                <h6>{posts?.author?.name}</h6>
                                <p className='text-[#737373]'>{posts?.author?.role}</p>
                              </div>
                            </div>
                            <div className="w-1/2 flex justify-end">
                              <div className="w-10 h-10 group-hover:bg-orange-500 bg-orange-500/20 flex items-center justify-center rounded-full border border-orange-500">
                                <span className=" text-orange-500 group-hover:text-white duration-300">
                                  <FontAwesomeIcon icon={faAngleLeft} />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  
                ))}
              </div>
            </div>
          </div>
    </section>
  );
}
