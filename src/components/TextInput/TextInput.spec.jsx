import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextInput } from '.';

describe('<TextInput />', () => {
  it('should have a value of searchValue', () => {
    const fn = jest.fn();
    render(<TextInput actionFn={fn} inputValue={'testando'} />);

    const input = screen.getByPlaceholderText(/type your search/i);
    expect(input.value).toBe('testando');
  });

  it('should call handleChange function on each key pressed', () => {
    const fn = jest.fn();
    render(<TextInput actionFn={fn} inputValue="Um Valor qualquer" />);

    const input = screen.getByPlaceholderText(/type your search/i);
    const value = 'O valor';

    userEvent.type(input, value);

    expect(input.value).toBe('Um Valor qualquer');
    expect(fn).toHaveBeenCalledTimes(value.length);
  });

  it('should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<TextInput actionFn={fn} inputValue="" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
