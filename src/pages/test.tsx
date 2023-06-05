import Button from '@/components/common/Button';

import LoadingSpinner from '@/components/common/LoadingSpinner';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface MovieProp {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

const getMovies = async () => {
  const response = await axios.get(process.env.API_URL as string);
  return response.data;
};

const TestPage = () => {
  const { data, isLoading, isError } = useQuery(['movies'], getMovies);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching users.</div>;
  }

  return (
    <section>
      <Button>Button!!</Button>
      {data &&
        data.Search.map((movie: MovieProp) => {
          return (
            <div key={movie.imdbID}>
              Poster: <img src={movie.Poster} alt="Poster iamge" />
            </div>
          );
        })}
      <LoadingSpinner />
    </section>
  );
};

export default TestPage;
