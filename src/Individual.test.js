import { render, screen } from '@testing-library/react';
import { Individual } from './Individual';

describe('Individual', () => {
  it('render individual as span single point', () => {
    render(<Individual />);
    const individualOnScreen = screen.getByTestId('individual');
    expect(individualOnScreen).toBeInTheDocument();
    expect(individualOnScreen.tagName.toLocaleLowerCase()).toEqual('span');
  });

  it('render individual on zero position when there is no params', () => {
    render(<Individual />);
    const individualOnScreen = screen.getByTestId('individual');
    expect(individualOnScreen).toHaveStyle(
      `transform: translate(0px, 0px)`
    );
  });

  it('move individual to the right position', () => {
    render(<Individual position={{ x: 10, y: -10 }} />);
    const individualOnScreen = screen.getByTestId('individual');
    expect(individualOnScreen).toHaveStyle(
      `transform: translate(10px, -10px)`
    );
  });
});
