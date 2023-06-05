import { render, screen } from '@/tests/testing-library-utils';
import TestPage from './TestPage';

describe('TestPage', () => {
  it('TestPage render testing', () => {
    render(<TestPage />);
    const LoadingElement = screen.getByText('Loading...');
    expect(LoadingElement).toBeInTheDocument();
  });
});
