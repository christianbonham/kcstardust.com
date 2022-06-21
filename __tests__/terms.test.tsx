import { render, screen } from '@testing-library/react';
import Terms from '../pages/terms';

describe('Privacy', () => {
  it('renders a heading', () => {
    render(<Terms />);

    const heading = screen.getByRole('heading', {
      name: /Terms of Use/i,
    });

    expect(heading).toBeInTheDocument();
  });
});

it('renders about unchanged', () => {
  const { container } = render(<Terms />);
  expect(container).toMatchSnapshot();
});
