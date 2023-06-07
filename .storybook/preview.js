import QueryProvider from '../src/utils/QueryProvider';
import { ThemeProvider } from '@emotion/react';
import { Global } from '@emotion/react';
import GlobalStore from '../src/store/GlobalStore';
import { initialize, mswDecorator } from 'msw-storybook-addon';
import { worker } from '../src/mocks/browsers/server';

worker.start();

// MSW 초기화 함수 실행
initialize();

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  mswDecorator,
  (Story) => {
    const { theme } = GlobalStore();
    return (
      <>
        <QueryProvider>
          <ThemeProvider theme={{ mode: theme }}>
            <Global styles={{}} />
            <Story />
          </ThemeProvider>
        </QueryProvider>
      </>
    );
  },
];
