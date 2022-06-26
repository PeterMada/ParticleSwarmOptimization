import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('render generate population button', () => {
    render(<App />);
    expect(
      screen.getByRole('button', { name: /generate population/i })
    ).toBeInTheDocument();
  });

  it('render a input for number of individuals', () => {
    render(<App />);
    expect(screen.getByLabelText(/population size/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/population size/i).type).toEqual(
      'number'
    );
  });

  describe('number of individuals', () => {
    it('has min value set to 1', () => {
      render(<App />);
      expect(screen.getByLabelText(/population size/i).min).toBe('1');
    });

    it('has max value set to 99', () => {
      render(<App />);
      expect(screen.getByLabelText(/population size/i).max).toBe('99');
    });

    it('has step value set to 1', () => {
      render(<App />);
      expect(screen.getByLabelText(/population size/i).step).toBe('1');
    });

    it('has default value set to 1', () => {
      render(<App />);
      expect(screen.getByLabelText(/population size/i).value).toBe('1');
    });
  });
});
