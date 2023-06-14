import { rest } from 'msw';

export const GET_MOVIE_INFOS = rest.get(
  `${process.env.API_URL}`,
  (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.delay(1000),
      ctx.json({
        Search: [
          {
            Poster:
              'https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_SX300.jpg',
            Title: 'Frozen',
            Type: 'movie',
            Year: '2013',
            imdbID: 'tt2294629',
          },
          {
            Poster:
              'https://m.media-amazon.com/images/M/MV5BMjA0YjYyZGMtN2U0Ni00YmY4LWJkZTItYTMyMjY3NGYyMTJkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SX300.jpg',
            Title: 'Frozen II',
            Type: 'movie',
            Year: '2019',
            imdbID: 'tt4520988',
          },
        ],
      }),
    ),
);
