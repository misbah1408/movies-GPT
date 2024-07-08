import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log(movies)
  return (
    <div className="bg-[rgba(0,0,0,0)]">
      <h1 className="p-10 text-white font-bold text-2xl">{title}</h1>
      <div className="w-screen overflow-scroll overflow-y-hidden no-scrollbar scroll-smooth">
        <div className="flex gap-5 pl-10 pr-10">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movTitle={movie.original_title} movImg={movie.poster_path} rate={movie.vote_average} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
