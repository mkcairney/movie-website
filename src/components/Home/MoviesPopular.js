import { React, useRef } from "react";

const MoviesPopular = ({ moviePop }) => {

  // Using useRef hook to be able to mutate values in the DOM. In this case, for scrolling this component.
  const ref1 = useRef(null);

  // Initialise the base url for fetching images.
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";

  // Setting scroll amount to the right.
  const scrollRight = () => {
    ref1.current.scrollLeft += 584;
  };

  // Setting scroll amount to the left.
  const scrollLeft = () => {
    ref1.current.scrollLeft -= 584;
  };

  return (
    <main className="mt-20 justify-center flex flex-col items-center">
      <h1 className="text-gray-400 text-3xl ml-8 my-2 self-start tracking-wide">
        Trending Movies
      </h1>
      <nav className="flex flex-row flex-nowrap items-center w-full ">
        <button
          className="text-gray-400 text-2xl bg-gray-400 bg-opacity-10 hover:bg-opacity-40 hover:py-28 py-24 duration-200 px-3 transform -translate-x-0 rounded-l-lg hidden sm:block"
          onClick={() => scrollLeft()}
        >
          <i class="fas fa-chevron-left"></i>
        </button>

        <div
          ref={ref1}
          className="grid grid-flow-col w-full sc1 auto-cols-max overflow-x-auto justify-left -mb-32 md:-mb-52 rounded shadow-inner"
        >
          {/* Filtering movies that have a valid image link and returning those images as posters. */}
          {moviePop
            .filter((movie) => movie.poster_path)
            .map((movie) => {
              return (
                <header className=" flex flex-col items-start ">
                  <img
                    src={IMAGE_BASE_URL + movie.backdrop_path}
                    className="backdrop md:h-80 h-60  rounded "
                    alt={movie.title}
                    key={movie.id}
                  ></img>
                  <a
                    className=" relative md:bottom-1/3 bottom-1/4 flex flex-row items-end justify-start w-full "
                    href={`movie/${movie.id}`}
                    key={movie.id}
                  >
                    <img
                      src={IMAGE_BASE_URL + movie.poster_path}
                      className="md:w-48 w-32 shadow-2xl poster rounded transform hover:scale-105 transition-all duration-500 ml-6 mt-5 "
                      alt={movie.title}
                      key={movie.id}
                    ></img>
                    <article className="flex-flex-col w-60 md:w-96 pb-0">
                      <h1 className="text-gray-300 text-2xl overflow-visible tracking-wide px-4 ">
                        {movie.title}
                      </h1>
                      <p className="text-gray-300 tracking-wide px-4  ">
                        {movie.release_date.substr(0, 4)}
                      </p>
                    </article>
                  </a>
                </header>
              );
            })}
        </div>

        <button
          className="text-gray-400 text-2xl  bg-gray-400 bg-opacity-10 hover:bg-opacity-40 hover:py-28 py-24 duration-200 px-3 transform -translate-x-0 rounded-r-lg hidden sm:block "
          onClick={() => scrollRight()}
        >
          <i class="fas fa-chevron-right"></i>
        </button>
      </nav>
    </main>
  );
};

export default MoviesPopular;
