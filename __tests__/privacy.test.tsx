import { render, screen } from '@testing-library/react';
import Privacy from '../pages/privacy';

describe('Privacy', () => {
  it('renders the heading', () => {
    render(<Privacy />);

    const heading = screen.getByRole('heading', {
      level: 1,
      name: /Privacy Policy/i,
    });

    expect(heading).toBeInTheDocument();
  });
});

it('renders about unchanged', () => {
  const { container } = render(<Privacy />);
  expect(container).toMatchSnapshot();
});
