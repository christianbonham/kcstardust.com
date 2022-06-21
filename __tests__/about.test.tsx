import { render, screen } from '@testing-library/react';
import About from '../pages/about';

describe('About', () => {
  it('renders a heading', () => {
    render(<About />);

    const heading = screen.getByRole('heading', {
      name: /About Us/i,
    });

    expect(heading).toBeInTheDocument();
  });
});

it('renders about unchanged', () => {
  const { container } = render(<About />);
  expect(container).toMatchSnapshot();
});
