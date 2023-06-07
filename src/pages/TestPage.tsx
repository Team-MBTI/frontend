import Image from 'next/image';

import { getMovies } from '@/apis/testApi';
import Button from '@/components/common/Button';
import LoadingSpinner from '@/components/common/LoadingSpinner';

import { useQuery } from '@tanstack/react-query';

interface MovieProp {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

function TestPage() {
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
        data.Search.map((movie: MovieProp) => (
          <div key={movie.imdbID}>
            Poster:
            <Image
              width={256}
              height={256}
              src={movie.Poster}
              alt="Poster iamge"
            />
          </div>
        ))}
      <LoadingSpinner />
    </section>
  );
}

export default TestPage;
