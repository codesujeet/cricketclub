import { useState } from "react";
import SearchBar from "./SearchBar";

export default function Front() {
  const [searchBar, setSearchBar] = useState(false);

  return (
    <section className="z-10">
      <div className="mx-auto sm:w-11/12">
        <div
          className={`py-8 sm:rounded-3xl relative w-full h-[620px] bg-homefrontbg bg-cover lg:bg-center bg-no-repeat bg-left`}
        >
          <div className="absolute bottom-[24%] sm:left-[6%] left-[5%] flex items-center flex-wrap gap-4">
            {searchBar && (
              <form className="flex flex-wrap items-end gap-4">
                <SearchBar />
                <button className="w-24 px-2 py-3 text-sm font-bold text-black uppercase bg-white rounded-md hover:text-white hover:bg-black hover:bg-opacity-50">
                  Find
                </button>
              </form>
            )}
            {!searchBar && (
              <button className="sm:text-[20px] bg-button-primary text-[#6C6252] hover:bg-button-primary-hover transition-colors sm:px-10 px-3 py-3 rounded-md capitalize sm:w-auto w-full font-bold">
                Scroll Down for Current Matches
              </button>
            )}
          </div>
          <article className="lg:flex hidden items-end absolute top-[30%] right-0 w-[30%] border-l-2 h-1/2 px-2 border-l-white">
            <div className="text-black text-[26px] w-[80%]">
            No matter how much cricket you have played you are always learning.
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
