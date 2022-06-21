import { render, screen } from '@testing-library/react';
import InstructionalDesign from '../pages/id';

describe('Instructional Design', () => {
  it('renders a heading', () => {
    render(<InstructionalDesign />);

    const heading = screen.getByRole('heading', {
      name: /Instructional Design Services/i,
    });

    expect(heading).toBeInTheDocument();
  });
});

it('renders Instruction Design Page unchanged', () => {
  const { container } = render(<InstructionalDesign />);
  expect(container).toMatchSnapshot();
});
