import { render, screen } from '@testing-library/react';
import UXDevelopment from '../pages/ux';

describe('UX', () => {
  it('renders a heading', () => {
    render(<UXDevelopment />);

    const heading = screen.getByRole('heading', {
      level: 1,
      name: /UX Design and Development Services/i,
    });

    expect(heading).toBeInTheDocument();
  });
});

it('renders UX Page unchanged', () => {
  const { container } = render(<UXDevelopment />);
  expect(container).toMatchSnapshot();
});
