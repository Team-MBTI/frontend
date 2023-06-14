import { render, screen } from '@testing-library/react';

import TestPage from './TestPage';

describe('TestPage', () => {
  it('TestPage render testing', () => {
    render(<TestPage />);
    const LoadingElement = screen.getByText('Loading...');
    expect(LoadingElement).toBeInTheDocument();
  });
});
