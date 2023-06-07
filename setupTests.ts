// Polyfill "window.fetch" used in the React component.
// eslint-disable-next-line import/no-extraneous-dependencies
import 'whatwg-fetch';

import '@testing-library/jest-dom';

// src/setupTests.js
import { server } from './src/mocks/browsers/testServer';

// Establish API mocking before all tests.
beforeAll(() => server.listen());

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());
