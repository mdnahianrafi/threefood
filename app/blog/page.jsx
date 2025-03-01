"use client"
import React ,{useState} from "react"
import { tastyRecipes, deliciousrecipes } from "@/data"; // Import your data
import Link from "next/link"; // Import Link
import Image from "next/image";
import tastyrecipe from "../../public/Tasty Recipe.png"
import ad from "../../public/Ads.png"
const page = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State for search input
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const resultsPerPage = 4; // Number of items per page

  // 🔍 Combine all recipes from both arrays
  const allRecipes = [...tastyRecipes, ...deliciousrecipes];

  // 🔍 Filter recipes based on search term
  const filteredRecipes = allRecipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 📝 Get paginated results
  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = filteredRecipes.slice(
    indexOfFirstResult,
    indexOfLastResult
  );

  // 📌 Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-center items-center py-20">
          <div className="">
            <h1 className=" text-center text-5xl lg:text-6xl xl:text-[64px] font-semibold font-inter">
              Blog & Article
            </h1>
            <p className="pt-8 pb-16 lg:pb-20 text-base font-inter ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
            </p>
            <form className="py-16 relative flex justify-center items-center">
              <input
                type="text"
                placeholder="Search recipes..."
                value={searchTerm}
                className="p-8 bg-white w-96 lg:w-[476px] h-14 lg:h-[75px] border-2 border-bl rounded-3xl"
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1); // Reset to page 1 on new search
                }}
              />
              <button
                type="submit"
                className="bg-black px-9 lg:px-11 py-4 lg:py-5 text-white absolute top-[68px] right-10 md:top-[35%]  md:right-[25%] lg:right-[20%] rounded-3xl"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-wrap pb-20">
          <div className="w-full xl:w-2/3">
            {/* 📃 Recipe List */}
            <ul className="list-disc pl-5">
              {currentResults.length > 0 ? (
                currentResults.map((recipe) => (
                  <Link key={recipe.id} href={`/recipedetails/${recipe.id}`}>
                    <div className="sm:flex py-8 gap-x-10">
                      <img src={recipe.imgSrc} alt={recipe.title} />
                      <div>
                        <p className="p-2 text-2xl font-semibold font-inter">
                          {recipe.title}
                        </p>
                        <p className="text-base font-inter pt-4 pb-10">
                          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim
                        </p>
                        <p className="text-sm">12 November 2021</p>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <p>No results found</p>
              )}
            </ul>

            {/* Pagination */}
            <div className="flex justify-center mt-4">
              {Array.from({ length: Math.ceil(filteredRecipes.length / resultsPerPage) }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => paginate(i + 1)}
                  className={`mx-2 px-6 py-3 text-[18px] font-bold font-inter border rounded-xl   ${currentPage === i + 1 ? "bg-black text-white" : "bg-gray-200"}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
          <div className="w-full xl:w-1/3">
          <Image src={tastyrecipe} alt="tasty recipe.png"/>
          <Image src={ad} alt="Ads.png" className="py-20"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
