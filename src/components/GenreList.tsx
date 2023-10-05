import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data, errors, isLoading } = useGenres();
  return <ul>{data && data.map((genre) => <li>{genre.name}</li>)}</ul>;
};

export default GenreList;
