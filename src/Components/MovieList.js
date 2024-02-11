import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
// console.log(movies)

  return (
    <div className="bg-[rgba(0,0,0,0)]">
      <h1 className="p-10 text-white font-bold text-2xl">{title}</h1>
      <div className="overflow-scroll overflow-y-hidden no-scrollbar">
      <div className="flex w-[250%] gap-5 pl-10">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} poster_path={movie.poster_path} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default MovieList;
