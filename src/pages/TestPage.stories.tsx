import { rest } from 'msw';

// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TestPage from './TestPage';

export default {
  title: 'pages/TestPage',
  component: TestPage,
  parameters: {
    msw: {
      handlers: [
        rest.get(`${process.env.API_URL}`, (req, res, ctx) =>
          res(
            ctx.status(200),
            ctx.delay(1000),
            ctx.json({
              Search: [
                {
                  Poster:
                    'https://png.pngtree.com/png-clipart/20210224/ourmid/pngtree-cute-little-bear-fly-net-png-image_2934534.jpg',
                  Title: 'Frozen',
                  Type: 'movie',
                  Year: '2013',
                  imdbID: 'tt2294629',
                },
                {
                  Poster:
                    'https://png.pngtree.com/png-clipart/20210224/ourmid/pngtree-cute-little-bear-fly-net-png-image_2934534.jpg',
                  Title: 'Frozen II',
                  Type: 'movie',
                  Year: '2019',
                  imdbID: 'tt4520988',
                },
              ],
            }),
          ),
        ),
      ],
    },
  },
} as ComponentMeta<typeof TestPage>;

const Template: ComponentStory<typeof TestPage> = () => <TestPage />;

export const Default = Template.bind({});
